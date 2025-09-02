import { Music, Users, Mic, Volume2, Lightbulb, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Shows = () => {
  const benefits = [
    {
      icon: Music,
      title: "Repertorio Bailable y Versátil",
      description: "Desde boleros románticos hasta reggaeton moderno"
    },
    {
      icon: Users,
      title: "Interacción con el Público",
      description: "Conectando con cada invitado durante todo el show"
    },
    {
      icon: Mic,
      title: "Energía Contagiosa",
      description: "Pasión y entusiasmo que se transmite en cada canción"
    },
    {
      icon: Volume2,
      title: "Sonido e Iluminación Profesional",
      description: "Equipos de alta calidad para una experiencia completa"
    }
  ];

  const formats = [
    {
      title: "Gato Show Solista",
      description: "Perfecto para eventos íntimos y espacios reducidos",
      features: [
        "Guitarra acústica y voz",
        "Pistas de acompañamiento profesionales",
        "Repertorio adaptable al momento",
        "Ideal para ceremonias y cocteles",
        "Montaje rápido y sencillo"
      ],
      highlight: "Desde $800"
    },
    {
      title: "Gato Show con Banda",
      description: "La experiencia completa para eventos grandes",
      features: [
        "Banda completa (batería, bajo, teclados)",
        "Sonido e iluminación profesional",
        "Show de 2-4 horas",
        "Repertorio extendido",
        "Efectos especiales opcionales"
      ],
      highlight: "Desde $1,500",
      featured: true
    }
  ];

  return (
    <section id="shows" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              El Espectáculo 
              <span className="text-primary"> Perfecto para Ti</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Ofrezco diferentes formatos para adaptarme perfectamente a las necesidades 
              de tu evento, garantizando siempre la mejor experiencia musical.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>


          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20">
            <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              ¿No estás seguro cuál formato elegir?
            </h3>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Cada evento es único. Cuéntame los detalles de tu celebración y te ayudo 
              a elegir el formato perfecto para crear la experiencia que buscas.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-white font-semibold text-lg px-8 py-6 stage-glow hover:shadow-glow transition-all duration-300"
            >
              Hablemos de tu Evento
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shows;