import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Link } from "wouter";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { useSubscribeNewsletter } from "@/lib/api";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

export function Footer() {
  const [email, setEmail] = useState("");
  const subscribeMutation = useSubscribeNewsletter();
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      await subscribeMutation.mutateAsync(email);
      toast({ title: "Subscribed!", description: "You'll receive our latest market intelligence updates." });
      setEmail("");
    } catch (error: any) {
      toast({ title: "Subscription failed", description: error.message || "Please try again later.", variant: "destructive" });
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
              <MapPin className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-secondary shrink-0" />
              <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-secondary transition-colors">{CONTACT_INFO.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Printer className="h-5 w-5 text-secondary shrink-0" />
              <span>Fax: {CONTACT_INFO.fax}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-secondary shrink-0" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-secondary transition-colors">{CONTACT_INFO.email}</a>
            </li>
          </ul>

          {/* Social Icons */}
          <div>
            <h4 className="text-sm font-bold text-secondary uppercase tracking-widest mb-3">Follow Us</h4>
            <div className="flex items-center gap-3 flex-wrap">
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-white transition-all" title="X / Twitter">
                <TwitterIcon />
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-white transition-all" title="TikTok">
                <TikTokIcon />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-white transition-all" title="Facebook">
                <FacebookIcon />
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-white transition-all" title="Instagram">
                <InstagramIcon />
              </a>
              <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-secondary hover:text-white transition-all" title="Telegram Channel">
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Block */}
        <div className="space-y-6">
          <h3 className="text-xl font-serif font-bold text-secondary">Newsletter</h3>
          <p className="text-sm text-gray-300">
            Subscribe to receive the latest market intelligence and real estate opportunities from Alliance Trust Realty.
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
          <div className="space-y-2 text-sm text-gray-400">
            <p>🏛 UK Reg: SC001731 (Companies House)</p>
            <p>🇺🇸 US EIN: 39-3307036</p>
            <p>📍 Torrance, CA · United Kingdom</p>
          </div>
          <Link href="/about">
            <a className="inline-block text-secondary hover:text-white transition-colors text-sm font-bold uppercase tracking-wide border-b border-secondary hover:border-white pb-1">
              Read More →
            </a>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Alliance Trust Realty. All Rights Reserved.</p>
        <p>
          <a href="https://alliancetrustrealty.com" className="hover:text-secondary transition-colors">alliancetrustrealty.com</a>
          {" · "}
          <a href="https://gemcybersecurityassist.com" className="hover:text-secondary transition-colors">gemcybersecurityassist.com</a>
        </p>
      </div>
    </footer>
  );
}

