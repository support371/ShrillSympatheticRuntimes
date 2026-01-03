import { Link } from "wouter";

interface CtaBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export function CtaBanner({
  title,
  description,
  buttonText,
  buttonLink,
}: CtaBannerProps) {
  return (
    <div className="bg-blue-600 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 tracking-tight">{title}</h2>
        <p className="text-blue-100 text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-light">
          {description}
        </p>
        <Link href={buttonLink}>
          <button className="bg-white text-blue-600 px-10 py-5 rounded-xl font-black text-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:scale-95">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}
