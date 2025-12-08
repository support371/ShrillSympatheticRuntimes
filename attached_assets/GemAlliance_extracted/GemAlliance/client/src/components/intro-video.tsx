import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from "lucide-react";

export default function IntroVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(120); // 2 minutes total
  const videoRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Simulate video progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            setIsPlaying(false);
            return duration;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, currentTime, duration]);

  return (
    <section id="vision" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-navy mb-6">Our Evolution Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From visionary concept to industry leader - discover how The Alliance Enterprise evolved to create a sustainable eco-business environment integrating security, compliance, and strategic real estate management
          </p>
        </div>

        {/* Interactive Video Player */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            {/* Video Content Area */}
            <div ref={videoRef} className="relative">
              <div className="bg-gradient-to-br from-dark-navy via-primary-blue to-secondary-blue h-96 flex items-center justify-center text-white relative overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-accent-gold/20 rounded-full animate-pulse"></div>
                  <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent-gold/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                </div>
                
                {/* Main Video Content */}
                <div className="text-center relative z-10">
                  {!isPlaying ? (
                    <>
                      <div className="mb-6">
                        <div className="bg-accent-gold/20 rounded-full p-4 inline-block mb-4">
                          <Play className="h-16 w-16 text-accent-gold mx-auto" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-3">The Alliance Revolution</h3>
                      <p className="text-gray-200 text-lg mb-2">Company Evolution & Eco-Business Vision</p>
                      <p className="text-gray-300">Our journey from startup to sustainable enterprise ecosystem</p>
                      <p className="text-sm text-gray-400 mt-3">Runtime: {formatTime(duration)} • HD Quality • Closed Captions Available</p>
                    </>
                  ) : (
                    <>
                      <div className="mb-6">
                        <div className="bg-green-500/20 rounded-full p-4 inline-block mb-4 animate-pulse">
                          <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="h-2 w-2 bg-white rounded-full animate-ping"></div>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3">Now Playing: The Alliance Revolution</h3>
                      <p className="text-green-200 animate-pulse">🔴 LIVE: Company Evolution Story</p>
                      <div className="mt-4 text-sm text-gray-300">
                        <p>Current Chapter: Building Sustainable Ecosystems</p>
                        <p>Next: Innovation Meets Environmental Responsibility</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button 
                  onClick={togglePlay}
                  className="bg-white/20 hover:bg-white/30 text-white p-6 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-110"
                  data-testid="video-play-button"
                >
                  {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
                </button>
              </div>
            </div>
            
            {/* Video Controls Bar */}
            <div className="bg-black/90 text-white p-4">
              <div className="flex items-center space-x-4">
                {/* Play/Pause */}
                <button 
                  onClick={togglePlay}
                  className="hover:text-accent-gold transition-colors duration-300"
                  data-testid="control-play-pause"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </button>
                
                {/* Restart */}
                <button 
                  onClick={handleRestart}
                  className="hover:text-accent-gold transition-colors duration-300"
                  data-testid="control-restart"
                >
                  <RotateCcw className="h-5 w-5" />
                </button>
                
                {/* Progress Bar */}
                <div className="flex-1 flex items-center space-x-2">
                  <span className="text-sm text-gray-300">{formatTime(currentTime)}</span>
                  <div className="flex-1 bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-accent-gold h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-300">{formatTime(duration)}</span>
                </div>
                
                {/* Volume */}
                <button 
                  onClick={toggleMute}
                  className="hover:text-accent-gold transition-colors duration-300"
                  data-testid="control-volume"
                >
                  {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                </button>
                
                {/* Fullscreen */}
                <button className="hover:text-accent-gold transition-colors duration-300" data-testid="control-fullscreen">
                  <Maximize className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Video Info Panel */}
          <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue mb-2">120s</div>
                <p className="text-gray-600">Runtime</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue mb-2">5 Chapters</div>
                <p className="text-gray-600">Evolution Story</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-blue mb-2">HD</div>
                <p className="text-gray-600">Quality</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chapter Timeline & Script */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-primary-blue">Video Chapters & Timeline</h3>
            <div className="flex space-x-2">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Sustainable Focus</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Innovation Story</span>
            </div>
          </div>
          
          {/* Chapter Timeline */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[
                { time: '0:00', title: 'Origin Story', active: currentTime >= 0 && currentTime < 20 },
                { time: '0:20', title: 'Eco Evolution', active: currentTime >= 20 && currentTime < 45 },
                { time: '0:45', title: 'Integration', active: currentTime >= 45 && currentTime < 70 },
                { time: '1:10', title: 'Community', active: currentTime >= 70 && currentTime < 95 },
                { time: '1:35', title: 'Future Vision', active: currentTime >= 95 }
              ].map((chapter, index) => (
                <div key={index} className={`flex flex-col items-center ${
                  chapter.active ? 'text-accent-gold' : 'text-gray-400'
                }`}>
                  <div className={`w-4 h-4 rounded-full mb-2 ${
                    chapter.active ? 'bg-accent-gold animate-pulse' : 'bg-gray-300'
                  }`}></div>
                  <span className="text-xs font-medium">{chapter.time}</span>
                  <span className="text-xs text-center">{chapter.title}</span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
              <div 
                className="bg-accent-gold h-1 rounded-full transition-all duration-1000"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Detailed Script */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-primary-blue mb-6">Company Evolution Video Script (90-120 seconds):</h3>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div>
              <strong className="text-accent-gold">[0-20s] Origin Story & Vision:</strong><br />
              "The Alliance Enterprise began with a simple yet powerful vision: to create a sustainable business ecosystem where security, compliance, and strategic real estate coexist harmoniously. Founded on principles of environmental responsibility and operational excellence, we've evolved into an industry leader."
            </div>
            <div>
              <strong className="text-accent-gold">[20-45s] Eco-Business Evolution:</strong><br />
              "Our journey reflects a commitment to sustainable business practices. From our early days focusing on cybersecurity solutions, we expanded into compliance management and real estate investment - always with environmental stewardship at our core. Each division operates with minimal environmental impact while maximizing business value."
            </div>
            <div>
              <strong className="text-accent-gold">[45-70s] Integrated Ecosystem Approach:</strong><br />
              "Today, GEM Cybersecurity & Monitoring, Core Compliance Division, and Alliance Trust Realty work as one unified ecosystem. Our properties feature sustainable technology, our compliance frameworks include environmental standards, and our security solutions promote energy-efficient operations."
            </div>
            <div>
              <strong className="text-accent-gold">[70-95s] Community & Future Vision:</strong><br />
              "We've built more than a business - we've created a community of forward-thinking professionals who understand that profitability and sustainability go hand in hand. Our industry gallery showcases real projects where innovation meets environmental responsibility."
            </div>
            <div>
              <strong className="text-accent-gold">[95-120s] Call to Action:</strong><br />
              "Join The Alliance Enterprise ecosystem where security, compliance, and strategic real estate unite for a sustainable future. Experience how business evolution and environmental stewardship create lasting success."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
