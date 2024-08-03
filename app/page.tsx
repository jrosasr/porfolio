import Introduction from '@/components/introduction.jsx'
import Navbar from '@/components/navbar.jsx'
import AboutMe from '@/components/about-me.jsx'

export default function Home() {
  return (
    <main className='pb-40'>
      <Navbar></Navbar>
      <Introduction></Introduction>
      <AboutMe></AboutMe>
    </main>
  );
}
