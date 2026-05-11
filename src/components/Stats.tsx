import { Award, Clock, Users, CheckCircle } from 'lucide-react';
import { learningStats } from '../data/projects';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: learningStats.totalUsers.toLocaleString(),
      label: '注册学员',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: CheckCircle,
      value: learningStats.completedProjects.toLocaleString(),
      label: '完成项目',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Award,
      value: learningStats.certificates.toLocaleString(),
      label: '获得证书',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Clock,
      value: `${learningStats.avgCompletionRate}%`,
      label: '平均完成率',
      color: 'bg-teal-100 text-teal-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 mx-auto mb-4 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
