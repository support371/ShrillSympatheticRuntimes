import { Link, useLocation } from "wouter";
import { NAV_ITEMS, CONTACT_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Mail, Menu, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useCurrentUser, useLogout } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

export function Header() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { data: currentUser } = useCurrentUser();
  const logoutMutation = useLogout();
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
      toast({
        title: "Logged out",
        description: "You've been successfully logged out.",
      });
      setLocation("/");
    } catch (error) {
      toast({
        title: "Logout failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="w-full bg-white border-b border-border sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>{CONTACT_INFO.email}</span>
          </div>
          <div className="hidden md:flex gap-4 opacity-80 text-xs uppercase tracking-wider">
            {currentUser ? (
              <span>Welcome, {currentUser.fullName || currentUser.email}</span>
            ) : (
              <span>Professional Real Estate Investment</span>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Alliance Trust Realty" 
              className="h-12 w-auto"
            />
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary uppercase tracking-wide",
                  location === item.href
                    ? "text-primary font-bold border-b-2 border-secondary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {currentUser ? (
            <>
              <Link href={currentUser.isDemo ? "/demo/dashboard" : "/dashboard"}>
                <Button variant="ghost" className="font-semibold uppercase tracking-wide text-xs">
                  Dashboard
                </Button>
              </Link>
              <Link href="/admin/diagnostics">
                <Button variant="ghost" className="font-semibold uppercase tracking-wide text-xs">
                  Diagnostics
                </Button>
              </Link>
              <Button 
                variant="outline"
                onClick={handleLogout}
                className="font-semibold uppercase tracking-wide text-xs"
                disabled={logoutMutation.isPending}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="font-semibold uppercase tracking-wide text-xs">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-secondary hover:bg-secondary/90 text-white font-bold uppercase tracking-wide text-xs px-6">
                  Join Now
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href}>
                  <a
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-secondary",
                      location === item.href ? "text-primary font-bold" : "text-muted-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4">
                {currentUser ? (
                  <>
                    <Link href={currentUser.isDemo ? "/demo/dashboard" : "/dashboard"} onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full uppercase">Dashboard</Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="w-full uppercase" 
                      onClick={() => { handleLogout(); setIsOpen(false); }}
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full uppercase">Login</Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-secondary hover:bg-secondary/90 uppercase">Join Now</Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
