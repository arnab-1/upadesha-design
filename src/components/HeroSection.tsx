import { useEffect, useState } from 'react';
const HeroSection = () => {
  const [stars, setStars] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
  }>>([]);
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const count = Math.floor(window.innerWidth * window.innerHeight / 15000);
      for (let i = 0; i < count; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          delay: Math.random() * 5
        });
      }
      setStars(newStars);
    };
    generateStars();
    window.addEventListener('resize', generateStars);
    return () => {
      window.removeEventListener('resize', generateStars);
    };
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32" style={{
    backgroundImage: `url('/lovable-uploads/5f13869d-1ad4-4353-b5cc-17f31035fbf5.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Additional subtle star overlay */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {stars.map(star => <div key={star.id} className="star" style={{
        width: `${star.size}px`,
        height: `${star.size}px`,
        left: `${star.x}%`,
        top: `${star.y}%`,
        animationDelay: `${star.delay}s`,
        opacity: Math.random() * 0.4 + 0.2
      }} />)}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white drop-shadow-2xl">
            Discover everything yourself with Upadesha
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-6 drop-shadow-lg">
            UPADESHA by Raajeshh A Keshri is your gateway to powerful 180° life 
            transformation through the science of numerology.
          </p>
          
          <p className="text-base md:text-lg text-cyan-100 mb-8 max-w-2xl mx-auto drop-shadow-lg">
            We decode your unique numbers to unlock hidden potential, clear blockages, 
            and attract abundance in health, wealth, and relationships. Real change 
            starts here — experience clarity, purpose, and unstoppable growth with 
            Upadesha today.
          </p>
          
          <a href="#consult" className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 px-8 py-3 text-lg font-medium text-white shadow-2xl transition-all hover:scale-105 animate-glow">
            Consult Now
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-900/20 to-transparent" />
    </section>;
};
export default HeroSection;