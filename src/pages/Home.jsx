import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Contact from '../components/Contact.jsx';
import Projects from '../components/Projects.jsx';
import Footer from '../components/Footer.jsx';


const Home = () => {
    return (
        <main className="home">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>


    );
};
export default Home;