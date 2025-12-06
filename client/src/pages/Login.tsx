import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Login() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-primary">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">Access your secure investor portal</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <input type="email" className="w-full p-3 border rounded-md" placeholder="name@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input type="password" className="w-full p-3 border rounded-md" placeholder="••••••••" />
            </div>
            <Button className="w-full bg-primary text-white uppercase tracking-wide py-6">Login</Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Link href="/demo/dashboard">
              <Button variant="outline" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white uppercase tracking-wide py-6">
                Try $100K Demo Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
