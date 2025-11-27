import { ArrowRight, BarChart3, TrendingUp, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761914410572-02614b575847?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGdyYXBocyUyMGNoYXJ0c3xlbnwxfHx8fDE3NjQyMDc2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Data Visualization Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-indigo-900/90 to-blue-800/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-transparent to-indigo-50/10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/90 backdrop-blur-sm text-blue-900 rounded-full mb-6">
              <Shield size={16} />
              <span className="text-sm">Nigeria's Independent Data Authority</span>
            </div>
            
            <h1 className="mb-6">
              <span className="block text-white">STATISTICS NIGERIA</span>
              <span className="block text-blue-300 mt-2">Truth. Insight. Progress.</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-4">
              Turning Numbers into Trust. Turning Trust into Progress.
            </p>
            
            <p className="text-blue-200 mb-8">
              We collect, organize, and make sense of information about how Nigeria works, 
              so that decisions in government, business, and society are based on truth, not guesswork.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Explore Our Work
                <ArrowRight size={20} />
              </a>
              <a
                href="#domains"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 backdrop-blur-sm transition-colors"
              >
                View Data Domains
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-blue-300 mb-1">7+</div>
                <div className="text-sm text-blue-200">Strategic Domains</div>
              </div>
              <div>
                <div className="text-blue-300 mb-1">200M+</div>
                <div className="text-sm text-blue-200">Citizens Empowered</div>
              </div>
              <div>
                <div className="text-blue-300 mb-1">100%</div>
                <div className="text-sm text-blue-200">Data Integrity</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Dashboard Image */}
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwZGFzaGJvYXJkJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc2NDE1Mjg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Data Analytics Dashboard"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay with cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-700/90 p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <BarChart3 className="text-white mb-3" size={32} />
                    <div className="text-white/80 text-sm mb-1">Data Collection</div>
                    <div className="text-white">Nationwide</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                    <TrendingUp className="text-white mb-3" size={32} />
                    <div className="text-white/80 text-sm mb-1">AI Analytics</div>
                    <div className="text-white">Real-time</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 col-span-2">
                    <Shield className="text-white mb-3" size={32} />
                    <div className="text-white/80 text-sm mb-1">Data Governance</div>
                    <div className="text-white">Ethical & Sovereign</div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}