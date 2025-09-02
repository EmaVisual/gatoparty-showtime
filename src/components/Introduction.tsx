import { Music, Heart, Users } from 'lucide-react';

const Introduction = () => {
  const features = [
    {
      icon: Music,
      title: "Repertorio Versátil",
      description: "Desde clásicos latinos hasta éxitos actuales"
    },
    {
      icon: Heart,
      title: "Energía Contagiosa",
      description: "Cada show está lleno de pasión y entusiasmo"
    },
    {
      icon: Users,
      title: "Interacción Total",
      description: "Conectando con cada invitado en la pista"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            ¿Buscas un Show que Ponga a 
            <span className="text-primary"> Todos a Bailar?</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary mb-12 leading-relaxed max-w-3xl mx-auto">
            Soy <span className="font-semibold text-primary">Luis Lecuna</span>, mejor conocido como 
            <span className="font-bold text-text-primary"> "Gato Show"</span>. Con más de una década 
            llevando alegría a eventos especiales, mi misión es simple: hacer que cada celebración 
            sea una experiencia única e inolvidable.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-card rounded-2xl p-8 hover:shadow-stage transition-all duration-300 border border-border/50 hover:border-primary/20">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
            <blockquote className="text-xl md:text-2xl font-medium text-text-primary italic">
              "No solo toco música, creo momentos. Cada evento es una oportunidad 
              para hacer magia y que tus invitados vivan una noche perfecta."
            </blockquote>
            <cite className="block mt-4 text-primary font-semibold">
              - Luis "Gato Show" Lecuna
            </cite>
          </div>

          {/* Artist Photo Gallery */}
          <div className="mt-16 space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary text-center mb-8">
              El Artista en Acción
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Photo placeholders - Replace with actual photos */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center">
                <div className="text-center">
                  <Music className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-text-secondary">Foto del Artista</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20 flex items-center justify-center">
                <div className="text-center">
                  <Music className="w-12 h-12 text-accent mx-auto mb-2" />
                  <p className="text-text-secondary">Foto del Artista</p>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20 flex items-center justify-center md:col-span-2 lg:col-span-1">
                <div className="text-center">
                  <Music className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-text-secondary">Foto del Artista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;