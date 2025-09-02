import { Button } from '@/components/ui/button';
import { Play, Calendar } from 'lucide-react';
import heroImage from '@/assets/hero-show.jpg';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Gato Show en vivo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">La Energía que</span>
            <span className="block text-primary glow-pulse">tu Evento Necesita</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
            Música en vivo con sabor latino para bodas, eventos corporativos y las mejores fiestas. 
            <span className="block mt-2 text-primary font-semibold">
              Gato Show es más que un cantante, es una experiencia que tus invitados no olvidarán.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-hover text-white font-semibold text-lg px-8 py-6 stage-glow hover:shadow-glow transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Cotiza tu Fecha
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-lg px-8 py-6 transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver Shows en Acción
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 text-white/80">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm">Eventos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm">Años de Experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-1 h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;