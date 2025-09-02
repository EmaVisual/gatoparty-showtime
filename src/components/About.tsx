import { Award, Clock, Heart } from 'lucide-react';
import gatoPortrait from '@/assets/gato-portrait.jpg';

const About = () => {
  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              Más que Música, un 
              <span className="text-primary"> Showman Apasionado</span>
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden stage-glow">
                <img 
                  src={gatoPortrait}
                  alt="Luis Lecuna - Gato Show"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-glow">
                10+ Años
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                Soy <span className="font-semibold text-primary">Luis Lecuna</span>, pero desde que 
                pisé mi primer escenario, todo el mundo me conoce como 
                <span className="font-bold text-text-primary"> "Gato Show"</span>. Mi amor por la música 
                comenzó desde muy joven en Venezuela, donde aprendí que la música no solo se escucha, 
                sino que se vive, se siente y se comparte.
              </p>

              <p className="text-lg text-text-secondary leading-relaxed">
                Con más de una década de experiencia, he tenido el privilegio de ser parte de 
                miles de momentos especiales. Desde bodas íntimas hasta grandes eventos corporativos, 
                mi filosofía es simple: <span className="font-semibold text-primary">cada show es único, 
                cada público es especial, y cada canción debe llegar al corazón</span>.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-text-secondary">Eventos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-text-secondary">Canciones</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-text-secondary">Pasión</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Promise Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Mi Misión</h3>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                "Que cada invitado se vaya con los pies cansados de tanto bailar y el corazón 
                lleno de alegría. Mi trabajo no termina cuando suena la última canción, sino 
                cuando veo esas sonrisas que durarán para siempre."
              </p>
            </div>

            {/* Promise */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8 border border-accent/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary">Mi Promesa</h3>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed">
                "Profesionalismo, puntualidad, repertorio impecable y entrega total en cada show. 
                Tu evento no es solo otro trabajo para mí, es la oportunidad de crear recuerdos 
                que durarán toda la vida."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;