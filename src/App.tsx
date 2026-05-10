import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/sections/Navbar';
import Hero from '@/sections/Hero';
import Mission from '@/sections/Mission';
import Services from '@/sections/Services';
import Membership from '@/sections/Membership';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-[100dvh] bg-[#F5F0EB]">
        <Navbar />
        <main>
          <Hero />
          <Mission />
          <Services />
          <Membership />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
