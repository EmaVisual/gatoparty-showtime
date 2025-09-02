import { Heart, Building2, PartyPopper, Users, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EventTypes = () => {
  const eventTypes = [
    {
      icon: Heart,
      title: "Bodas",
      description: "El día más especial merece la banda sonora perfecta",
      features: ["Ceremonia y recepción", "Repertorio romántico", "Momento del vals"]
    },
    {
      icon: Building2,
      title: "Eventos Corporativos",
      description: "Profesionalismo y diversión para celebraciones empresariales",
      features: ["Networking dinámico", "Presentaciones elegantes", "Team building"]
    },
    {
      icon: PartyPopper,
      title: "Quinceaños",
      description: "Celebrando los 15 años con energía y tradición",
      features: ["Vals de los 15", "Música juvenil", "Animación especial"]
    },
    {
      icon: Users,
      title: "Fiestas Privadas",
      description: "Cumpleaños, aniversarios y celebraciones familiares",
      features: ["Ambiente íntimo", "Música personalizada", "Interacción cercana"]
    },
    {
      icon: Music,
      title: "Venues y Discotecas",
      description: "Shows espectaculares para espacios de entretenimiento",
      features: ["Producción completa", "Efectos especiales", "Público masivo"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            Un Show a la Medida de 
            <span className="text-primary"> tu Celebración</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Cada evento es único, y mi show se adapta perfectamente a la ocasión. 
            Desde la elegancia de una boda hasta la energía de una fiesta corporativa.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-2xl p-8 h-full hover:shadow-stage transition-all duration-300 border border-border/50 hover:border-primary/30 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <event.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {event.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {event.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {event.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            ¿Listo para llevar tu evento al siguiente nivel?
          </h3>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Sin importar el tipo de celebración, garantizo un show que superará las expectativas 
            de todos tus invitados.
          </p>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-hover text-white font-semibold text-lg px-8 py-6 stage-glow hover:shadow-glow transition-all duration-300"
          >
            ¡Lleva el Show a tu Evento!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventTypes;