import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useLogin, useCreateDemoAccount, useCurrentUser } from "@/lib/api";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Login() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLogin();
  const demoMutation = useCreateDemoAccount();
  const { toast } = useToast();
  const { data: currentUser } = useCurrentUser();

  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      setLocation(currentUser.isDemo ? "/demo/dashboard" : "/dashboard");
    }
  }, [currentUser, setLocation]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await loginMutation.mutateAsync({ email, password });
      toast({
        title: "Welcome back!",
        description: "You've successfully logged in.",
      });
      setLocation(result.user.isDemo ? "/demo/dashboard" : "/dashboard");
    } catch (error: any) {
      toast({
        title: "Login failed",
        description: error.message || "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  const handleDemoAccount = async () => {
    try {
      const result = await demoMutation.mutateAsync();
      toast({
        title: "Demo Account Created",
        description: "Explore with $100,000 virtual capital.",
      });
      setLocation("/demo/dashboard");
    } catch (error: any) {
      toast({
        title: "Demo creation failed",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 flex justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-primary">Welcome Back</h1>
            <p className="text-muted-foreground mt-2">Access your secure investor portal</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 space-y-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email Address</label>
                <input 
                  type="email" 
                  className="w-full p-3 border rounded-md" 
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-testid="input-email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <input 
                  type="password" 
                  className="w-full p-3 border rounded-md" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  data-testid="input-password"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary text-white uppercase tracking-wide py-6"
                disabled={loginMutation.isPending}
                data-testid="button-login"
              >
                {loginMutation.isPending ? "Logging in..." : "Login"}
              </Button>
            </form>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white uppercase tracking-wide py-6"
              onClick={handleDemoAccount}
              disabled={demoMutation.isPending}
              data-testid="button-demo"
            >
              {demoMutation.isPending ? "Creating Demo..." : "Try $100K Demo Account"}
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/register">
                <a className="text-secondary font-bold hover:underline">Register here</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
