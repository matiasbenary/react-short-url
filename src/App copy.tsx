import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
function App() {


  return (
    <>
     <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <header className="absolute top-0 left-0 right-0 flex items-center justify-between p-4">
        <img
          alt="BRAC University Logo"
          className="h-12"
          height="50"
          src="/placeholder.svg"
          style={{
            aspectRatio: "150/50",
            objectFit: "cover",
          }}
          width="150"
        />
        <h1 className="text-xl font-semibold">BRAC UNIVERSITY</h1>
      </header>
      <main className="w-full max-w-md rounded bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-lg font-semibold">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="username">
              Username:
            </label>
            <Input id="username" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
              Password:
            </label>
            <Input id="password" placeholder="Password" type="password" />
          </div>
          <div className="flex items-center justify-between">
            <Button>Login</Button>
            <a className="text-sm text-blue-600 hover:underline" href="#">
              Forgot Username/Password?
            </a>
          </div>
        </form>
        <div className="mt-6">
          <Button className="w-full bg-gray-200 text-gray-700" variant="secondary">
            Help Desk (For Student)
          </Button>
        </div>
      </main>
    </div>
    </>
  )
}

export default App
