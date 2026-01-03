import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPreviewProps {
  title: string;
  subtitle: string;
  description: string;
  division?: string;
  thumbnail?: string;
  videoUrl?: string;
}

export function VideoPreview({
  title,
  subtitle,
  description,
  division = "OUR STORY",
  videoUrl
}: VideoPreviewProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full relative group" 
      data-testid="video-preview-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Container */}
      <div className={`relative w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 rounded-xl overflow-hidden aspect-video transition-all duration-700 ${isHovered ? 'shadow-[0_0_50px_rgba(59,130,246,0.3)] scale-[1.01]' : 'shadow-2xl'}`}>
        {/* Background Video or Placeholder */}
        {videoUrl ? (
          <div className="relative w-full h-full">
            <video
              src={videoUrl}
              className={`w-full h-full object-cover transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`}
              muted
              loop
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center">
            {/* Animated Background Orbs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: "0.5s" }} />
            
            {/* Geometric Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        )}

        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center cursor-pointer" onClick={() => setIsPlaying(true)} data-testid="video-overlay">
          <button
            className="relative w-24 h-24 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 border border-white/30"
            data-testid="button-play-video"
          >
            {/* Pulse Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-pulse" />
            <div className="absolute inset-0 rounded-full border border-white/20" />
            
            {/* Play Icon */}
            <Play className={`w-10 h-10 text-white fill-white transition-transform duration-500 ${isHovered ? 'scale-125 rotate-12' : 'scale-100'}`} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className={`mt-12 text-center max-w-4xl mx-auto transition-all duration-700 ${isHovered ? 'translate-y-[-8px]' : 'translate-y-0'}`}>
        <p className={`text-sm font-bold uppercase tracking-[0.3em] mb-4 transition-colors duration-500 ${division === 'CYBERSECURITY' ? 'text-emerald-500' : division === 'COMPLIANCE' ? 'text-amber-500' : 'text-blue-500'}`} data-testid="text-division">
          {division}
        </p>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter" data-testid="heading-video-title">
          {title}
        </h2>
        <div className={`w-20 h-1 mx-auto mb-8 rounded-full transition-all duration-700 ${isHovered ? 'w-40 bg-blue-500' : 'w-20 bg-slate-700'}`} />
        <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light" data-testid="text-video-description">
          {description}
        </p>

        {/* Video Metrics Footer */}
        <div className={`mt-16 grid grid-cols-3 gap-8 pt-10 border-t border-slate-800/50 transition-all duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-60 scale-95'}`}>
          {[
            { label: "Duration", value: "12:45" },
            { label: "Divisions Featured", value: "3" },
            { label: "Key Metrics", value: "15+" }
          ].map((metric, i) => (
            <div key={i} data-testid={`metric-footer-${i}`}>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{metric.label}</p>
              <p className="text-lg font-bold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Video Player */}
      {isPlaying && videoUrl && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
          data-testid="video-modal"
        >
          <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <video
              src={videoUrl}
              autoPlay
              controls
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
