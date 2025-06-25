
import { Play } from "lucide-react";

const VideoTestimonialsSection = () => {
  const videoPlaceholders = [
    {
      title: "Sarah's Career Transformation",
      description: "From struggling freelancer to successful entrepreneur"
    },
    {
      title: "Michael's Relationship Journey", 
      description: "Finding love through numerical compatibility"
    },
    {
      title: "Priya's Health Recovery",
      description: "Healing through personalized remedies"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">
            Real Experiences from Life-Changing Consultations
          </h2>
          <p className="text-blue-700 max-w-2xl mx-auto">
            Hear what others discovered through their numbers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoPlaceholders.map((video, index) => (
            <div 
              key={index}
              className="aspect-video bg-pearl rounded-xl shadow-md hover:shadow-lg transition-all duration-300 relative group cursor-pointer overflow-hidden border border-blue-100/30"
            >
              {/* Video placeholder background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-indigo-600 ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Video info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/95 to-transparent">
                <h3 className="font-semibold text-indigo-800 mb-1">{video.title}</h3>
                <p className="text-sm text-blue-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
