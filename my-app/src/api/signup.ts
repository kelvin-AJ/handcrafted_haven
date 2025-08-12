import { NextResponse } from "next/server";
import { User, IUser } from "@/app/lib/model/userModel";
import connectToDb from "@/app/lib/db";

interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
  role?: string;
}

export async function POST(req: Request) {
  try {
    await connectToDb();

    const { name, email, password, role }: RegisterRequestBody = await req.json();

    console.log(name, email, password, role);

    const existingUser: IUser | null = await User.findOne({ email }).exec();
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    const user = new User({ name, email, password, role });
    await user.save();

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
      },
      { status: 201 }
    );

  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: "Server error: " + err.message },
      { status: 500 }
    );
  }
}
