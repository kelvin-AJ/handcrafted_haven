import { NextResponse} from "next/server"
import { User} from "@/app/lib/model/userModel"
import connectTodb from "../lib/db"


export async function POST(req){
    await connectTodb()

    const {email, password} = await req.json()
    const user = await User.findone({email})

    if(!user){
        return NextResponse.json(
            {success: false , message: 'user does not exist, please register'},
            {status: 401}
        )
    }
    if (user.password !== password){
        return NextResponse.json(
             {success: false , message: 'incorrect password'},
             {status: 401}

        )
    }

    return NextResponse.json({ success: true, message: "login successful"})
}