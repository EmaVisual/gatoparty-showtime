import { useState } from 'react';
import { Menu, X, Instagram, Youtube, Music, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Shows', href: '#shows' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Music, href: '#', label: 'Spotify' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/ab628284-1945-4843-a84a-4c3b0daa99b3.png" 
              alt="Gato Show" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-primary font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-text-secondary hover:text-primary transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-text-secondary hover:text-primary font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex items-center space-x-4 px-3 py-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-text-secondary hover:text-primary transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;