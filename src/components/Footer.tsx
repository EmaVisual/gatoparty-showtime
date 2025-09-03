import { Instagram, Youtube, Music, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Shows', href: '#shows' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/gatoshowoficial', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Youtube, href: 'https://youtu.be/62OeXxn0llY?feature=shared', label: 'YouTube', color: 'hover:text-red-500' },
    { icon: Music, href: 'https://open.spotify.com/artist/69e62uZT4lyhz8zdZdcDCm?si=qxP311MQQyuLEwwBFsym1Q', label: 'Spotify', color: 'hover:text-green-500' },
    { icon: MessageCircle, href: 'https://soundcloud.com/gatoshowpficial', label: 'SoundCloud', color: 'hover:text-orange-500' },
  ];

  return (
    <footer className="bg-gradient-to-t from-primary to-blue-900 dark:from-primary/20 dark:to-background text-white dark:text-foreground border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/ab628284-1945-4843-a84a-4c3b0daa99b3.png" 
                alt="Gato Show" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 dark:text-text-secondary max-w-sm">
              Llevando la mejor fiesta a tu evento con más de 10 años de experiencia 
              en shows musicales en vivo.
            </p>
            <div className="flex items-center space-x-2 text-sm text-white/70 dark:text-text-secondary">
              <Heart className="w-4 h-4 text-white dark:text-primary" />
              <span>Hecho con pasión</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-text-primary mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 dark:text-text-secondary hover:text-white dark:hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white dark:text-text-primary mb-4">
              Sígueme en Redes
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/80 dark:text-text-secondary hover:text-white dark:hover:text-primary transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 dark:border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 dark:text-text-secondary text-sm space-y-1">
              <div>Gato Show © {currentYear} | Llevando la mejor fiesta a tu evento.</div>
              <div>
                <a 
                  href="https://daezdigital.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white dark:hover:text-primary transition-colors duration-200"
                >
                  Diseño y desarrollo por Daez Digital
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/70 dark:text-text-secondary">
              <a href="#" className="hover:text-white dark:hover:text-primary transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-white dark:hover:text-primary transition-colors duration-200">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="#"
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-glow transition-all duration-300"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;