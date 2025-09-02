import { useState } from 'react';
import { Play, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('fotos');

  // Placeholder images - in real implementation, these would be actual photos
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Gato Show en boda elegante"
    },
    {
      src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Show en evento corporativo"
    },
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Presentación en quinceaños"
    },
    {
      src: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Concierto en venue"
    },
    {
      src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Interacción con el público"
    },
    {
      src: "https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Show con banda completa"
    }
  ];

  const videos = [
    {
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Highlights de Boda en Caracas",
      duration: "2:30"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Show Corporativo Empresarial",
      duration: "3:15"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Quinceaños Espectacular",
      duration: "1:45"
    },
    {
      thumbnail: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Concierto en Vivo - Venue",
      duration: "4:20"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              La Fiesta 
              <span className="text-primary"> en Acción</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Mira algunos momentos especiales de mis shows. Cada imagen cuenta la historia 
              de una celebración única y una experiencia inolvidable.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-card rounded-full p-1 border border-border">
              <button
                onClick={() => setActiveTab('fotos')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'fotos'
                    ? 'bg-primary text-white shadow-glow'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                Fotos
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === 'videos'
                    ? 'bg-primary text-white shadow-glow'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                Videos
              </button>
            </div>
          </div>

          {/* Content */}
          {activeTab === 'fotos' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {photos.map((photo, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                >
                  <img 
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">{photo.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {videos.map((video, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer bg-black"
                >
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300 stage-glow">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                    <p className="text-white/80 text-sm">{video.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Social CTA */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              ¿Quieres ver más contenido?
            </h3>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Sígueme en mis redes sociales para ver videos exclusivos, transmisiones en vivo 
              y momentos detrás de escena de mis shows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold stage-glow"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Sígueme en Instagram
              </Button>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold stage-glow"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Canal de YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;