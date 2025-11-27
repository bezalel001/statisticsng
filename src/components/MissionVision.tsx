import { Target, Eye } from 'lucide-react';

export function MissionVision() {
  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="text-blue-600" size={24} />
            </div>
            <h3 className="mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To power Nigeria's progress through verified data and intelligent insights — turning numbers 
              into truth, and truth into sustainable development.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-lg text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <Eye className="text-white" size={24} />
            </div>
            <h3 className="mb-4 text-white">Our Vision</h3>
            <p className="text-white/90">
              To make Nigeria the most data-driven and truth-empowered nation in Africa — a country that leads 
              the world in ethical, intelligent, and human-centered data systems.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <h3 className="mb-6">What We Do</h3>
          <p className="text-gray-700 text-lg mb-6">
            We collect, process, and publish high-quality, verified, and anonymized data about every part of 
            Nigeria's life: economy, environment, governance, and society.
          </p>
          <p className="text-gray-700">
            Our goal is to make data accessible, reliable, and useful for everyone, from policymakers and 
            entrepreneurs to students and everyday citizens. We believe that when facts lead the conversation, 
            progress follows.
          </p>
        </div>
      </div>
    </section>
  );
}