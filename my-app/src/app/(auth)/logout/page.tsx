"use client"
import {useEffect} from "react"
import { useRouter  } from "next/navigation"

export default function logout(){
    const router = useRouter();


    useEffect(()=>{
        localStorage.removeItem("loggedIn");
        router.push("/signin");

    }, [router]);
    return <p> logging Out...</p>
}