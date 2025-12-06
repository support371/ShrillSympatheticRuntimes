import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useRegister, useCurrentUser } from "@/lib/api";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Register() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const registerMutation = useRegister();
  const { toast } = useToast();
  const { data: currentUser } = useCurrentUser();

  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      setLocation(currentUser.isDemo ? "/demo/dashboard" : "/dashboard");
    }
  }, [currentUser, setLocation]);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await registerMutation.mutateAsync({ email, password, fullName });
      toast({
        title: "Account created!",
        description: "Welcome to Alliance Trust Realty.",
      });
      setLocation("/dashboard");
    } catch (error: any) {
      toast({
        title: "Registration failed",
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
            <h1 className="text-3xl font-serif font-bold text-primary">Create an Account</h1>
            <p className="text-muted-foreground mt-2">Start your real estate investment journey</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 space-y-6">
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-md" 
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  data-testid="input-fullname"
                />
              </div>
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
                disabled={registerMutation.isPending}
                data-testid="button-register"
              >
                {registerMutation.isPending ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login">
                <a className="text-secondary font-bold hover:underline">Login here</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
