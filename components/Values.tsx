import { MapPin, Cpu, Target, ShieldCheck, Layers } from 'lucide-react';

const differentiators = [
  {
    icon: MapPin,
    number: '01',
    name: 'Nigeria-first Design',
    description:
      'We are built specifically for Nigerian realities, not imported blindly from another market. We understand the country\'s geography, institutions, data gaps, infrastructure challenges, and sector priorities.',
    color: 'bg-blue-600',
  },
  {
    icon: Cpu,
    number: '02',
    name: 'Practical Machine Learning',
    description:
      'We use ML and AI only when it creates real value. We stay grounded in sound statistical reasoning and real operational usefulness — not where it merely sounds impressive.',
    color: 'bg-indigo-600',
  },
  {
    icon: Target,
    number: '03',
    name: 'Action-Oriented Outputs',
    description:
      'We do not stop at insight. We create decision tools that help clients allocate funds, prioritize locations, track change, and act faster. Analysis that doesn\'t enable action is incomplete.',
    color: 'bg-blue-700',
  },
  {
    icon: ShieldCheck,
    number: '04',
    name: 'Trust & Transparency',
    description:
      'We explain where the data comes from, how the models work, what the assumptions are, and where uncertainty remains. Our clients always know exactly what they are working with.',
    color: 'bg-indigo-700',
  },
  {
    icon: Layers,
    number: '05',
    name: 'Full-Stack Delivery',
    description:
      'We can work from raw data collection all the way to deployed decision systems and impact tracking. That makes us more useful than firms that only do one piece of the chain.',
    color: 'bg-blue-600',
  },
];

export function Values() {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4 text-sm uppercase tracking-widest">
            <span className="w-8 h-px bg-blue-600"></span>
            Why Us
            <span className="w-8 h-px bg-blue-600"></span>
          </div>
          <h2 className="mb-4">What Makes Statistics NG Different</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A lot of firms can build dashboards. A lot of consultants can write reports. A lot of tech teams can say "AI." That is not enough.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.slice(0, 3).map((d) => (
            <div
              key={d.number}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 ${d.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <d.icon className="text-white" size={20} />
                </div>
                <span className="text-gray-400 text-sm">{d.number}</span>
              </div>
              <div className="text-gray-900 mb-3">{d.name}</div>
              <p className="text-gray-600 text-sm">{d.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {differentiators.slice(3).map((d) => (
            <div
              key={d.number}
              className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 ${d.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <d.icon className="text-white" size={20} />
                </div>
                <span className="text-gray-400 text-sm">{d.number}</span>
              </div>
              <div className="text-gray-900 mb-3">{d.name}</div>
              <p className="text-gray-600 text-sm">{d.description}</p>
            </div>
          ))}

          {/* Summary box */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-7 text-white flex flex-col justify-center">
            <p className="text-white/80 text-sm mb-3 uppercase tracking-widest">Our Strength</p>
            <p className="text-white mb-4">
              Statistics NG stands out by combining five strengths: Nigeria-first design, practical machine learning, action-oriented delivery, trust and transparency, and full-stack capability.
            </p>
            <a
              href="#contact"
              className="self-start px-5 py-2 bg-white text-blue-700 rounded-lg text-sm hover:bg-blue-50 transition-colors"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
