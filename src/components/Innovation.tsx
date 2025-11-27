import { Brain, Code, BarChart3, BookOpen, Lock } from 'lucide-react';

export function Innovation() {
  const pillars = [
    {
      icon: Brain,
      name: 'AI for Truth',
      description: 'Machine learning and NLP models for fact verification and intelligent analysis.'
    },
    {
      icon: Code,
      name: 'Open Data APIs',
      description: 'Developer tools and public data interfaces for seamless integration.'
    },
    {
      icon: BarChart3,
      name: 'Visual Intelligence',
      description: 'Dashboards and maps that make complex data simple to understand.'
    },
    {
      icon: BookOpen,
      name: 'Data Academy',
      description: 'Training and capacity-building programs for the next generation.'
    },
    {
      icon: Lock,
      name: 'FactChain (R&D)',
      description: 'Blockchain-based verification system for data integrity and trust.'
    }
  ];

  return (
    <section id="innovation" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Innovation Pillars</h2>
          <p className="text-xl text-gray-600">
            Cutting-edge technology powering data transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.name}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4">
                <pillar.icon className="text-white" size={28} />
              </div>
              <h4 className="mb-3">{pillar.name}</h4>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Data Governance Section */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-white mb-6 text-center">Data Governance & Privacy</h3>
            
            <p className="text-white/90 text-center mb-8">
              Statistics Nigeria is developing a <span className="font-semibold">National Data Governance and Privacy Framework (NDGPF)</span> — 
              a homegrown standard for ethical, secure, and sovereign data management.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h5 className="text-white mb-3">Guided By:</h5>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">•</span>
                    <span>Truth, Trust, and Transparency as core values</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">•</span>
                    <span>African Data Ethics rooted in dignity and accountability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">•</span>
                    <span>Sovereign Data Principles — Nigerian data governed by Nigerian values</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h5 className="text-white mb-3">Implementation:</h5>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">•</span>
                    <span>Security and Privacy by Design — encryption and anonymization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">•</span>
                    <span>Ethical AI principles embedded in all systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-300">•</span>
                    <span>Independent Oversight through a National Data Ethics Council</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-white/90">
                Our goal is to inspire Africa and the world with ethical, sovereign data governance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}