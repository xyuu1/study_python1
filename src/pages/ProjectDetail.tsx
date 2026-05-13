import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  ChevronRight, 
  ChevronDown, 
  Play, 
  Check, 
  Copy, 
  Download, 
  Star, 
  BookOpen 
} from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id!));
  const [activeSection, setActiveSection] = useState('intro');
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string | boolean>>({});
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});

  if (!project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg">项目未找到</p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4" />
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const handleCopyCode = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMarkComplete = (sectionId: string) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
  };

  const handleQuizAnswer = (quizId: number, answer: string | boolean) => {
    setQuizAnswers(prev => ({ ...prev, [quizId]: answer }));
  };

  const checkQuizAnswer = (quizId: number, correctAnswer: string | boolean) => {
    const userAnswer = quizAnswers[quizId];
    const isCorrect = userAnswer === correctAnswer;
    setQuizResults(prev => ({ ...prev, [quizId]: isCorrect }));
  };

  const progress = (completedSections.length / project.sections.length) * 100;

  const difficultyColors = {
    beginner: { bg: 'bg-green-100', text: 'text-green-700', label: '入门' },
    intermediate: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: '进阶' },
    advanced: { bg: 'bg-red-100', text: 'text-red-700', label: '高级' }
  };

  const diff = difficultyColors[project.difficulty];
  const activeSectionData = project.sections.find(s => s.id === activeSection);

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              返回
            </button>
            <div className="h-6 w-px bg-gray-200" />
            <h1 className="text-xl font-bold text-gray-900">{project.title}</h1>
            <span className={`px-3 py-1 ${diff.bg} ${diff.text} rounded-full text-sm font-medium`}>
              {diff.label}
            </span>
          </div>
        </div>
      </div>

      {/* 进度条 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">学习进度</span>
            <span className="text-sm font-semibold text-blue-600">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* 左侧目录 */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-100 p-4 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                学习目录
              </h3>
              <div className="space-y-1">
                {project.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {completedSections.includes(section.id) ? (
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium truncate">{section.title}</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">学习目标</h4>
                <ul className="space-y-2">
                  {project.objectives.map((obj, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              {/* 章节标题 */}
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {activeSectionData?.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {project.estimatedHours} 小时
                  </span>
                </div>
              </div>

              {/* 内容区域 */}
              <div className="p-6">
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {activeSectionData?.content}
                  </p>

                  {/* 代码示例 */}
                  {activeSectionData?.codeExample && (
                    <div className="mt-8">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900">代码示例</h3>
                        <button
                          onClick={() => handleCopyCode(activeSectionData.codeExample!)}
                          className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          {copied ? (
                            <>
                              <Check className="w-4 h-4 text-green-500" />
                              已复制
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4" />
                              复制代码
                            </>
                          )}
                        </button>
                      </div>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm text-gray-100 font-mono">
                          <code>{activeSectionData.codeExample}</code>
                        </pre>
                      </div>
                    </div>
                  )}
                </div>

                {/* 代码编辑器区域 */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">代码练习</h3>
                    <button
                      onClick={() => setShowSolution(!showSolution)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      {showSolution ? '隐藏答案' : '查看参考方案'}
                    </button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-400" />
                      <span className="w-3 h-3 rounded-full bg-yellow-400" />
                      <span className="w-3 h-3 rounded-full bg-green-400" />
                      <span className="ml-3 text-sm text-gray-500">editor.py</span>
                    </div>
                    <textarea
                      value={code || project.starterCode}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full h-80 p-4 font-mono text-sm bg-gray-900 text-gray-100 resize-none focus:outline-none"
                      placeholder="# 在这编写你的代码..."
                    />
                  </div>

                  {showSolution && (
                    <div className="mt-4 border border-green-200 rounded-lg overflow-hidden">
                      <div className="bg-green-50 px-4 py-2 border-b border-green-200">
                        <span className="text-sm font-semibold text-green-800">参考方案</span>
                      </div>
                      <div className="bg-green-50/50 p-4">
                        <pre className="text-sm text-gray-700 font-mono overflow-x-auto">
                          <code>{project.solutionCode}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mt-4">
                    <button className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity">
                      <Play className="w-4 h-4" />
                      运行代码
                    </button>
                    <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                      下载代码
                    </button>
                  </div>
                </div>

                {/* 学习要点 */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4">本章节学习要点</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.learningPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-blue-600" />
                        </div>
                        <p className="text-sm text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 选择题和判断题 */}
                {activeSectionData?.quizzes && activeSectionData.quizzes.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-purple-500" />
                      章节测验
                    </h3>
                    <div className="space-y-6">
                      {activeSectionData.quizzes.map((quiz, idx) => (
                        <div key={quiz.id} className="border border-gray-200 rounded-lg p-6 bg-white">
                          <div className="flex items-start gap-3 mb-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-sm">
                              {idx + 1}
                            </span>
                            <div className="flex-1">
                              <span className="inline-block px-2 py-1 text-xs font-medium rounded mb-2 mr-2 bg-blue-100 text-blue-700">
                                {quiz.type === 'multiple_choice' ? '选择题' : '判断题'}
                              </span>
                              <h4 className="font-medium text-gray-900 text-lg">{quiz.question}</h4>
                            </div>
                          </div>

                          {quiz.type === 'multiple_choice' && quiz.options && (
                            <div className="space-y-2 ml-11">
                              {quiz.options.map((option, optIdx) => {
                                const isSelected = quizAnswers[quiz.id] === option;
                                const showResult = quizResults[quiz.id] !== undefined;
                                const isCorrect = option === quiz.correctAnswer;
                                
                                let buttonClass = 'w-full text-left px-4 py-3 border rounded-lg transition-colors';
                                if (showResult) {
                                  if (isCorrect) {
                                    buttonClass += ' bg-green-50 border-green-300 text-green-800';
                                  } else if (isSelected) {
                                    buttonClass += ' bg-red-50 border-red-300 text-red-800';
                                  }
                                } else if (isSelected) {
                                  buttonClass += ' bg-blue-50 border-blue-300 text-blue-800';
                                } else {
                                  buttonClass += ' hover:bg-gray-50 border-gray-200 text-gray-700';
                                }

                                return (
                                  <button
                                    key={optIdx}
                                    onClick={() => handleQuizAnswer(quiz.id, option)}
                                    disabled={showResult}
                                    className={buttonClass}
                                  >
                                    <div className="flex items-center gap-3">
                                      <span className="w-6 h-6 rounded-full border flex items-center justify-center font-medium text-sm">
                                        {String.fromCharCode(65 + optIdx)}
                                      </span>
                                      <span>{option}</span>
                                      {showResult && isCorrect && (
                                        <Check className="w-5 h-5 text-green-600 ml-auto" />
                                      )}
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          {quiz.type === 'true_false' && (
                            <div className="flex gap-4 ml-11">
                              {[true, false].map((option) => {
                                const isSelected = quizAnswers[quiz.id] === option;
                                const showResult = quizResults[quiz.id] !== undefined;
                                const isCorrect = option === quiz.correctAnswer;
                                
                                let buttonClass = 'px-6 py-3 border rounded-lg font-medium transition-colors';
                                if (showResult) {
                                  if (isCorrect) {
                                    buttonClass += ' bg-green-50 border-green-300 text-green-800';
                                  } else if (isSelected) {
                                    buttonClass += ' bg-red-50 border-red-300 text-red-800';
                                  }
                                } else if (isSelected) {
                                  buttonClass += ' bg-blue-50 border-blue-300 text-blue-800';
                                } else {
                                  buttonClass += ' hover:bg-gray-50 border-gray-200 text-gray-700';
                                }

                                return (
                                  <button
                                    key={String(option)}
                                    onClick={() => handleQuizAnswer(quiz.id, option)}
                                    disabled={showResult}
                                    className={buttonClass}
                                  >
                                    {option ? '正确' : '错误'}
                                    {showResult && isCorrect && (
                                      <Check className="w-4 h-4 text-green-600 ml-2 inline" />
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}

                          <div className="mt-4 ml-11">
                            {quizResults[quiz.id] === undefined ? (
                              <button
                                onClick={() => checkQuizAnswer(quiz.id, quiz.correctAnswer)}
                                disabled={quizAnswers[quiz.id] === undefined}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                              >
                                提交答案
                              </button>
                            ) : (
                              <div className={`p-4 rounded-lg ${quizResults[quiz.id] ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                                <div className="flex items-center gap-2 font-medium mb-2">
                                  {quizResults[quiz.id] ? (
                                    <>
                                      <Check className="w-5 h-5 text-green-600" />
                                      <span className="text-green-800">回答正确！</span>
                                    </>
                                  ) : (
                                    <>
                                      <span className="text-red-800">回答错误</span>
                                    </>
                                  )}
                                </div>
                                {quiz.explanation && (
                                  <div className="text-gray-700">
                                    <span className="font-medium">解析：</span>
                                    {quiz.explanation}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 底部导航 */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      const currentIdx = project.sections.findIndex(s => s.id === activeSection);
                      if (currentIdx > 0) {
                        setActiveSection(project.sections[currentIdx - 1].id);
                      }
                    }}
                    disabled={project.sections.findIndex(s => s.id === activeSection) === 0}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronDown className="w-4 h-4 rotate-90" />
                    上一节
                  </button>
                  
                  <button
                    onClick={() => {
                      handleMarkComplete(activeSection!);
                      const currentIdx = project.sections.findIndex(s => s.id === activeSection);
                      if (currentIdx < project.sections.length - 1) {
                        setActiveSection(project.sections[currentIdx + 1].id);
                      }
                    }}
                    className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    {completedSections.includes(activeSection!) ? '继续学习' : '标记完成并继续'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
