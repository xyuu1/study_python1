import { Link } from 'react-router-dom';
import { Database, Code, FileText, TrendingUp, Sparkles, BarChart3, LineChart } from 'lucide-react';

function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景动画 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                数据分析技术
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              系统学习Python数据分析核心技能
              <br />
              <span className="text-blue-400">从数据采集到可视化分析</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link to="/course/1" className="btn-cyber text-lg px-8 py-4 animate-pulse-glow">
                开始学习 →
              </Link>
              <button className="px-8 py-4 border-2 border-blue-500/50 text-blue-400 rounded-lg font-semibold hover:bg-blue-500/10 transition-all">
                了解课程
              </button>
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
            <p className="text-gray-400 text-lg">循序渐进，系统掌握数据分析技术</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 模块1 */}
            <div className="glass rounded-2xl p-6 card-hover group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:animate-float">
                <Code className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Python基础</h3>
              <p className="text-gray-400 text-sm mb-4">掌握Python编程基础，包括变量、数据类型、流程控制和函数等核心概念。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag tag-cyan">变量</span>
                <span className="tag tag-cyan">函数</span>
                <span className="tag tag-cyan">循环</span>
              </div>
              <Link to="/course/1" className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-2">
                开始学习 →
              </Link>
            </div>

            {/* 模块2 */}
            <div className="glass rounded-2xl p-6 card-hover group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:animate-float">
                <Database className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">数据来源和类型</h3>
              <p className="text-gray-400 text-sm mb-4">了解常见数据源、数据格式（CSV、JSON、Excel）以及数据存储方式。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag tag-teal">CSV</span>
                <span className="tag tag-teal">JSON</span>
                <span className="tag tag-teal">Excel</span>
              </div>
              <Link to="/course/1" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-2">
                开始学习 →
              </Link>
            </div>

            {/* 模块3 */}
            <div className="glass rounded-2xl p-6 card-hover group">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500/30 to-blue-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:animate-float">
                <FileText className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">数据采集</h3>
              <p className="text-gray-400 text-sm mb-4">学习文件读取、网络数据获取和API数据接口的使用方法。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag tag-blue">API</span>
                <span className="tag tag-blue">爬虫</span>
                <span className="tag tag-blue">数据库</span>
              </div>
              <Link to="/course/1" className="text-teal-400 hover:text-teal-300 font-medium text-sm flex items-center gap-2">
                开始学习 →
              </Link>
            </div>

            {/* 模块4 */}
            <div className="glass rounded-2xl p-6 card-hover group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:animate-float">
                <Sparkles className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">数据清洗</h3>
              <p className="text-gray-400 text-sm mb-4">掌握缺失值处理、数据类型转换、数据去重和异常值处理技术。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag tag-purple">清洗</span>
                <span className="tag tag-purple">去重</span>
                <span className="tag tag-purple">转换</span>
              </div>
              <Link to="/course/1" className="text-purple-400 hover:text-purple-300 font-medium text-sm flex items-center gap-2">
                开始学习 →
              </Link>
            </div>

            {/* 模块5 */}
            <div className="glass rounded-2xl p-6 card-hover group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:animate-float">
                <BarChart3 className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">数据可视化</h3>
              <p className="text-gray-400 text-sm mb-4">学习Matplotlib和Seaborn，创建专业的统计图表和数据展示。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag tag-cyan">图表</span>
                <span className="tag tag-cyan">Matplotlib</span>
                <span className="tag tag-cyan">Seaborn</span>
              </div>
              <Link to="/course/1" className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center gap-2">
                开始学习 →
              </Link>
            </div>

            {/* 模块6 */}
            <div className="glass rounded-2xl p-6 card-hover group">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-4 group-hover:animate-float">
                <LineChart className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">统计分析</h3>
              <p className="text-gray-400 text-sm mb-4">掌握描述性统计、假设检验、相关分析等统计分析方法。</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="tag tag-teal">统计</span>
                <span className="tag tag-teal">相关</span>
                <span className="tag tag-teal">回归</span>
              </div>
              <Link to="/course/1" className="text-cyan-400 hover:text-cyan-300 font-medium text-sm flex items-center gap-2">
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
              <span className="neon-text-blue">学习特色</span>
            </h2>
            <p className="text-gray-400 text-lg">沉浸式学习体验，高效掌握技能</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 glow-cyan">
                <Code className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">代码练习</h3>
              <p className="text-gray-400 text-sm">在线编写Python代码，即时获得反馈和解析</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/30 to-teal-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 glow-teal">
                <BarChart3 className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">课后测验</h3>
              <p className="text-gray-400 text-sm">20道测验题（10选择+10判断）巩固知识点</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 glow-blue">
                <Sparkles className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">详细解析</h3>
              <p className="text-gray-400 text-sm">完整的答案解析和常见错误分析</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
