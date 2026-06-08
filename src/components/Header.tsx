import { Link } from 'react-router-dom';
import { BookOpen, Code, Database } from 'lucide-react';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:animate-float">
              <Database className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
              DataLearn
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              首页
            </Link>
            <Link 
              to="/course/1" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              <Code className="w-4 h-4 inline mr-1" />
              课程学习
            </Link>
            <a 
              href="#" 
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              <BookOpen className="w-4 h-4 inline mr-1" />
              学习中心
            </a>
          </nav>
          
          <button className="btn-cyber">
            开始学习
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
