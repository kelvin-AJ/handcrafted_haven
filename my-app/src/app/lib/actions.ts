"use server"

import connectTodb from './db'
import { Product, IProduct } from './model/product'
import { User, IUser } from './model/userModel'
import { Feedback, IFeedback } from './model/feedbackModel'
import { Types } from 'mongoose';
import { revalidatePath } from 'next/cache';
import { State, LoginState, SignupState, EditFormState } from '../lib/definitions';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'



interface UserPayload  extends jwt.JwtPayload{
  userId: string;
  email: string;
  role: 'user' | 'seller';
}


// Authentication
async function authenticateUser() : Promise<UserPayload> {
   const cookieStore = cookies();
   const token = (await cookieStore).get('authToken')?.value;


   if(!token) {
    console.log("No token found");
    redirect("/signin")
    return {} as UserPayload;
   }

   const secret = process.env.JWT_SECRET;

   if(!secret) {
    console.log("JWT Secret not set");
    throw new Error ("Server Configuration Error");
   }

   try {
    const decoded = jwt.verify(token, secret) as UserPayload;

    return decoded;
   }catch(error) {
    console.log("invalid token :" + error);
    return {} as UserPayload
   }
}




// PRODUCTS

export async function deleteAllProducts() {
  try {
    await connectTodb();
    const response = await Product.deleteMany({});
    return response;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete products.');
  }
}


export async function createProduct(prevState: State, formData: FormData): Promise<State> {

  const title = formData.get('title')?.toString() || "";
  const price = formData.get('price')?.toString() || "";
  const description = formData.get('description')?.toString() || "";
  const imageURL = formData.get('imageURL')?.toString() || "";


  const errors = {
    title: title ? undefined : "Title is required",
    price: price ? undefined : "Price is required",
    description: description ? undefined : "Description is required",
    imageURL: imageURL ? undefined : "Image URL is required",
  };

  const hasErrors = Object.values(errors).some(Boolean);
  if (hasErrors) {
    return { errors };
  }

  try {
    await connectTodb();
    const auth = await authenticateUser();
    const sellerId = new ObjectId(auth.userId);
    const product :  IProduct = {
      _id: new Types.ObjectId(),
      title,
      price: parseFloat(price),
      description,
      imageURL,
      seller: sellerId,
    }


    const response = await Product.create(product);
    console.log(response);

    console.log("response")
  } catch (error) {
    return { message: 'Database Error: Failed to Create Product.' };
  }

  revalidatePath('/products');
  return { message: "Product created successfully" };
}

// get product by id
export async function getProductById(id: string | Types.ObjectId): Promise<IProduct | null> {
  try {
    await connectTodb();
    const product = await Product.findById(id).populate('seller');
    return product ? product.toObject() : null;
  } catch (error) {
    console.error('Database Error:', error);
    return null;
  }
}

// get all products
export async function getProducts(filter = {}): Promise<IProduct[]> {
  try {
    await connectTodb();
    const products = await Product.find(filter).populate({
      path: 'seller',
      select: '-password' 
    });
    return products.map(p => p.toObject());
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}

// Get Seller's product
export async function getProductsBySeller(id : string | null = null): Promise<IProduct[]> {
  try {
    await connectTodb();
    const authentication : UserPayload = await authenticateUser();

    const sellerId = id || new ObjectId(authentication.userId);

    const products = await Product.find({ seller: sellerId }).populate({
      path: 'seller',
      select: '-password' 
    });

    return products.map(p => p.toObject());
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}

// Update product
export async function updateProduct(id: string | Types.ObjectId, updates: Partial<IProduct>): Promise<IProduct | null> {
  try {
    await connectTodb();
    const product = await Product.findByIdAndUpdate(id, updates, { new: true }).populate('seller');
    if (product) {
      revalidatePath('/products');
      revalidatePath(`/products/${id}`);
    }
    return product ? product.toObject() : null;
  } catch (error) {
    console.error('Database Error:', error);
    return null;
  }
}

// Delete product
export async function deleteProduct(id: string | Types.ObjectId): Promise<IProduct | null> {
  try {
    await connectTodb();
    const product = await Product.findByIdAndDelete(id);
    if (product) {
      revalidatePath('/products');
    }
    return product ? product.toObject() : null;
  } catch (error) {
    console.error('Database Error:', error);
    return null;
  }
}


// USERS
export async function getAllUsers(): Promise<IUser[]> {
  try {
    await connectTodb();
    const users = await User.find().select('-password');
    return users.map(u => u.toObject());
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}
export async function getUser(id: string | Types.ObjectId): Promise<IUser | null> {
  try {
    await connectTodb();
    const user = await User.findById(id).select('-password'); 
    return user ? user.toObject() : null;
  } catch (error) {
    console.error('Database Error:', error);
    return null;
  }
}


export async function createUser(prevState: SignupState, formData: FormData): Promise<SignupState> {
  const password = formData.get('password') as string;
  if (!password) {
    return { message: 'Password is required.', errors: { password: 'Password is required.' } };
  }
  const passwordHash = await bcrypt.hash(password, 10);

  const newUser: IUser = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    password: passwordHash,
    role: formData.get('role') as 'user' | 'seller',
    dateJoined: new Date(),
    profileImage: '',
    bio: '',
    rating: 0,
    title: ''
  };

  try {
    await connectTodb();

    // Check if a user with the same email already exists
    const existingUser = await User.findOne({ email: newUser.email });
    if (existingUser) {
      return {
        message: 'A user with this email already exists.',
        errors: {
          email: 'This email is already in use.',
        }
      };
    }

    const createdUser = await User.create(newUser);

    if (createdUser) {
      return {
        message: 'User created successfully!',
        errors: {}
      };
    }

    return {
      message: 'Failed to create user.',
      errors: {}
    };

  } catch (error) {
    if (
      error
    ) {
      return {
        message: 'Validation failed. Please check the fields.',
        errors: {
          email: 'This email is already in use.',
        }
      };
    }
    console.error('Database Error:', error);
    return {
      message: 'An unexpected error occurred. Failed to create user.',
      errors: {} 
    };
  }
}

export async function loginUser(prevState: LoginState, formData: FormData): Promise<LoginState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {
    await connectTodb();
    const user = await User.findOne({ email });

    if (!user) {
      return {
        message: 'User not found.',
        success: false,
        errors: { email: 'User not found.' },
      };
    }

    const passwordsMatch = await bcrypt.compare(password, user.password);

    if (passwordsMatch) {
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        console.error('JWT_SECRET is not set.');
        return { message: 'Server configuration error.', success: false, errors: {} };
      }
      const token = jwt.sign(
        {
          userId: user._id.toString(), // Ensure userId is a string
          email: user.email,
          role: user.role,
        },
        secret,
        { expiresIn: '5h' }
      );

      (await cookies()).set('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', 
        maxAge: 60 * 60 * 5, 
        path: '/', 
      });

      // No need to return the token in the response body anymore
      return { message: 'Login Successful', success : true, errors: {} };
    } else {
      return { message: 'Incorrect password.', success : false,  errors: { password: 'Incorrect password.' } };
    }
  } catch (error) {
    console.error('Database Error:', error);
    return {
      message: 'An unexpected error occurred. Please try again.',
      success: false,
      errors: {},
    };
  }
};

export async function getLoggedInUser(): Promise<IUser | null> {
  await connectTodb();
  const auth = await authenticateUser();

  try {
    const user = await User.findById(auth.userId)
      .select('-password')
      .lean();

    if (!user) return null;

    return {
      ...user,
      _id: user._id.toString(), 
    } as IUser;

  } catch (error) {
    console.error(error);
    return null;
  }
}


export async function updateUser(
  prevState: EditFormState,
  formData: FormData
): Promise<EditFormState> {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return { message: 'Server configuration error.', errors: {} };
  }

  try {
    const auth = await authenticateUser();
    const userId = new Types.ObjectId(auth.userId);

    const name = formData.get('name')?.toString() || '';
    const title = formData.get('title')?.toString() || '';
    const bio = formData.get('bio')?.toString() || '';
    const role = formData.get('role')?.toString() || '';

    const errors: Partial<EditFormState['errors']> = {
      name: name ? undefined : 'Name is required.',
      title: title ? undefined : 'Title is required.',
      bio: bio ? undefined : 'Bio is required.',
      role: role ? undefined : 'Role is required.',
    };

     const updates = { name, title, bio, role };
    
    if (Object.values(errors).some(Boolean)) {
      return { errors, message: 'Validation failed.' };
    }

    await connectTodb();

    const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true }).select('-password');

    if (!updatedUser) {
      return { message: 'User not found.', errors: {} };
    }

    revalidatePath('/seller');

    return { message: 'Profile updated successfully.', errors: {} };
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return { message: 'Authorization failed: Invalid or expired token.', errors: {} };
    }
    console.error('Database Error:', error);
    return { message: 'Failed to update profile.', errors: {} };
  }
}



export async function deleteUser(id: string | Types.ObjectId): Promise<IUser | null> {
  try {
    await connectTodb();
    const user = await User.findByIdAndDelete(id);
    return user ? user.toObject() : null;
  } catch (error) {
    console.error('Database Error:', error);
    return null;
  }
}



// FEEDBACKS (REVIEWS)
export async function createFeedback(feedback: IFeedback): Promise<IFeedback> {
  try {
    await connectTodb();
    const newFeedback = await Feedback.create(feedback);
    // Optionally revalidate paths that show feedback
    return newFeedback.toObject();
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create feedback.');
  }
}

export async function getFeedbacksforSeller(): Promise<IFeedback[]> {
  try {
    await connectTodb();
    const auth = await authenticateUser();
    const sellerId = new ObjectId(auth.userId);


    const feedbacks = await Feedback.find({ seller: new ObjectId(sellerId) }).populate("author")
    return feedbacks.map(f => f.toObject());
  } catch (error) {
    console.error('Database Error:', error);
    return [];
  }
}

export async function updateFeedback(id: string | Types.ObjectId, updates: Partial<IFeedback>): Promise<IFeedback | null> {
  try {
    await connectTodb();
    const feedback = await Feedback.findByIdAndUpdate(id, updates, { new: true });
    return feedback ? feedback.toObject() : null;
  } catch (error) {
    console.error('Database Error:', error);
    return null;
  }
}

export async function deleteFeedback(id: string | Types.ObjectId): Promise<IFeedback | null> {
  try {
    await connectTodb();
    const feedback = await Feedback.findByIdAndDelete(id);
    return feedback ? feedback.toObject() : null;
  } catch (error) {
    console.error('Database Error:', error);
    return null;
  }
}