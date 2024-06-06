import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Features from './Features';
import AboutNow from './AboutNow';
import Counter from './Counter';
import Services from './Services';
import OurProjects from './OurProjects';
import Socials from './Socials';
import Solution from './Solution';
import Clients from './Clients';
import Blog from './Blog';
import Links from './Links';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className='overflow-x-hidden selection:bg-yellow-300 selection:text-white'>
      <Navbar />
      <Header />
      <Features />
      <AboutNow />
      <Counter />
      <Services />
      <OurProjects />
      <Socials />
      <Solution />
      <Clients />
      <Blog />
      <Links />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App