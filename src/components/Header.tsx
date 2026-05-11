import { BookOpen, Menu, X, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-500 rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
              DataLearn
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">首页</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">训练项目</a>
            <a href="#courses" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">课程中心</a>
            <a href="#community" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">社区交流</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
              <span className="font-medium">登录</span>
            </button>
            <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
              免费开始
            </button>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
