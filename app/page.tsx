import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ThreatStats from '@/components/home/ThreatStats';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ThreatStats />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}