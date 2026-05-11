import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Courses from './components/Courses';
import Community from './components/Community';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Courses />
        <Community />
      </main>
      <Footer />
    </div>
  );
}
