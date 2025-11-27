import { CheckCircle, TrendingUp, GraduationCap, Globe, MapPin } from 'lucide-react';

export function Impact() {
  const impacts = [
    {
      icon: CheckCircle,
      text: 'Build public trust through data transparency'
    },
    {
      icon: TrendingUp,
      text: 'Enable evidence-based leadership across all sectors'
    },
    {
      icon: GraduationCap,
      text: 'Promote data literacy and empower young Nigerians to think critically'
    },
    {
      icon: Globe,
      text: 'Create an African-led data governance model for the 21st century'
    },
    {
      icon: MapPin,
      text: 'Position Nigeria as Africa\'s center of statistical and data innovation'
    }
  ];

  return (
    <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600">
            Creating lasting change through data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impacts.map((impact, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <impact.icon className="text-blue-600" size={20} />
              </div>
              <p className="text-gray-700">{impact.text}</p>
            </div>
          ))}
        </div>

        {/* Simple Summary */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="mb-6">In Simple Words</h3>
            <p className="text-xl text-gray-700 mb-4">
              Statistics Nigeria helps Nigeria grow by turning data into understanding and understanding into progress.
            </p>
            <p className="text-gray-600">
              We collect, process, and model the nation's data so that facts — not opinions — drive decisions, 
              reforms, and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}