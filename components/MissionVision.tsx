import { Target, Eye, AlertTriangle } from 'lucide-react';

const problems = [
  {
    title: 'Data is fragmented',
    detail:
      'Information is spread across agencies, programs, surveys, field teams, and legacy systems.',
  },
  {
    title: 'Data quality is inconsistent',
    detail:
      'Missing values, duplicate entries, weak definitions, outdated records, and poor standardization.',
  },
  {
    title: 'Most analysis is backward-looking',
    detail:
      'Many organizations can describe what happened, but they cannot predict what is coming or decide what to do next.',
  },
  {
    title: 'Decision-makers are overloaded',
    detail:
      'Senior leaders do not need long technical reports. They need clear answers, risk signals, forecasts, and priority areas.',
  },
  {
    title: 'Technical insight rarely becomes operational action',
    detail:
      'Even when the analysis is good, there is often no workflow to turn insight into budget shifts, field action, targeting, or monitoring.',
  },
];

export function MissionVision() {
  return (
    <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-blue-600" size={24} />
            </div>
            <div className="text-blue-600 text-xs uppercase tracking-widest mb-3">Our Mission</div>
            <h3 className="mb-4">Improving Decision-Making in Nigeria</h3>
            <p className="text-gray-700 mb-4">
              The mission of Statistics NG is to improve decision-making in Nigeria by making data more useful, more predictive, and more actionable.
            </p>
            <p className="text-gray-600">
              A lot of organizations already collect data, but most of that data is underused — sitting in spreadsheets, survey files, PDFs, ministry records, field reports, and disconnected databases. Statistics NG takes that scattered information and turns it into a system that people can trust and use.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-sm text-white">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-white" size={24} />
            </div>
            <div className="text-blue-200 text-xs uppercase tracking-widest mb-3">Our Vision</div>
            <h3 className="mb-4 text-white">A Trusted Data Intelligence Leader</h3>
            <p className="text-white/90 mb-4">
              To become one of Nigeria's most trusted data intelligence companies and a leading African provider of applied data science solutions for real-world impact.
            </p>
            <div className="bg-white/10 border border-white/20 rounded-xl p-4 mt-6">
              <p className="text-white/90 text-sm italic">
                "Our goal is simple: to help institutions make faster, smarter, and more evidence-based decisions."
              </p>
            </div>
          </div>
        </div>

        {/* Problem We Solve */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="text-amber-600" size={20} />
            </div>
            <div className="text-amber-600 text-xs uppercase tracking-widest">The Challenge</div>
          </div>
          <h3 className="mb-3">The Problem We Solve</h3>
          <p className="text-gray-600 mb-10">
            Nigeria has a huge amount of data potential, but several problems keep organizations from benefiting from it.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm mb-4">
                  {i + 1}
                </div>
                <div className="text-gray-900 mb-2">{p.title}</div>
                <p className="text-gray-600 text-sm">{p.detail}</p>
              </div>
            ))}

            {/* Closing statement */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl p-6 text-white md:col-span-2 lg:col-span-1 flex flex-col justify-center">
              <p className="text-white/90">
                Statistics NG exists to close that gap — turning scattered data into trusted intelligence and usable action.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
