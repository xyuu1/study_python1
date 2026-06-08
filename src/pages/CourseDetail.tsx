import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Copy, Play, Award, Code, BookOpen, RefreshCw } from 'lucide-react';
import { courses } from '../data/courses';

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === parseInt(courseId!));
  
  const [activeChapter, setActiveChapter] = useState(0);
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [expandedExercise, setExpandedExercise] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string | boolean>>({});
  const [quizResults, setQuizResults] = useState<Record<number, boolean>>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`course_${courseId}_progress`);
    if (saved) {
      const progress = JSON.parse(saved);
      setCompletedChapters(progress.completedChapters || []);
    }
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">课程未找到</h2>
          <Link to="/" className="btn-cyber">
            返回首页
          </Link>
        </div>
      </div>
    );
  }

  const chapter = course.chapters[activeChapter];
  const progress = (completedChapters.length / course.chapters.length) * 100;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const handleCompleteChapter = () => {
    if (!completedChapters.includes(chapter.id)) {
      const newCompleted = [...completedChapters, chapter.id];
      setCompletedChapters(newCompleted);
      localStorage.setItem(`course_${courseId}_progress`, JSON.stringify({
        completedChapters: newCompleted,
        lastVisit: new Date().toISOString()
      }));
    }
  };

  const handleQuizAnswer = (quizId: number, answer: string | boolean) => {
    setQuizAnswers(prev => ({ ...prev, [quizId]: answer }));
  };

  const checkQuizAnswer = (quiz: any) => {
    const userAnswer = quizAnswers[quiz.id];
    const isCorrect = userAnswer === quiz.correctAnswer;
    setQuizResults(prev => ({ ...prev, [quiz.id]: isCorrect }));
  };

  const getQuizStats = () => {
    const correct = Object.values(quizResults).filter(r => r).length;
    return { correct, total: chapter.quiz.length };
  };

  const resetChapterQuiz = () => {
    setQuizAnswers({});
    setQuizResults({});
    setShowQuizResults(false);
  };

  const resetAllProgress = () => {
    if (confirm('确定要重置所有学习进度吗？这将清空所有章节的完成状态和测验答案。')) {
      setCompletedChapters([]);
      setQuizAnswers({});
      setQuizResults({});
      setShowQuizResults(false);
      setExpandedExercise(null);
      localStorage.removeItem(`course_${courseId}_progress`);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* 顶部导航 */}
      <div className="glass border-b border-blue-500/15 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-xl font-bold text-white">{course.title}</h1>
              <span className="tag tag-cyan">{course.difficulty}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">{course.totalDuration}</span>
              <button 
                onClick={resetAllProgress} 
                className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-all text-sm flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                重置进度
              </button>
              <button onClick={handleCompleteChapter} className="btn-cyber text-sm">
                {completedChapters.includes(chapter.id) ? '已完成 ✓' : '标记完成'}
              </button>
            </div>
          </div>
          
          {/* 进度条 */}
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-400">学习进度</span>
              <span className="text-sm font-semibold text-blue-400">{Math.round(progress)}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* 左侧目录 */}
          <div className="lg:col-span-1">
            <div className="glass rounded-xl p-6 sticky top-40">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                章节列表
              </h3>
              <div className="space-y-2">
                {course.chapters.map((chap, idx) => (
                  <button
                    key={chap.id}
                    onClick={() => setActiveChapter(idx)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                      activeChapter === idx
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                        : 'text-gray-400 hover:bg-gray-800 border border-transparent'
                    }`}
                  >
                    {completedChapters.includes(chap.id) ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-gray-600 flex items-center justify-center text-xs">
                        {idx + 1}
                      </div>
                    )}
                    <span className="text-sm font-medium">{chap.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="lg:col-span-3 space-y-6">
            {/* 章节标题 */}
            <div className="glass rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <Code className="w-7 h-7 text-blue-400" />
                第 {activeChapter + 1} 章：{chapter.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{chapter.content}</p>
            </div>

            {/* 代码示例 */}
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Play className="w-6 h-6 text-cyan-400" />
                代码示例
              </h3>
              <div className="space-y-4">
                {chapter.codeExamples.map((example, idx) => (
                  <div key={idx} className="border border-blue-500/20 rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-blue-500/20">
                      <span className="text-blue-400 font-medium">{example.title}</span>
                      <button
                        onClick={() => handleCopyCode(example.code)}
                        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                      >
                        <Copy className="w-4 h-4" />
                        复制
                      </button>
                    </div>
                    <div className="code-block">
                      <pre className="text-gray-100">{example.code}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 代码练习 */}
        <div className="glass rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Code className="w-6 h-6 text-teal-400" />
              代码练习
            </h3>
            <button
              onClick={() => setExpandedExercise(null)}
              className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-all text-sm flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              收起所有答案
            </button>
          </div>
          <div className="space-y-4">
            {chapter.exercises.map((exercise) => (
              <div key={exercise.id} className="border border-teal-500/20 rounded-lg overflow-hidden">
                <div className="p-4 bg-teal-500/10 border-b border-teal-500/20">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-teal-400 text-sm font-semibold mb-2">
                        练习 {exercise.id}
                      </div>
                      <p className="text-white font-medium">{exercise.question}</p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setExpandedExercise(expandedExercise === exercise.id ? null : exercise.id)}
                        className="px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30 transition-colors text-sm font-medium"
                      >
                        {expandedExercise === exercise.id ? '收起' : '查看答案'}
                      </button>
                      {expandedExercise === exercise.id && (
                        <button
                          onClick={() => setExpandedExercise(null)}
                          className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-all text-sm"
                        >
                          重置
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                    
                    {expandedExercise === exercise.id && (
                      <div className="divide-y divide-gray-700">
                        {/* 参考答案 */}
                        <div className="p-4 bg-green-500/10">
                          <div className="flex items-center gap-2 text-green-400 font-semibold mb-3">
                            <Check className="w-5 h-5" />
                            参考答案
                          </div>
                          <div className="code-block">
                            <pre className="text-gray-100">{exercise.solution}</pre>
                          </div>
                        </div>
                        
                        {/* 解析 */}
                        <div className="p-4 bg-blue-500/10">
                          <div className="flex items-center gap-2 text-blue-400 font-semibold mb-3">
                            <BookOpen className="w-5 h-5" />
                            答案解析
                          </div>
                          <p className="text-gray-300">{exercise.explanation}</p>
                        </div>
                        
                        {/* 常见错误 */}
                        {exercise.commonErrors && exercise.commonErrors.length > 0 && (
                          <div className="p-4 bg-red-500/10">
                            <div className="flex items-center gap-2 text-red-400 font-semibold mb-3">
                              <Award className="w-5 h-5" />
                              常见错误与解决方案
                            </div>
                            <div className="space-y-3">
                              {exercise.commonErrors.map((error, idx) => (
                                <div key={idx} className="bg-gray-800/50 rounded-lg p-3 border border-red-500/20">
                                  <div className="text-red-400 font-medium mb-1">{error.error}</div>
                                  <div className="text-gray-400 text-sm mb-2">问题：{error.description}</div>
                                  <div className="text-green-400 text-sm font-medium">解决：{error.solution}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 章节测验 */}
            <div className="glass rounded-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-400" />
                  章节测验
                </h3>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-gray-400">
                    已答：{Object.keys(quizAnswers).length} / {chapter.quiz.length}
                  </div>
                  <button
                    onClick={resetChapterQuiz}
                    className="px-4 py-2 border border-gray-600 text-gray-400 rounded-lg hover:bg-gray-700 hover:text-white transition-all text-sm flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    重置本章
                  </button>
                  <button
                    onClick={() => setShowQuizResults(!showQuizResults)}
                    className="btn-cyber text-sm"
                  >
                    提交测验
                  </button>
                </div>
              </div>
              
              {showQuizResults && (
                <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {getQuizStats().correct} / {getQuizStats().total}
                    </div>
                    <div className="text-blue-400">
                      正确率：{Math.round((getQuizStats().correct / getQuizStats().total) * 100)}%
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {chapter.quiz.map((quiz, idx) => (
                  <div key={quiz.id} className="quiz-card">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {idx + 1}
                      </span>
                      <div className="flex-1">
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded mb-2 mr-2 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          {quiz.type === 'multiple_choice' ? '选择题' : '判断题'}
                        </span>
                        <h4 className="text-white font-medium text-lg">{quiz.question}</h4>
                      </div>
                    </div>

                    {quiz.type === 'multiple_choice' && quiz.options && (
                      <div className="space-y-2 ml-11">
                        {quiz.options.map((option, optIdx) => {
                          const isSelected = quizAnswers[quiz.id] === option;
                          const showResult = quizResults[quiz.id] !== undefined;
                          const isCorrect = option === quiz.correctAnswer;
                          
                          let buttonClass = 'quiz-option';
                          if (showResult) {
                            if (isCorrect) {
                              buttonClass += ' correct';
                            } else if (isSelected) {
                              buttonClass += ' incorrect';
                            }
                          } else if (isSelected) {
                            buttonClass += ' selected';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => !quizResults[quiz.id] && handleQuizAnswer(quiz.id, option)}
                              disabled={quizResults[quiz.id] !== undefined}
                              className={buttonClass}
                            >
                              <span className="font-semibold mr-2">{String.fromCharCode(65 + optIdx).concat('.')}</span>
                              {option}
                              {showResult && isCorrect && <Check className="w-5 h-5 text-green-400 ml-auto inline" />}
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
                          
                          let buttonClass = 'quiz-option flex-1 justify-center';
                          if (showResult) {
                            if (isCorrect) {
                              buttonClass += ' correct';
                            } else if (isSelected) {
                              buttonClass += ' incorrect';
                            }
                          } else if (isSelected) {
                            buttonClass += ' selected';
                          }

                          return (
                            <button
                              key={String(option)}
                              onClick={() => !quizResults[quiz.id] && handleQuizAnswer(quiz.id, option)}
                              disabled={quizResults[quiz.id] !== undefined}
                              className={buttonClass}
                            >
                              {option ? '✓ 正确' : '✗ 错误'}
                              {showResult && isCorrect && <Check className="w-5 h-5 text-green-400 ml-auto" />}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    <div className="mt-4 ml-11">
                      {quizResults[quiz.id] === undefined ? (
                        <button
                          onClick={() => checkQuizAnswer(quiz)}
                          disabled={quizAnswers[quiz.id] === undefined}
                          className="btn-cyber text-sm"
                        >
                          提交答案
                        </button>
                      ) : (
                        <div className={`p-4 rounded-lg ${quizResults[quiz.id] ? 'bg-green-500/20 border border-green-500/30' : 'bg-red-500/20 border border-red-500/30'}`}>
                          <div className="flex items-center gap-2 font-semibold mb-2">
                            {quizResults[quiz.id] ? (
                              <>
                                <Check className="w-5 h-5 text-green-400" />
                                <span className="text-green-400">回答正确！</span>
                              </>
                            ) : (
                              <>
                                <span className="text-red-400">回答错误，正确答案是：</span>
                                <span className="text-green-400 font-bold">
                                  {quiz.type === 'true_false' ? (quiz.correctAnswer ? '正确' : '错误') : quiz.correctAnswer}
                                </span>
                              </>
                            )}
                          </div>
                          <div className="text-gray-300">
                            <span className="text-blue-400 font-medium">解析：</span>
                            {quiz.explanation}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 章节导航 */}
            <div className="glass rounded-xl p-6 flex items-center justify-between">
              <button
                onClick={() => activeChapter > 0 && setActiveChapter(activeChapter - 1)}
                disabled={activeChapter === 0}
                className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                ← 上一章
              </button>
              
              {activeChapter === course.chapters.length - 1 ? (
                <Link to="/" className="btn-cyber">
                  完成学习，返回首页
                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleCompleteChapter();
                    setActiveChapter(activeChapter + 1);
                  }}
                  className="btn-cyber"
                >
                  下一章 →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
