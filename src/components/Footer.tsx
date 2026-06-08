import { Database } from 'lucide-react';

function Footer() {
  return (
    <footer className="border-t border-blue-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-lg font-bold text-white">数据分析技术</span>
          </div>
          
          <div className="flex gap-6">
            <a href="/course/1" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">课程学习</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">学习指南</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">常见问题</a>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-blue-500/10 text-center text-gray-500 text-sm">
          <p>&copy; 2024 数据分析技术学习平台</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
