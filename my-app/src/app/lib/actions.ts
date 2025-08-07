"use server"

import connectTodb from './db'
import { Product, IProduct } from './model/product'
import { User, IUser } from './model/userModel'
import { Feedback, IFeedback } from './model/feedbackModel'
import { Types } from 'mongoose';
import { State } from '../lib/definitions';
import { ObjectId } from 'mongodb'
import products from '../seller/page'


// Registration


// Create Product

export async function createProductSeeds(products: IProduct[]) {
  await connectTodb();
  const response = await Product.insertMany(products);
  return response;
}

export async function deleteAllProducts() {
  await connectTodb();
  const response = await Product.deleteMany({});
  return response;
}


export async function createProduct(prevState: State, formData: FormData): Promise<State> {
  const title = formData.get('title')?.toString() || "";
  const price = formData.get('price')?.toString() || "";
  const description = formData.get('description')?.toString() || "";
  const imageURL = formData.get('imageURL')?.toString() || "";

  // your validation logic here
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

  const response = await Product.insertOne({
    title,
    price: parseFloat(price),
    description,
    imageURL,
    seller : new ObjectId
  })

  console.log(response)

  // save to DB or do some action
  return { message: "Product created successfully" };
}

// get product by id
export async function getProductById(id: string | Types.ObjectId): Promise<IProduct | null> {
  await connectTodb()
  const product = await Product.findById(id).populate('seller')
  return product ? product.toObject() : null
}

// get all products
export async function getProducts(filter = {}): Promise<IProduct[]> {
  await connectTodb()
  const products = await Product.find(filter).populate('seller')
  return products.map(p => p.toObject())
}

// Get Seller's product
export async function getProductsBySeller(sellerId: string | Types.ObjectId): Promise<IProduct[]> {
  await connectTodb()
  const products = await Product.find({ seller: sellerId }).populate('seller')
  return products.map(p => p.toObject())
}

// Update product
export async function updateProduct(id: string | Types.ObjectId, updates: Partial<IProduct>): Promise<IProduct | null> {
  await connectTodb()
  const product = await Product.findByIdAndUpdate(id, updates, { new: true }).populate('seller')
  return product ? product.toObject() : null
}

// Delete product
export async function deleteProduct(id: string | Types.ObjectId): Promise<IProduct | null> {
  await connectTodb()
  const product = await Product.findByIdAndDelete(id)
  return product ? product.toObject() : null
}


// USERS
export async function getAllUsers(): Promise<IUser[]> {
  await connectTodb()
  const users = await User.find()
  return users.map(u => u.toObject())
}


export async function createUser(user: IUser): Promise<IUser> {
  await connectTodb()
  const response = await User.insertOne(user);
  
  return response
}

export async function deleteUser(id: string | Types.ObjectId): Promise<IUser | null> {
  await connectTodb()
  const user = await User.findByIdAndDelete(id)
  return user ? user.toObject() : null
}