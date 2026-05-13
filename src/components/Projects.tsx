import { Clock, Star, ChevronRight, BarChart3, Brain, TrendingUp, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, type Project } from '../data/projects';

const difficultyColors = {
  beginner: { bg: 'bg-green-100', text: 'text-green-700', label: '入门' },
  intermediate: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: '进阶' },
  advanced: { bg: 'bg-red-100', text: 'text-red-700', label: '高级' }
};

const categoryIcons: Record<string, typeof BarChart3> = {
  '数据处理': BarChart3,
  '机器学习': Brain,
  '商业分析': TrendingUp,
  '预测分析': PieChart,
  '综合项目': BarChart3
};

function ProjectCard({ project }: { project: Project }) {
  const diff = difficultyColors[project.difficulty];
  const IconComponent = categoryIcons[project.category] || BarChart3;

  return (
    <Link to={`/projects/${project.id}`} className="group bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 block">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 ${diff.bg} rounded-xl flex items-center justify-center`}>
          <IconComponent className={`w-6 h-6 ${diff.text}`} />
        </div>
        <span className={`px-3 py-1 ${diff.bg} ${diff.text} rounded-full text-xs font-medium`}>
          {diff.label}
        </span>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-sm text-gray-500 mb-4 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.slice(0, 3).map((skill, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
            {skill}
          </span>
        ))}
        {project.skills.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-400 rounded-md text-xs">
            +{project.skills.length - 3}
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2 text-gray-500">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{project.estimatedHours}小时</span>
        </div>
        <span className="flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
          开始项目
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  const categories = [...new Set(projects.map(p => p.category))];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            训练项目
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            10个实战项目，系统提升技能
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            从基础数据处理到高级机器学习，每个项目都配有真实数据集和详细指导
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full text-sm font-medium">
            全部项目
          </button>
          {categories.map((cat) => (
            <button key={cat} className="px-5 py-2 bg-white text-gray-600 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
              {cat}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
