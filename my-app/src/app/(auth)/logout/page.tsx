"use client"
import { logoutUser } from "@/app/lib/actions"


export default function logout(){
    logoutUser()
    return <p> logging Out...</p>
}