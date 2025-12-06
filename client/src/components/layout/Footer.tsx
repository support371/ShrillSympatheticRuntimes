import { CONTACT_INFO } from "@/lib/constants";
import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { useSubscribeNewsletter } from "@/lib/api";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const [email, setEmail] = useState("");
  const subscribeMutation = useSubscribeNewsletter();
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    try {
      await subscribeMutation.mutateAsync(email);
      toast({
        title: "Subscribed!",
        description: "You'll receive our latest market intelligence updates.",
      });
      setEmail("");
    } catch (error: any) {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-secondary">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Contact Block */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-secondary">Contact Us</h3>
          <ul className="space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-secondary shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-secondary shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-secondary shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>

        {/* Newsletter Block */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-secondary">Newsletter</h3>
          <p className="text-sm text-gray-300">
            Subscribe to our newsletter to receive the latest market intelligence and real estate opportunities.
          </p>
          <form className="space-y-3" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-secondary transition-colors rounded-sm"
              required
            />
            <button 
              type="submit"
              disabled={subscribeMutation.isPending}
              className="w-full py-3 bg-secondary text-white font-bold uppercase text-xs tracking-wider hover:bg-secondary/90 transition-colors rounded-sm disabled:opacity-50"
            >
              {subscribeMutation.isPending ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
        </div>

        {/* About Block */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-secondary">About Us</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Alliance Trust Realty is a premier real estate investment platform dedicated to providing institutional-grade opportunities to individual investors. We combine market intelligence with strategic asset allocation.
          </p>
          <Link href="/about">
            <a className="inline-block text-secondary hover:text-white transition-colors text-sm font-bold uppercase tracking-wide border-b border-secondary hover:border-white pb-1">
              Read More
            </a>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Alliance Trust Realty. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
