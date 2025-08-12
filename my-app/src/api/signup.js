import { NextResponse } from "next/server";
import { User } from "@/app/lib/model/userModel";
import connectTodb from "../lib/datab";
import { error } from "console";

export async function POST(req) {
  try {
    await connectTodb();
    const { name, email, password, role } = await req.json();
    console.log(name, email, password, role);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    const user = new User({ name, email, password, role });
    await user.save();

    return NextResponse.json({
      success: true,
      message: "Registration successful",
    });
    throw new error("Lol");
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error: " + error.message },
      { status: 500 }
    );
  }
}
