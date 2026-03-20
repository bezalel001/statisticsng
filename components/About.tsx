import { HelpCircle, CheckCircle2 } from 'lucide-react';

const questions = [
  'Where are problems getting worse?',
  'What is likely to happen next?',
  'Which communities, states, or LGAs need help first?',
  'Which policy or intervention will have the strongest impact?',
  'How do we measure whether a program is actually working?',
];

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 text-blue-600 mb-4 text-sm uppercase tracking-widest">
              <span className="w-8 h-px bg-blue-600"></span>
              What We Do
            </div>
            <h2 className="mb-6">What Statistics NG Does</h2>
            <p className="text-gray-700 mb-6">
              Statistics NG helps organizations answer the questions that matter most:
            </p>

            <ul className="space-y-4 mb-8">
              {questions.map((q, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="text-white" size={20} />
                </div>
                <div className="text-gray-900">Our Domain Expertise</div>
              </div>
              <p className="text-gray-700 mb-6">
                We use statistics, data science, machine learning, geospatial analysis, forecasting, and AI tools to solve real Nigerian problems in areas such as:
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Poverty',
                  'Food Systems',
                  'Health',
                  'Education',
                  'Agriculture',
                  'Labor Markets',
                  'Infrastructure',
                  'Public Spending',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white border border-blue-200 text-blue-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 bg-gray-900 rounded-2xl p-8 text-white">
              <p className="text-blue-300 text-sm mb-3 uppercase tracking-widest">Who We Are</p>
              <p className="text-white/90">
                Statistics NG is a Nigerian data science, machine learning, and AI company. We are a <span className="text-blue-300">decision intelligence company</span> — not just a reporting company, not just a dashboard company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
