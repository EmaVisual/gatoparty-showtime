import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import EventTypes from '@/components/EventTypes';
import About from '@/components/About';
import Shows from '@/components/Shows';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <EventTypes />
        <About />
        <Shows />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
