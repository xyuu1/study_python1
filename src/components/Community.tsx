import { MessageCircle, HelpCircle, Share2, ArrowRight, User } from 'lucide-react';

export default function Community() {
  const discussions = [
    {
      id: 1,
      title: '如何处理缺失值？',
      author: '小明同学',
      replies: 23,
      views: 156,
      tags: ['数据清洗', 'Pandas']
    },
    {
      id: 2,
      title: 'K-Means聚类结果不稳定怎么办？',
      author: '数据分析爱好者',
      replies: 18,
      views: 124,
      tags: ['机器学习', '聚类']
    },
    {
      id: 3,
      title: '财务报表分析项目求指导',
      author: '商务分析新生',
      replies: 31,
      views: 201,
      tags: ['商业分析', '财务']
    },
    {
      id: 4,
      title: 'Matplotlib图表美化技巧分享',
      author: '数据可视化达人',
      replies: 45,
      views: 342,
      tags: ['可视化', 'Matplotlib']
    }
  ];

  return (
    <section id="community" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            社区交流
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            加入我们的学习社区
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            与志同道合的同学交流心得，分享经验，共同进步
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">热门讨论</h3>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1">
                  查看全部
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                          {discussion.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {discussion.author}
                          </span>
                          <span>{discussion.replies} 回复</span>
                          <span>{discussion.views} 浏览</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {discussion.tags.map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-teal-500 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">需要帮助？</h3>
              <p className="text-blue-100 mb-6">
                加入我们的学习群，与同学们一起讨论问题，互相帮助
              </p>
              <button className="w-full py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                加入学习群
              </button>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">社区功能</h3>
              <div className="space-y-4">
                {[
                  { icon: MessageCircle, title: '讨论交流', desc: '与同学分享经验' },
                  { icon: HelpCircle, title: '问题求助', desc: '获取专业解答' },
                  { icon: Share2, title: '资源共享', desc: '分享学习资料' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
