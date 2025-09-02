import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { MessageCircle, Mail, Instagram, Phone, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    fechaEvento: '',
    lugar: '',
    numeroInvitados: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, tipoEvento: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+58 414-123-4567",
      action: "Enviar Mensaje",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "gatoshow@email.com",
      action: "Enviar Email",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: "@gatoshow",
      action: "Enviar DM",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
              ¿Listos para la 
              <span className="text-primary"> Mejor Fiesta de sus Vidas?</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              ¡Hagamos que tu evento sea inolvidable! Cuéntame los detalles y te enviaré 
              una cotización personalizada para tu celebración especial.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-stage">
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Solicita tu Cotización
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre" className="text-text-primary font-medium">
                        Nombre *
                      </Label>
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="apellido" className="text-text-primary font-medium">
                        Apellido *
                      </Label>
                      <Input
                        id="apellido"
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-text-primary font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="telefono" className="text-text-primary font-medium">
                        Teléfono (WhatsApp) *
                      </Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-text-primary font-medium">
                        Tipo de Evento *
                      </Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Selecciona el tipo de evento" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="boda">Boda</SelectItem>
                          <SelectItem value="corporativo">Evento Corporativo</SelectItem>
                          <SelectItem value="quinceanios">Quinceaños</SelectItem>
                          <SelectItem value="privada">Fiesta Privada</SelectItem>
                          <SelectItem value="venue">Venue/Discoteca</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="fechaEvento" className="text-text-primary font-medium">
                        Fecha del Evento *
                      </Label>
                      <Input
                        id="fechaEvento"
                        name="fechaEvento"
                        type="date"
                        value={formData.fechaEvento}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="lugar" className="text-text-primary font-medium">
                        Lugar / Ciudad *
                      </Label>
                      <Input
                        id="lugar"
                        name="lugar"
                        value={formData.lugar}
                        onChange={handleInputChange}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="numeroInvitados" className="text-text-primary font-medium">
                        Número de Invitados
                      </Label>
                      <Input
                        id="numeroInvitados"
                        name="numeroInvitados"
                        type="number"
                        value={formData.numeroInvitados}
                        onChange={handleInputChange}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="mensaje" className="text-text-primary font-medium">
                      Mensaje adicional
                    </Label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="mt-2"
                      rows={4}
                      placeholder="Cuéntame más detalles sobre tu evento..."
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary-hover text-white font-semibold stage-glow hover:shadow-glow transition-all duration-300"
                  >
                    Enviar Solicitud de Cotización
                  </Button>
                </form>

                <p className="text-sm text-text-secondary mt-4 text-center">
                  Las fechas se reservan con rapidez. ¡Asegura la energía de Gato Show para tu día especial!
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Direct Contact */}
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-text-primary mb-4">
                  Contacto Directo
                </h3>
                
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="group">
                      <Button 
                        className={`w-full justify-start bg-gradient-to-r ${method.color} hover:shadow-glow transition-all duration-300`}
                        size="lg"
                      >
                        <method.icon className="w-5 h-5 mr-3" />
                        <div className="text-left">
                          <div className="font-semibold">{method.title}</div>
                          <div className="text-sm opacity-90">{method.value}</div>
                        </div>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Horarios de Atención
                </h3>
                
                <div className="space-y-2 text-text-secondary">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingos</span>
                    <span>Solo WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <h3 className="text-xl font-bold text-text-primary mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Área de Cobertura
                </h3>
                
                <p className="text-text-secondary">
                  Caracas, Valencia, Maracay y ciudades aledañas. 
                  Consulta para eventos en otras localidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;