import { Link } from 'react-router-dom';
import { Database, Code, FileText, TrendingUp, Award, Users, Zap, BookOpen } from 'lucide-react';

function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景动画 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                数据分析技术
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              为商务数据分析与应用专业学生打造的现代化学习平台
              <br />
              <span className="text-cyan-400">掌握Python · 数据采集 · 数据清洗 · 数据可视化</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/course/1" className="btn-cyber text-lg px-8 py-4 animate-pulse-glow">
                开始学习 →
              </Link>
              <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all">
                了解更多
              </button>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              <div className="glass rounded-xl p-6 card-hover">
                <Users className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">12,580</div>
                <div className="text-sm text-gray-400">学习学员</div>
              </div>
              <div className="glass rounded-xl p-6 card-hover">
                <BookOpen className="w-8 h-8 text-pink-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">5</div>
                <div className="text-sm text-gray-400">核心模块</div>
              </div>
              <div className="glass rounded-xl p-6 card-hover">
                <Award className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">87%</div>
                <div className="text-sm text-gray-400">完成率</div>
              </div>
              <div className="glass rounded-xl p-6 card-hover">
                <Zap className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-sm text-gray-400">练习题目</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 课程模块 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="neon-text-cyan">课程模块</span>
            </h2>
            <p className="text-gray-400 text-lg">系统学习数据分析技术，从基础到实战</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 模块1 */}
            <div className="glass rounded-2xl p-8 card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Python基础</h3>
              <p className="text-gray-400 mb-4">掌握Python编程基础，包括变量、数据类型、流程控制和函数等核心概念。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag tag-cyan">变量</span>
                <span className="tag tag-cyan">数据类型</span>
                <span className="tag tag-cyan">循环</span>
              </div>
              <Link to="/course/1" className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2">
                开始学习 →
              </Link>
            </div>

            {/* 模块2 */}
            <div className="glass rounded-2xl p-8 card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">数据来源和类型</h3>
              <p className="text-gray-400 mb-4">了解常见数据源、数据格式（CSV、JSON、Excel）以及数据存储方式。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag tag-pink">CSV</span>
                <span className="tag tag-pink">JSON</span>
                <span className="tag tag-pink">Excel</span>
              </div>
              <Link to="/course/1" className="text-pink-400 hover:text-pink-300 font-medium flex items-center gap-2">
                开始学习 →
              </Link>
            </div>

            {/* 模块3 */}
            <div className="glass rounded-2xl p-8 card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">数据采集</h3>
              <p className="text-gray-400 mb-4">学习文件读取、网络数据获取和API数据接口的使用方法。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag tag-purple">文件读取</span>
                <span className="tag tag-purple">API</span>
                <span className="tag tag-purple">网络</span>
              </div>
              <Link to="/course/1" className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2">
                开始学习 →
              </Link>
            </div>

            {/* 模块4 */}
            <div className="glass rounded-2xl p-8 card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">数据清洗</h3>
              <p className="text-gray-400 mb-4">掌握缺失值处理、数据类型转换、数据去重和异常值处理技术。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.4)' }}>清洗</span>
                <span className="tag" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.4)' }}>去重</span>
                <span className="tag" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.4)' }}>转换</span>
              </div>
              <Link to="/course/1" className="font-medium flex items-center gap-2" style={{ color: '#10b981' }}>
                开始学习 →
              </Link>
            </div>

            {/* 模块5 */}
            <div className="glass rounded-2xl p-8 card-hover group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:animate-float">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">数据可视化</h3>
              <p className="text-gray-400 mb-4">学习Matplotlib和Seaborn，创建专业的统计图表和数据展示。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag" style={{ background: 'rgba(249, 115, 22, 0.2)', color: '#f97316', border: '1px solid rgba(249, 115, 22, 0.4)' }}>图表</span>
                <span className="tag" style={{ background: 'rgba(249, 115, 22, 0.2)', color: '#f97316', border: '1px solid rgba(249, 115, 22, 0.4)' }}>可视化</span>
                <span className="tag" style={{ background: 'rgba(249, 115, 22, 0.2)', color: '#f97316', border: '1px solid rgba(249, 115, 22, 0.4)' }}>Matplotlib</span>
              </div>
              <Link to="/course/1" className="font-medium flex items-center gap-2" style={{ color: '#f97316' }}>
                开始学习 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 学习特色 */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="neon-text-pink">学习特色</span>
            </h2>
            <p className="text-gray-400 text-lg">沉浸式学习体验，高效掌握技能</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-cyan">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">代码练习</h3>
              <p className="text-gray-400">在线编写Python代码，即时获得反馈和解析</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-pink">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">课后测验</h3>
              <p className="text-gray-400">20道测验题（10选择+10判断）巩固知识点</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-purple">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">详细解析</h3>
              <p className="text-gray-400">完整的答案解析和常见错误分析</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
