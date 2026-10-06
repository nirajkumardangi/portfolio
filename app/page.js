import { PortfolioProvider } from '@/components/PortfolioContext';
import IconSprite from '@/components/IconSprite';
import ScrollProgress from '@/components/ScrollProgress';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Skills from '@/components/Skills';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Blog from '@/components/Blog';
import Achievements from '@/components/Achievements';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <PortfolioProvider>
      <ScrollProgress />
      <IconSprite />
      <ScrollReveal />

      <div className="app-shell">
        <Sidebar />

        <div className="dashboard">
          <Topbar />

          <main id="mainContent">
            <Hero />
            <Stats />

            <div className="overview-grid">
              <Skills />
              <About />
            </div>

            <div className="lower-grid">
              <Projects />
              <div className="support-stack">
                <Education />
                <Contact />
              </div>
            </div>

            <div className="detail-grid">
              <Experience />
              <Certifications />
            </div>

            <Blog />
            <Achievements />
            <Footer />
          </main>
        </div>
      </div>
    </PortfolioProvider>
  );
}
