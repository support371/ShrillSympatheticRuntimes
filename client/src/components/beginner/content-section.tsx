interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function ContentSection({
  title,
  subtitle,
  children,
  className = "bg-slate-950",
  id,
}: ContentSectionProps) {
  return (
    <section id={id} className={`py-24 ${className} relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-20">
            {title && (
              <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                {subtitle}
              </p>
            )}
            {title && <div className="w-24 h-1 bg-blue-600/50 mx-auto mt-8 rounded-full" />}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
