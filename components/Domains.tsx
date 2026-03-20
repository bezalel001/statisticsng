import { Database, ShieldCheck, BarChart3, BrainCircuit, LayoutDashboard, Activity } from 'lucide-react';

const steps = [
  {
    icon: Database,
    number: '01',
    title: 'Data Collection & Integration',
    description:
      'We pull together data from surveys, administrative records, partner program data, market and price data, facility and service delivery data, satellite and geospatial data, field agent submissions, mobile and digital platform data, and internal client databases.',
    highlight: 'Structured so it can be used consistently and reliably.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: ShieldCheck,
    number: '02',
    title: 'Data Cleaning & Quality Assurance',
    description:
      'We improve data quality by removing duplicates, correcting formatting issues, handling missing values, validating records, standardizing categories, reconciling conflicting sources, and documenting assumptions and limitations.',
    highlight: 'Weak data produces weak decisions — this step is essential.',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: BarChart3,
    number: '03',
    title: 'Statistical Analysis',
    description:
      'We apply strong statistical methods to understand patterns, trends, and relationships. This includes descriptive analysis, trend analysis, regression models, segmentation, panel and longitudinal analysis, causal inference, and monitoring and evaluation metrics.',
    highlight: 'Grounded in sound statistical reasoning.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    icon: BrainCircuit,
    number: '04',
    title: 'Machine Learning & AI',
    description:
      'Where useful, we apply ML and AI to go beyond description and move into prediction and optimization — forecasting prices, identifying high-risk communities, detecting anomalies, classifying regions by vulnerability, and using NLP, computer vision, or geospatial AI.',
    highlight: 'We use AI where it improves speed, precision, and scale — not for hype.',
    color: 'from-violet-500 to-indigo-600',
  },
  {
    icon: LayoutDashboard,
    number: '05',
    title: 'Decision Products',
    description:
      'We turn technical outputs into usable products: live dashboards, state and LGA scorecards, early warning systems, forecasting tools, priority maps, intervention targeting tools, policy simulation tools, monthly intelligence reports, APIs, and executive briefings.',
    highlight: 'The point is not just to show numbers — it is to guide action.',
    color: 'from-blue-500 to-violet-500',
  },
  {
    icon: Activity,
    number: '06',
    title: 'Monitoring & Impact Tracking',
    description:
      'We help clients measure whether their interventions are working by tracking baseline conditions, target populations, implementation progress, outcomes over time, geographic differences, cost-effectiveness, and measurable impact.',
    highlight: 'Making it easier to improve programs instead of repeating weak approaches.',
    color: 'from-indigo-500 to-blue-600',
  },
];

export function Domains() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 mb-4 text-sm uppercase tracking-widest">
            <span className="w-8 h-px bg-blue-600"></span>
            How We Work
            <span className="w-8 h-px bg-blue-600"></span>
          </div>
          <h2 className="mb-4">How Statistics NG Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Statistics NG operates across the full data value chain — from raw collection to deployed decision systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${step.color} p-5 flex items-center gap-4`}>
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <step.icon className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-white/60 text-xs">{step.number}</div>
                  <div className="text-white text-sm">{step.title}</div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                <p className="text-blue-700 text-sm italic border-l-2 border-blue-200 pl-3">
                  {step.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
