import { Building, Briefcase, FileText, FlaskConical, Users } from 'lucide-react';

export function TargetUsers() {
  const users = [
    {
      icon: Building,
      group: 'Government',
      delivery: 'Evidence-based policymaking and performance tracking.',
      color: 'bg-blue-500'
    },
    {
      icon: Briefcase,
      group: 'Businesses',
      delivery: 'Market and economic intelligence for smart decisions.',
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      group: 'Media & Fact-Checkers',
      delivery: 'Verified data and APIs for responsible journalism.',
      color: 'bg-purple-500'
    },
    {
      icon: FlaskConical,
      group: 'Researchers & Educators',
      delivery: 'Reliable datasets for innovation and discovery.',
      color: 'bg-orange-500'
    },
    {
      icon: Users,
      group: 'Citizens',
      delivery: 'Clear facts that build awareness and civic engagement.',
      color: 'bg-pink-500'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Who We Serve</h2>
          <p className="text-xl text-gray-600">
            Empowering every stakeholder in Nigeria's progress
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {users.map((user) => (
            <div
              key={user.group}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className={`w-16 h-16 ${user.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <user.icon className="text-white" size={28} />
              </div>
              <h4 className="mb-3">{user.group}</h4>
              <p className="text-sm text-gray-600">{user.delivery}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
