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
import { useActionState} from "react"
import { useRouter } from "next/navigation"
import { createUser } from "@/app/lib/actions"
import { SignupState } from "@/app/lib/definitions"

export default function SignupForm() {

  const initialState : SignupState= {
    message: "",
    errors: {
      name: "",
      email: "",
      password: "",
      role: ""
    }
  }

  const [state, formAction] = useActionState(createUser, initialState);
  const router = useRouter();

  if (state.message === "User created successfully!") {
    setTimeout(() => {
      router.push('/signin');
    }, 2000);
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
          <form action={formAction} className="space-y-5">
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
              {state.errors?.email && (
                <p style={{ color: 'red' }}>{state.errors.email}</p>
              )}
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
              {state?.errors?.password && (
                <p style={{ color: 'red' }}>{state.errors.password}</p>
              )}
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
              {state?.errors?.role && (
                <p style={{ color: 'red' }}>{state.errors.role}</p>
              )}
            </div>

            
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
