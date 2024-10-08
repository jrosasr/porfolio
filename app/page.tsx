import Introduction from '@/components/introduction.tsx'
import Navbar from '@/components/navbar.tsx'
import AboutMe from '@/components/about-me.tsx'
import Portfolio from '@/components/portfolio.tsx';
import Experience from '@/components/experience.tsx';
import Contact from '@/components/contact.tsx';
import Footer from '@/components/footer';
import Timeline from '@/components/timeline';

export default function Home() {
  return (
    <main className='pb-40'>
      <Navbar />
      <Introduction />
      <AboutMe />
      <Timeline />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
