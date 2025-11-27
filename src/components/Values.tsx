import { Shield, Target, Lightbulb, Users, Heart, TrendingUp } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Shield,
      name: 'Integrity',
      description: 'Truth and transparency are non-negotiable.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Target,
      name: 'Objectivity',
      description: 'Data is sacred, never politicized or manipulated.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Lightbulb,
      name: 'Innovation',
      description: 'Use AI, blockchain, and cloud tools to make data alive and accessible.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      name: 'Collaboration',
      description: 'Partner with government, media, academia, and international institutions.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Heart,
      name: 'Inclusion',
      description: 'Make data understandable and usable for every Nigerian.',
      color: 'bg-pink-100 text-pink-600'
    },
    {
      icon: TrendingUp,
      name: 'Impact',
      description: 'Ensure every dataset translates into better decisions and real progress.',
      color: 'bg-emerald-100 text-emerald-600'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Core Values</h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.name}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className={`w-12 h-12 ${value.color} rounded-lg flex items-center justify-center mb-4`}>
                <value.icon size={24} />
              </div>
              <h4 className="mb-2">{value.name}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}