import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export function PageHeader({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: PageHeaderProps) {
  return (
    <div className="bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-6xl font-black mb-8 leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {primaryCtaText && primaryCtaLink && (
            <Link href={primaryCtaLink}>
              <button className="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center group">
                {primaryCtaText} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          )}
          {secondaryCtaText && secondaryCtaLink && (
            <Link href={secondaryCtaLink}>
              <button className="border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300">
                {secondaryCtaText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
