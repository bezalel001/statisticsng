import { Database, Brain, Target, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Understanding Nigeria Through Data</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Statistics Nigeria helps Nigeria — and Africa — understand itself through data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="mb-4">Who We Are</h3>
            <p className="text-gray-700 mb-4">
              Statistics Nigeria is a company that helps Nigeria — and Africa — understand itself through data. 
              We collect, organize, and make sense of information about how our country works, so that decisions 
              in government, business, and society are based on truth, not guesswork.
            </p>
            <p className="text-gray-700">
              Our goal is to build a trusted, independent, and ethical data system that gives everyone — citizens, 
              institutions, and leaders — the power to see clearly and act wisely.
            </p>
          </div>

          <div>
            <h3 className="mb-4">Why We Exist</h3>
            <p className="text-gray-700 mb-4">
              Progress begins with understanding, and understanding begins with data. Most Nigerians want the 
              country to move forward and for people to reach their full potential. For that to happen, we must 
              build systems that help us guide and improve national performance.
            </p>
            <p className="text-gray-700">
              Before we can control or improve any system, we first need to understand it. To understand Nigeria — 
              its economy, schools, health system, and environment — we must build models that describe how these 
              systems behave. Those models can only be created from data.
            </p>
          </div>
        </div>

        {/* Process */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-center mb-12">How We Work</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-white" size={28} />
              </div>
              <div className="mb-2">Collect Data</div>
              <p className="text-sm text-gray-600">
                Gather verified information from across Nigeria
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="text-white" size={28} />
              </div>
              <div className="mb-2">Process & Analyze</div>
              <p className="text-sm text-gray-600">
                Use AI and analytics to uncover patterns
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={28} />
              </div>
              <div className="mb-2">Generate Insights</div>
              <p className="text-sm text-gray-600">
                Turn data into actionable intelligence
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <div className="mb-2">Drive Progress</div>
              <p className="text-sm text-gray-600">
                Enable better decisions and real impact
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-900">
              We turn data into understanding, and understanding into progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}