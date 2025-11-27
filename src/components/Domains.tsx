import { Users, DollarSign, Leaf, Building2, Search, GraduationCap, Globe } from 'lucide-react';

export function Domains() {
  const domains = [
    {
      icon: Users,
      name: 'Population & Society',
      description: 'Understanding the people behind Nigeria\'s progress.',
      functions: [
        'Conduct population and social analyses',
        'Maintain interactive population dashboards',
        'Use AI models for projections and movement patterns'
      ],
      outputs: 'Nigeria Population Atlas, Education Equity Report, Health Access Index',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      name: 'Economy',
      description: 'Delivering clear economic truth.',
      functions: [
        'GDP, inflation, trade, and productivity data',
        'Employment, income, and SME tracking',
        'Predictive economic models and open APIs'
      ],
      outputs: 'GDP Monitor, Startup Economy Tracker, Inflation Dashboard',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Leaf,
      name: 'Environment & Energy',
      description: 'Data for sustainability and climate action.',
      functions: [
        'Track energy production and renewable adoption',
        'Monitor air, water, and waste indicators',
        'Measure deforestation, emissions, and green investments'
      ],
      outputs: 'Nigeria Energy Atlas, Climate Indicators, Green Economy Dashboard',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Building2,
      name: 'Public Sector & Governance',
      description: 'Strengthening accountability through data transparency.',
      functions: [
        'Track budgets, taxation, and public debt',
        'Analyze government spending on key sectors',
        'Monitor elections, SDGs, and civic participation'
      ],
      outputs: 'Budget Transparency Portal, SDG Tracker, Governance Index',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Search,
      name: 'Fact-Checking & Truth Intelligence',
      description: 'Protecting Nigeria\'s information space.',
      functions: [
        'Verify public claims with trusted data sources',
        'Build AI systems that detect misinformation patterns',
        'Publish verified claim reports and provide Fact-Checking API'
      ],
      outputs: 'Nigeria FactCheck Portal, Misinformation Dashboard, TruthGPT Nigeria',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: GraduationCap,
      name: 'Education & Data Literacy',
      description: 'Building a data-literate generation.',
      functions: [
        'Offer training, workshops, and bootcamps',
        'Run specialized programs in AI and data analysis',
        'Partner with universities to nurture data scientists'
      ],
      outputs: 'Data School Nigeria, Journalism & Data Program, AI in Policy Certificate',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Globe,
      name: 'Open Data & Innovation',
      description: 'Making Nigerian data free for innovation.',
      functions: [
        'Develop public APIs and open datasets',
        'Host annual "Nigeria Open Data Challenge"',
        'Fund civic-tech and AI innovation'
      ],
      outputs: 'Data.gov.ng 2.0, Developer Data API, Civic Innovation Fellowship',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="domains" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Strategic Domains</h2>
          <p className="text-xl text-gray-600">
            Seven pillars of data-driven national development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {domains.map((domain) => (
            <div
              key={domain.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`bg-gradient-to-r ${domain.color} p-6 text-white`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <domain.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-white mb-2">{domain.name}</h3>
                    <p className="text-white/90 text-sm">{domain.description}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="text-sm text-gray-500 mb-2">Key Functions:</div>
                  <ul className="space-y-2">
                    {domain.functions.map((func, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-600 mt-1">•</span>
                        <span>{func}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500 mb-2">Outputs:</div>
                  <p className="text-sm text-gray-700">{domain.outputs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}