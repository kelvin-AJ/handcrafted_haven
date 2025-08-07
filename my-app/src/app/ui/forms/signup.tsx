"use client"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import styles from "./form.module.css"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupForm() {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError("")
    setSuccess("")
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setSuccess("Registration successful! Redirecting to home...")
      setTimeout(() => {
        router.push("/")
      }, 1500)
    } else {
      const result = await res.json()
      setError(result.message || "Registration failed")
    }
  }

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardHeader className="pb-0">
          <CardTitle className={styles.title}>Sign Up</CardTitle>
          <p className={styles.description}>
            Create your account to get started.
          </p>
        </CardHeader>

        <CardContent className={styles.cont}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className={styles.inputGroup}>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="At least 8 characters, one uppercase, one lowercase, and one number"
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <Label htmlFor="role">Role</Label>
              <select
                id="role"
                name="role"
                required
                className={styles.input}
                defaultValue="user"
              >
                <option value="user">User</option>
                <option value="seller">Seller</option>
              </select>
            </div>

            {error && <div className={styles.error}>{error}</div>}
            {success && <div className={styles.success}>{success}</div>}

            <button type="submit" className={styles.button}>
              Sign Up
            </button>
          </form>
        </CardContent>

        <CardFooter className={styles.footer}>
          Already have an account?
          <a href="/signin" className={styles.link}>
            Sign in
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}