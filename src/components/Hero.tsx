import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { learningStats } from '../data/projects';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>专为商务数据分析专业设计</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Python数据分析
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                技能训练平台
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              通过10个实战项目，从数据处理到机器学习，系统掌握Python数据分析技能，为你的职业发展赋能。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2">
                开始学习
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-blue-300 hover:text-blue-600 transition-colors flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                观看介绍
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-500">已有 <span className="font-semibold text-gray-900">{learningStats.totalUsers.toLocaleString()}</span> 名学生加入学习</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-teal-200 rounded-full opacity-30 blur-3xl"></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-medium text-gray-500">项目完成进度</span>
                <span className="text-sm font-semibold text-blue-600">87%</span>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: '销售数据分析', progress: 100, color: 'bg-green-500' },
                  { name: '客户分群分析', progress: 75, color: 'bg-blue-500' },
                  { name: '财务报表分析', progress: 50, color: 'bg-yellow-500' },
                  { name: '市场调研分析', progress: 25, color: 'bg-orange-500' },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{item.name}</span>
                      <span className="text-sm text-gray-500">{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} rounded-full transition-all duration-500`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-xl shadow flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">完成全部项目</p>
                    <p className="text-sm text-gray-500">获得专业技能证书</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
