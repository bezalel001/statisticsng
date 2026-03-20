import { Building2, Globe, Briefcase, BookOpen } from 'lucide-react';

const clientGroups = [
  {
    icon: Building2,
    group: 'Government',
    tagline: 'Federal, state, and local decision-makers',
    items: [
      'Federal ministries',
      'State ministries',
      'Local agencies',
      'Public planning units',
      'Special intervention offices',
    ],
    color: 'bg-blue-600',
    lightColor: 'bg-blue-50 border-blue-100',
    textColor: 'text-blue-700',
  },
  {
    icon: Globe,
    group: 'Development Sector',
    tagline: 'NGOs, donors & humanitarian agencies',
    items: [
      'NGOs',
      'Donor-funded programs',
      'Humanitarian agencies',
      'Social impact organizations',
      'Monitoring & evaluation teams',
    ],
    color: 'bg-indigo-600',
    lightColor: 'bg-indigo-50 border-indigo-100',
    textColor: 'text-indigo-700',
  },
  {
    icon: Briefcase,
    group: 'Private Sector',
    tagline: 'Businesses needing Nigeria market intelligence',
    items: [
      'Agribusiness firms',
      'FMCG companies',
      'Health providers',
      'Financial institutions',
      'Logistics & mobility businesses',
      'Education companies',
      'Energy, oil & gas companies',
    ],
    color: 'bg-blue-700',
    lightColor: 'bg-blue-50 border-blue-100',
    textColor: 'text-blue-700',
  },
  {
    icon: BookOpen,
    group: 'Research & Policy Organizations',
    tagline: 'Think tanks, academics & policy labs',
    items: [
      'Think tanks',
      'Academic centers',
      'Policy labs',
      'Public-interest institutions',
    ],
    color: 'bg-indigo-700',
    lightColor: 'bg-indigo-50 border-indigo-100',
    textColor: 'text-indigo-700',
  },
];

export function TargetUsers() {
  return (
    <section id="who-we-serve" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4 text-sm uppercase tracking-widest">
            <span className="w-8 h-px bg-blue-600"></span>
            Clients
            <span className="w-8 h-px bg-blue-600"></span>
          </div>
          <h2 className="mb-4">Who Statistics NG Serves</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Statistics NG is built for institutions that need evidence, prediction, and clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {clientGroups.map((group) => (
            <div
              key={group.group}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className={`${group.color} p-6 flex items-center gap-4`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <group.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white">{group.group}</h3>
                  <p className="text-white/70 text-sm">{group.tagline}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`px-3 py-1.5 border rounded-lg text-sm ${group.lightColor} ${group.textColor}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}