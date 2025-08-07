// import { Button } from "@/components/ui/button"
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

export default function LoginForm() {
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
          <form action="./login" method="post" className="space-y-5">
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
          <a href="/register" className={styles.link}>
            Sign up
          </a>
        </CardFooter>
      </Card>
    </div>
  )
}
