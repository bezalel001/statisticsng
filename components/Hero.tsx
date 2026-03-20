import { ArrowRight, PhoneCall } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMG1hY2hpbmUlMjBsZWFybmluZyUyME5pZ2VyaWElMjBBZnJpY2ElMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDAwOTIwMXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Data Science and AI"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/96 via-indigo-950/94 to-blue-900/96"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 rounded-full mb-8 text-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              Nigeria-focused · Decision Intelligence
            </div>

            <h1 className="mb-6 text-white">
              Using Data Science, Machine Learning, and AI to Drive Better Decisions in Nigeria
            </h1>

            <p className="text-xl text-blue-100 mb-4">
              Statistics NG is a Nigerian data science, machine learning, and AI company that helps governments, NGOs, development partners, and businesses turn raw data into better decisions.
            </p>

            <p className="text-blue-200/80 mb-10">
              We are not just a reporting company and not just a dashboard company. We are a decision intelligence company — we gather data, analyze it with statistical and machine learning methods, and turn the results into practical actions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-blue-700 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                <PhoneCall size={18} />
                Talk to Us
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-white/40 text-white rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors"
              >
                Request a Consultation
                <ArrowRight size={18} />
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/15">
              <div>
                <div className="text-blue-300 mb-1">End-to-End</div>
                <div className="text-sm text-blue-200/70">Data Value Chain</div>
              </div>
              <div>
                <div className="text-blue-300 mb-1">Nigeria-first</div>
                <div className="text-sm text-blue-200/70">Design & Context</div>
              </div>
              <div>
                <div className="text-blue-300 mb-1">ML + AI</div>
                <div className="text-sm text-blue-200/70">Practical & Grounded</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-6">
                <div className="text-blue-300 text-xs mb-3 uppercase tracking-widest">What We Do</div>
                <p className="text-white/90 text-sm leading-relaxed">
                  We help organizations answer the questions that matter most — where are problems getting worse, what is likely to happen next, and which intervention will have the strongest impact.
                </p>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="text-3xl text-blue-300 mb-2">01</div>
                <div className="text-white/80 text-sm mb-1">Data Collection</div>
                <div className="text-white/60 text-xs">& Integration</div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="text-3xl text-blue-300 mb-2">02</div>
                <div className="text-white/80 text-sm mb-1">Statistical</div>
                <div className="text-white/60 text-xs">Analysis & ML</div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="text-3xl text-blue-300 mb-2">03</div>
                <div className="text-white/80 text-sm mb-1">Decision</div>
                <div className="text-white/60 text-xs">Products & Tools</div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="text-3xl text-blue-300 mb-2">04</div>
                <div className="text-white/80 text-sm mb-1">Monitoring</div>
                <div className="text-white/60 text-xs">& Impact Tracking</div>
              </div>
              <div className="col-span-2 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 border border-blue-400/30 rounded-2xl p-5">
                <p className="text-white/90 text-sm italic">
                  "Data should not just describe problems. It should help solve them."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
