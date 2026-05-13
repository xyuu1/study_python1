import { BookOpen, Clock, ChevronRight, Code2, BarChart2, LineChart, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import { courses } from '../data/projects';

const courseIcons: Record<string, typeof Code2> = {
  'Python基础入门': Code2,
  'Pandas数据处理': BarChart2,
  '数据可视化': LineChart,
  '统计分析': BarChart2,
  '机器学习入门': Brain
};

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
            课程中心
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            系统化课程体系
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            从零基础到精通，循序渐进的课程设计帮助你建立完整的知识体系
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const IconComponent = courseIcons[course.title] || BookOpen;
            return (
              <Link to={`/courses/${course.id}`} key={course.id} className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:border-teal-200 transition-all duration-300 block">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                        {course.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.topics.slice(0, 2).map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-teal-50 text-teal-600 rounded-md text-xs">
                          {topic}
                        </span>
                      ))}
                      {course.topics.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-400 rounded-md text-xs">
                          +{course.topics.length - 2}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <span className="flex items-center gap-1 text-teal-600 hover:text-teal-700 text-sm font-medium">
                        学习课程
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
