"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "./form.module.css";
import { useActionState, useEffect } from "react";
import { loginUser } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import { LoginState } from "@/app/lib/definitions";

export default function LoginForm() {


  const initialState: LoginState = {
    message: "",
    success: false, 
    errors: {
      email: "",
      password: ""
    }
  };

  const [state, formAction] = useActionState(loginUser, initialState);
  const router = useRouter();


  useEffect(() => {
    console.log(state)
    if (state.success) {
      router.push('/seller');
    }
  }, [state.success, router]);


  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardHeader className="pb-0">
          <CardTitle className={styles.title}>Sign In</CardTitle>
          <p className={styles.description}>
            Welcome back! Please enter your credentials.
          </p>
        </CardHeader>

        <CardContent className={styles.cont}>
          <form action={formAction} className="space-y-5">
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

            {state.message && !state.success && (
                <p style={{ color: 'red' }}>{state.message}</p>
            )}

            <button type="submit" className={styles.button}>
              Sign In
            </button>
          </form>
        </CardContent>

        <div className={styles.forgotLink}>
          <a href="/forgot-password" className={styles.forgotLink}>
            Forgot password?
          </a>
        </div>

        <CardFooter className={styles.footer}>
          Don’t have an account?
          <a href="/signup" className={styles.link}>
            Sign up
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}