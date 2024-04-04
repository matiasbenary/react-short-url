import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const LoginCard = () => {
  return (
    <Card className="mx-auto max-w-sm">
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl font-bold">Login</CardTitle>
      <CardDescription>Enter your email below to login to your account</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="relative space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a className="ml-auto inline-block text-sm underline" href="#">
              Forgot your password?
            </a>
          </div>
          <Input id="password" required type="password" />
          <Button className="absolute bottom-1 right-1 h-7 w-7" size="icon" variant="ghost">
            <EyeIcon className="h-4 w-4" />
            <span className="sr-only">Toggle password visibility</span>
          </Button>
        </div>
        <Button className="w-full" type="submit">
          Login
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don't have an account?
        <a className="underline" href="#">
          Sign up
        </a>
      </div>
    </CardContent>
  </Card>
  )
}

function EyeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }

  export default LoginCard;