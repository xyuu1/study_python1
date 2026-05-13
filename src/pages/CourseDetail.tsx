import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  BookOpen, 
  Check, 
  Copy, 
  ChevronRight, 
  ChevronDown, 
  Play, 
  Star, 
  Clock 
} from 'lucide-react';
import { courses } from '../data/projects';

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id!));
  const [activeChapter, setActiveChapter] = useState(0);
  const [copied, setCopied] = useState(false);
  const [showExercise, setShowExercise] = useState<number | null>(null);
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string | boolean>>({});
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});

  if (!course) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg">课程未找到</p>
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

  const chapter = course.chapters[activeChapter];
  const progress = (completedChapters.length / course.chapters.length) * 100;

  const handleCopyCode = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMarkComplete = (chapterId: number) => {
    if (!completedChapters.includes(chapterId)) {
      setCompletedChapters([...completedChapters, chapterId]);
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
            <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              {course.duration}
            </span>
          </div>
        </div>
      </div>

      {/* 进度条 */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">课程进度</span>
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
                课程目录
              </h3>
              <div className="space-y-1">
                {course.chapters.map((chap, idx) => (
                  <button
                    key={chap.id}
                    onClick={() => setActiveChapter(idx)}
                    className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-3 transition-colors ${
                      activeChapter === idx
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {completedChapters.includes(chap.id) ? (
                      <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    ) : (
                      <span className="w-4 h-4 rounded-full border-2 border-gray-300 flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium truncate">
                      第 {idx + 1} 章：{chap.title}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">课程主题</h4>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              {/* 章节标题 */}
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  第 {activeChapter + 1} 章：{chapter.title}
                </h2>
                <p className="text-gray-600">{chapter.content}</p>
              </div>

              {/* 内容区域 */}
              <div className="p-6 space-y-8">
                {/* 代码示例 */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Play className="w-5 h-5 text-blue-600" />
                    代码示例
                  </h3>
                  <div className="space-y-4">
                    {chapter.examples.map((example, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200">
                          <span className="text-sm text-gray-600">示例 {idx + 1}</span>
                          <button
                            onClick={() => handleCopyCode(example)}
                            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors"
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
                        <div className="bg-gray-900 p-4">
                          <pre className="text-sm text-gray-100 font-mono overflow-x-auto">
                            <code>{example}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 练习题 */}
                <section>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    练习题
                  </h3>
                  <div className="space-y-4">
                    {chapter.exercises.map((exercise, idx) => (
                      <div key={exercise.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="p-4 border-b border-gray-200 bg-gray-50">
                          <h4 className="font-medium text-gray-900 mb-2">
                            练习 {idx + 1}：{exercise.question}
                          </h4>
                          <button
                            onClick={() => setShowExercise(showExercise === exercise.id ? null : exercise.id)}
                            className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            {showExercise === exercise.id ? (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                隐藏答案
                              </>
                            ) : (
                              <>
                                <ChevronRight className="w-4 h-4" />
                                查看答案
                              </>
                            )}
                          </button>
                        </div>
                        {showExercise === exercise.id && (
                          <div className="p-4 bg-green-50">
                            <div className="text-sm text-gray-600 mb-2 font-medium">参考答案：</div>
                            <div className="bg-gray-900 rounded-lg p-4">
                              <pre className="text-sm text-gray-100 font-mono overflow-x-auto">
                                <code>{exercise.solution}</code>
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>

                {/* 选择题和判断题 */}
                {chapter.quizzes && chapter.quizzes.length > 0 && (
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-purple-500" />
                      章节测验
                    </h3>
                    <div className="space-y-6">
                      {chapter.quizzes.map((quiz, idx) => (
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
                  </section>
                )}

                {/* 底部导航 */}
                <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (activeChapter > 0) {
                        setActiveChapter(activeChapter - 1);
                      }
                    }}
                    disabled={activeChapter === 0}
                    className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronDown className="w-4 h-4 rotate-90" />
                    上一章
                  </button>
                  
                  <button
                    onClick={() => {
                      handleMarkComplete(chapter.id);
                      if (activeChapter < course.chapters.length - 1) {
                        setActiveChapter(activeChapter + 1);
                      }
                    }}
                    className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                  >
                    {completedChapters.includes(chapter.id) ? '继续学习' : '标记完成并继续'}
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
