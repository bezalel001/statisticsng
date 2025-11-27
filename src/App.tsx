import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { Values } from './components/Values';
import { Domains } from './components/Domains';
import { Innovation } from './components/Innovation';
import { TargetUsers } from './components/TargetUsers';
import { Impact } from './components/Impact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Values />
      <Domains />
      <Innovation />
      <TargetUsers />
      <Impact />
      <Footer />
    </div>
  );
}
