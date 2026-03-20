import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { Domains } from './components/Domains';
import { Innovation } from './components/Innovation';
import { TargetUsers } from './components/TargetUsers';
import { Values } from './components/Values';
import { Impact } from './components/Impact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Domains />
      <Innovation />
      <TargetUsers />
      <Values />
      <Impact />
      <Footer />
    </div>
  );
}
