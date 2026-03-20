import { Server, Zap, BrainCircuit, ClipboardList } from 'lucide-react';

const businessLines = [
  {
    icon: Server,
    name: 'Data Systems',
    description:
      'Building and improving data pipelines, databases, dashboards, survey systems, and reporting infrastructure.',
    examples: ['Data pipelines', 'Survey systems', 'Reporting dashboards', 'Database design'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Zap,
    name: 'Intelligence Products',
    description:
      'Creating recurring tools such as market trackers, risk maps, forecasting systems, and state/LGA scorecards.',
    examples: ['Market trackers', 'Risk maps', 'Forecasting systems', 'LGA scorecards'],
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: BrainCircuit,
    name: 'Applied AI Solutions',
    description:
      'Developing machine learning models for prediction, targeting, anomaly detection, and optimization in specific sectors.',
    examples: ['Predictive models', 'Anomaly detection', 'Vulnerability targeting', 'NLP tools'],
    color: 'from-blue-600 to-violet-600',
  },
  {
    icon: ClipboardList,
    name: 'Advisory & Evaluation',
    description:
      'Helping clients with strategy, analytics design, measurement frameworks, impact assessment, and evidence-based planning.',
    examples: ['Strategy design', 'M&E frameworks', 'Impact assessment', 'Evidence planning'],
    color: 'from-indigo-600 to-blue-700',
  },
];

export function Innovation() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4 text-sm uppercase tracking-widest">
            <span className="w-8 h-px bg-blue-600"></span>
            Our Offer
            <span className="w-8 h-px bg-blue-600"></span>
          </div>
          <h2 className="mb-4">Our Core Business Lines</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four integrated service areas covering the full spectrum of decision intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {businessLines.map((line) => (
            <div
              key={line.name}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${line.color} p-6 flex items-start gap-4`}>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <line.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white mb-1">{line.name}</h3>
                  <p className="text-white/80 text-sm">{line.description}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="text-gray-500 text-xs uppercase tracking-widest mb-3">Examples</div>
                <div className="flex flex-wrap gap-2">
                  {line.examples.map((ex) => (
                    <span
                      key={ex}
                      className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Example Areas of Work */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-950 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-10">
            <div className="text-blue-300 text-xs uppercase tracking-widest mb-3">Focus Areas</div>
            <h3 className="text-white mb-3">Example Areas of Work</h3>
            <p className="text-white/70 max-w-xl mx-auto">
              We focus on high-impact use cases in Nigeria where strong data science and machine learning can genuinely improve decision-making.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: 'Food Price & Household Pressure',
                desc: 'Monitor market prices, identify pressure zones, forecast worsening areas, and support faster intervention planning.',
              },
              {
                title: 'Poverty & Vulnerability Targeting',
                desc: 'Improve targeting of social support by identifying communities most at risk using socioeconomic and geographic data.',
              },
              {
                title: 'Health Analytics & Planning',
                desc: 'Forecast medicine demand, identify vulnerable populations, monitor service delivery gaps, and strengthen outbreak risk analysis.',
              },
              {
                title: 'Education Intelligence',
                desc: 'Analyze attendance, performance, and school access to identify dropout risk, teacher gaps, and underserved districts.',
              },
              {
                title: 'Agriculture & Rural Intelligence',
                desc: 'Support crop and yield forecasting, weather-linked risk analysis, market access studies, and better farm support targeting.',
              },
              {
                title: 'Public Sector Performance',
                desc: 'Monitor budgets, delivery, service coverage, and results using systems that make underperformance visible earlier.',
              },
              {
                title: 'Business & Market Intelligence',
                desc: 'Provide demand forecasting, customer segmentation, pricing analysis, and location intelligence for Nigerian markets.',
              },
              {
                title: 'Energy, Oil & Gas',
                desc: 'Use analytics, forecasting, and AI to improve operational insight, performance monitoring, risk analysis, and planning across the energy and oil & gas sector.',
              },
            ].map((area, i) => (
              <div
                key={i}
                className="bg-white/8 border border-white/10 rounded-xl p-5 hover:bg-white/12 transition-colors"
              >
                <div className="text-blue-300 text-sm mb-2">{area.title}</div>
                <p className="text-white/70 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}