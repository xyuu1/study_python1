import { Link } from 'react-router-dom';
import { Code, Database } from 'lucide-react';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-blue-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center group-hover:animate-float">
              <Database className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
              数据分析技术
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-gray-400 hover:text-blue-400 transition-colors font-medium"
            >
              首页
            </Link>
            <Link 
              to="/course/1" 
              className="text-gray-400 hover:text-blue-400 transition-colors font-medium"
            >
              <Code className="w-4 h-4 inline mr-1" />
              课程学习
            </Link>
          </nav>
          
          <Link to="/course/1" className="btn-cyber">
            开始学习
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
