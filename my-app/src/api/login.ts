import { NextResponse } from "next/server";
import { User, IUser } from "@/app/lib/model/userModel"; // Assuming IUser is your user interface
import connectToDb from "@/app/lib/db";

interface LoginRequestBody {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  await connectToDb();

  const { email, password }: LoginRequestBody = await req.json();

  // Tell TS the result is IUser or null
  const user: IUser | null = await User.findOne({ email }).exec();

  if (!user) {
    return NextResponse.json(
      { success: false, message: "User does not exist, please register" },
      { status: 401 }
    );
  }

  if (user.password !== password) {
    return NextResponse.json(
      { success: false, message: "Incorrect password" },
      { status: 401 }
    );
  }

  return NextResponse.json(
    { success: true, message: "Login successful" },
    { status: 200 }
  );
}
