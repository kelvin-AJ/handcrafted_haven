"use client"
import { logoutUser } from "@/app/lib/actions";

export default function Logout() {
  return (
    <form action={logoutUser}>
      <button type="submit">Log Out</button>
    </form>
  );
}