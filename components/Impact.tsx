import { CheckCircle2 } from 'lucide-react';

const bestAtPoints = [
  'The data is messy',
  'The stakes are high',
  'Resources are limited',
  'Action needs to be targeted',
  'Prediction would improve outcomes',
];

export function Impact() {
  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Best At */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4 text-sm uppercase tracking-widest">
              <span className="w-8 h-px bg-blue-600"></span>
              Our Edge
            </div>
            <h2 className="mb-6">What Statistics NG Is Best At</h2>
            <p className="text-gray-700 mb-6">
              Our main expertise is at the intersection of:
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-5 mb-8">
              <p className="text-white text-center">
                statistics + domain knowledge + machine learning + operational decision-making
              </p>
            </div>
            <p className="text-gray-600 mb-6">
              That makes Statistics NG especially strong in situations where:
            </p>
            <ul className="space-y-3">
              {bestAtPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 flex-shrink-0" />
                  <span className="text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-blue-600 text-xs uppercase tracking-widest mb-4">Our Approach</div>
            <p className="text-gray-700 mb-6">
              Instead of offering generic analytics, we focus on high-impact use cases in Nigeria. We understand the local context, institutions, data realities, sector priorities, and operational constraints that shape decision-making here.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Data Collection to Deployed Systems', width: 'w-full' },
                { label: 'Statistical Rigor', width: 'w-5/6' },
                { label: 'Machine Learning & AI', width: 'w-4/5' },
                { label: 'Nigeria Domain Knowledge', width: 'w-full' },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{bar.label}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full ${bar.width}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-10 md:p-14 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-blue-200 text-xs uppercase tracking-widest mb-4">Ready to Get Started?</p>
            <h3 className="text-white mb-4">Data should not just describe problems. It should help solve them.</h3>
            <p className="text-white/80 mb-8">
              Whether you need stronger data systems, better forecasting, clearer risk intelligence, or decision tools tailored to Nigeria, Statistics NG can help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contact Us
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-white/40 text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
