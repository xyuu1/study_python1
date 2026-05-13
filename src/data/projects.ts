export interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  dataset: string;
  objectives: string[];
  estimatedHours: number;
  sections: ProjectSection[];
  starterCode: string;
  solutionCode: string;
  learningPoints: string[];
  quizzes?: QuizItem[];
}

export interface ProjectSection {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  quizzes?: QuizItem[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  topics: string[];
  duration: string;
  chapters: CourseChapter[];
}

export interface CourseChapter {
  id: number;
  title: string;
  content: string;
  examples: string[];
  exercises: Exercise[];
  quizzes?: QuizItem[];
}

export interface Exercise {
  id: number;
  question: string;
  solution: string;
}

export interface QuizItem {
  id: number;
  type: 'multiple_choice' | 'true_false';
  question: string;
  options?: string[];
  correctAnswer: string | boolean;
  explanation?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: '销售数据分析',
    description: '通过真实的电商销售数据，学习使用 Pandas 进行数据清洗、处理和可视化分析，识别销售趋势和热门商品。',
    skills: ['Pandas', 'Matplotlib', '数据清洗', '趋势分析'],
    difficulty: 'beginner',
    category: '数据处理',
    dataset: '电商销售记录（订单、商品、用户）',
    objectives: ['数据清洗与预处理', '销售趋势可视化', '商品销量排名', '客户购买分析'],
    estimatedHours: 8,
    sections: [
      {
        id: 'intro',
        title: '项目介绍',
        content: '在这个项目中，你将分析一家电商公司的销售数据。数据集包含订单信息、商品信息和用户信息。通过这个项目，你将掌握 Pandas 的基本操作和数据可视化技能。'
      },
      {
        id: 'data-loading',
        title: '数据加载与探索',
        content: '首先，我们需要导入必要的库并加载数据。',
        codeExample: `import pandas as pd
import matplotlib.pyplot as plt

# 读取数据
sales_data = pd.read_csv('sales.csv')
products = pd.read_csv('products.csv')
users = pd.read_csv('users.csv')

# 查看数据基本信息
print("销售数据:")
print(sales_data.head())
print("\\n数据形状:", sales_data.shape)
print("\\n数据类型:")
print(sales_data.dtypes)`,
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: '以下哪个方法用于查看 DataFrame 的前几行？',
            options: ['head()', 'tail()', 'first()', 'top()'],
            correctAnswer: 'head()',
            explanation: 'head() 方法默认显示 DataFrame 的前 5 行数据。'
          },
          {
            id: 2,
            type: 'true_false',
            question: 'DataFrame 的 shape 属性返回 (行数, 列数)。',
            correctAnswer: true,
            explanation: 'shape 属性返回一个元组，第一个元素是行数，第二个是列数。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '以下哪个属性用于查看每列的数据类型？',
            options: ['types', 'dtypes', 'datatypes', 'type_info'],
            correctAnswer: 'dtypes',
            explanation: 'dtypes 属性返回每列的数据类型。'
          }
        ]
      },
      {
        id: 'data-cleaning',
        title: '数据清洗',
        content: '数据清洗是数据分析的第一步，让我们处理缺失值和异常值。',
        codeExample: `# 检查缺失值
print(sales_data.isnull().sum())

# 删除缺失值
sales_data = sales_data.dropna()

# 检查重复值
print("重复行数:", sales_data.duplicated().sum())
sales_data = sales_data.drop_duplicates()

# 转换日期格式
sales_data['order_date'] = pd.to_datetime(sales_data['order_date'])`,
        quizzes: [
          {
            id: 1,
            type: 'true_false',
            question: 'isnull() 方法返回一个布尔值 DataFrame。',
            correctAnswer: true,
            explanation: 'isnull() 对每个元素检查是否为缺失值，返回布尔值。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: 'sum() 结合 isnull() 用于什么？',
            options: ['计算总和', '统计每列缺失值数量', '删除缺失值', '填充缺失值'],
            correctAnswer: '统计每列缺失值数量',
            explanation: 'isnull().sum() 可以统计每列的缺失值数量。'
          },
          {
            id: 3,
            type: 'true_false',
            question: 'drop_duplicates() 会删除所有重复的行。',
            correctAnswer: true,
            explanation: 'drop_duplicates() 方法用于删除 DataFrame 中的重复行。'
          }
        ]
      },
      {
        id: 'analysis',
        title: '销售趋势分析',
        content: '现在让我们分析销售趋势，看看有什么发现。',
        codeExample: `# 按月统计销售额
sales_data['month'] = sales_data['order_date'].dt.to_period('M')
monthly_sales = sales_data.groupby('month')['total_amount'].sum()

# 可视化
plt.figure(figsize=(12, 6))
monthly_sales.plot(kind='line', marker='o')
plt.title('月度销售趋势')
plt.xlabel('月份')
plt.ylabel('销售额')
plt.grid(True)
plt.show()

# 热销商品排行
product_sales = sales_data.groupby('product_id')['quantity'].sum().sort_values(ascending=False)
print("热销商品 TOP 10:")
print(product_sales.head(10))`,
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: 'groupby() 方法用于什么？',
            options: ['删除数据', '分组聚合', '排序数据', '合并数据'],
            correctAnswer: '分组聚合',
            explanation: 'groupby() 用于按指定列分组，然后可以进行聚合操作。'
          },
          {
            id: 2,
            type: 'true_false',
            question: 'sort_values(ascending=False) 会按降序排序。',
            correctAnswer: true,
            explanation: 'ascending=False 表示降序排列。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: 'plt.figure(figsize=(12, 6)) 用于什么？',
            options: ['创建数据', '设置图表大小', '保存图表', '显示图表'],
            correctAnswer: '设置图表大小',
            explanation: 'figsize 参数用于设置图表的宽度和高度（单位：英寸）。'
          }
        ]
      }
    ],
    starterCode: `import pandas as pd
import matplotlib.pyplot as plt

# 项目开始代码
# 请在此编写你的分析代码
`,
    solutionCode: `import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# 完整解决方案
def analyze_sales_data():
    # 读取数据
    sales = pd.read_csv('sales.csv')
    
    # 数据清洗
    sales = sales.dropna()
    sales = sales.drop_duplicates()
    
    # 转换日期
    sales['order_date'] = pd.to_datetime(sales['order_date'])
    sales['month'] = sales['order_date'].dt.to_period('M')
    
    # 分析结果
    return sales
`,
    learningPoints: [
      '掌握 Pandas 数据加载和基本操作',
      '学习数据清洗的基本方法',
      '了解如何进行时间序列分析',
      '掌握基本的数据可视化技能'
    ]
  },
  {
    id: 2,
    title: '客户分群分析',
    description: '使用 K-Means 聚类算法对客户进行分群，识别不同客户群体特征，为精准营销提供数据支持。',
    skills: ['K-Means', '客户画像', '特征工程', 'Seaborn'],
    difficulty: 'intermediate',
    category: '机器学习',
    dataset: '客户购买行为数据',
    objectives: ['客户特征提取', 'K-Means聚类实现', '客户群体分析', '可视化展示'],
    estimatedHours: 12,
    sections: [
      {
        id: 'intro',
        title: '客户分群简介',
        content: '客户分群是数据分析中的重要应用。通过聚类算法，我们可以将客户分成不同的群体，每个群体有相似的特征。'
      },
      {
        id: 'feature-engineering',
        title: '特征工程',
        content: '首先，我们需要从原始数据中提取有用的特征。',
        codeExample: `import pandas as pd
import numpy as np

# 计算 RFM 特征
customer_data = pd.DataFrame()

# Recency: 最近一次购买距今天数
customer_data['recency'] = (pd.to_datetime('today') - pd.to_datetime(customer_df['last_purchase_date'])).dt.days

# Frequency: 购买次数
customer_data['frequency'] = customer_df['purchase_count']

# Monetary: 总消费金额
customer_data['monetary'] = customer_df['total_spent']`
      },
      {
        id: 'clustering',
        title: 'K-Means 聚类',
        content: '使用 sklearn 的 K-Means 进行客户聚类。',
        codeExample: `from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# 数据标准化
scaler = StandardScaler()
scaled_data = scaler.fit_transform(customer_data[['recency', 'frequency', 'monetary']])

# 确定最佳聚类数
inertia = []
for k in range(1, 11):
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(scaled_data)
    inertia.append(kmeans.inertia_)

# 可视化肘部法则
plt.plot(range(1, 11), inertia, marker='o')
plt.xlabel('聚类数')
plt.ylabel('惯性值')
plt.title('肘部法则')
plt.show()`
      }
    ],
    starterCode: `import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 客户分群项目开始代码
`,
    solutionCode: `import pandas as pd
import numpy as np
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# 完整解决方案
def customer_segmentation():
    pass
`,
    learningPoints: [
      '理解 RFM 模型',
      '掌握特征工程技巧',
      '学习 K-Means 聚类算法',
      '了解如何分析和解释聚类结果'
    ]
  },
  {
    id: 3,
    title: '财务报表分析',
    description: '分析企业财务报表数据，计算关键财务指标，评估企业经营状况和财务健康程度。',
    skills: ['Pandas', '财务指标', '数据可视化', '报表解读'],
    difficulty: 'beginner',
    category: '商业分析',
    dataset: '企业资产负债表、利润表、现金流量表',
    objectives: ['财务数据清洗', '关键指标计算', '趋势对比分析', '风险评估'],
    estimatedHours: 10,
    sections: [
      {
        id: 'intro',
        title: '财务分析基础',
        content: '财务报表分析是商务分析的核心技能，让我们学习如何从财务数据中提取有价值的信息。'
      },
      {
        id: 'ratios',
        title: '财务指标计算',
        content: '计算流动比率、速动比率、资产负债率、毛利率、净利率等关键指标。',
        codeExample: `# 计算流动比率
current_ratio = current_assets / current_liabilities

# 计算资产负债率
debt_ratio = total_liabilities / total_assets

# 计算毛利率
gross_margin = (revenue - cost_of_goods_sold) / revenue`
      }
    ],
    starterCode: `import pandas as pd

# 财务报表分析项目开始代码
`,
    solutionCode: `import pandas as pd

# 完整解决方案
`,
    learningPoints: [
      '掌握财务报表结构',
      '学习关键财务指标计算',
      '了解企业经营状况评估方法',
      '培养财务分析思维'
    ]
  },
  {
    id: 4,
    title: '市场调研数据分析',
    description: '处理和分析市场调研问卷数据，进行描述性统计、相关性分析和可视化展示。',
    skills: ['问卷调查', '描述性统计', '相关性分析', '数据可视化'],
    difficulty: 'beginner',
    category: '数据处理',
    dataset: '市场调研问卷数据',
    objectives: ['问卷数据清洗', '描述性统计分析', '可视化报告', '洞察发现'],
    estimatedHours: 8,
    sections: [
      {
        id: 'intro',
        title: '市场调研数据处理',
        content: '市场调研数据是商业决策的重要依据，让我们学习如何处理和分析这类数据。'
      }
    ],
    starterCode: `import pandas as pd
import matplotlib.pyplot as plt

# 市场调研分析项目开始代码
`,
    solutionCode: `import pandas as pd

# 完整解决方案
`,
    learningPoints: [
      '掌握问卷数据清洗技巧',
      '学习描述性统计方法',
      '了解调研数据可视化',
      '培养数据洞察能力'
    ]
  },
  {
    id: 5,
    title: '供应链库存优化',
    description: '分析库存数据，计算安全库存和经济订货批量，优化供应链管理。',
    skills: ['库存分析', '时间序列', '优化算法', '供应链管理'],
    difficulty: 'intermediate',
    category: '商业分析',
    dataset: '库存历史数据、销售预测数据',
    objectives: ['库存数据清洗', '需求预测', '安全库存计算', '优化建议'],
    estimatedHours: 14,
    sections: [
      {
        id: 'intro',
        title: '供应链管理基础',
        content: '库存优化是供应链管理的核心，让我们学习如何科学管理库存。'
      }
    ],
    starterCode: `import pandas as pd
import numpy as np

# 库存优化项目开始代码
`,
    solutionCode: `import pandas as pd

# 完整解决方案
`,
    learningPoints: [
      '理解供应链管理概念',
      '学习库存分析方法',
      '掌握经济订货批量计算',
      '培养优化思维'
    ]
  },
  {
    id: 6,
    title: '产品销量预测',
    description: '使用时间序列分析和机器学习方法预测产品未来销量，为生产计划提供依据。',
    skills: ['时间序列', '预测模型', 'ARIMA', '特征工程'],
    difficulty: 'advanced',
    category: '预测分析',
    dataset: '产品历史销售数据',
    objectives: ['时间序列分析', '特征工程', '模型选择与训练', '预测结果评估'],
    estimatedHours: 16,
    sections: [
      {
        id: 'intro',
        title: '销量预测简介',
        content: '销量预测是企业运营的关键环节，准确的预测能帮助企业优化资源配置。'
      }
    ],
    starterCode: `import pandas as pd
from statsmodels.tsa.arima.model import ARIMA

# 销量预测项目开始代码
`,
    solutionCode: `import pandas as pd

# 完整解决方案
`,
    learningPoints: [
      '掌握时间序列分析方法',
      '学习 ARIMA 模型应用',
      '了解预测模型评估',
      '培养预测思维'
    ]
  },
  {
    id: 7,
    title: '用户行为分析',
    description: '分析用户在网站或APP上的行为数据，了解用户偏好，优化产品设计。',
    skills: ['行为分析', '用户画像', 'A/B测试', '转化率优化'],
    difficulty: 'intermediate',
    category: '数据处理',
    dataset: '用户行为日志数据',
    objectives: ['用户行为数据清洗', '漏斗分析', '用户分群', '转化优化'],
    estimatedHours: 12,
    sections: [
      {
        id: 'intro',
        title: '用户行为分析基础',
        content: '用户行为数据是了解用户需求的关键，让我们学习如何从中提取洞察。'
      }
    ],
    starterCode: `import pandas as pd

# 用户行为分析项目开始代码
`,
    solutionCode: `import pandas as pd

# 完整解决方案
`,
    learningPoints: [
      '掌握用户行为数据处理',
      '学习漏斗分析方法',
      '了解用户分群策略',
      '培养产品思维'
    ]
  },
  {
    id: 8,
    title: '信用风险评估',
    description: '构建信用评分模型，评估客户信用风险，为信贷决策提供支持。',
    skills: ['信用评分', '逻辑回归', '特征工程', '模型评估'],
    difficulty: 'advanced',
    category: '机器学习',
    dataset: '客户信用历史数据',
    objectives: ['信用数据预处理', '特征工程', '模型构建', '风险评估'],
    estimatedHours: 18,
    sections: [
      {
        id: 'intro',
        title: '信用风险评估简介',
        content: '信用风险评估是金融领域的重要应用，让我们学习如何构建信用评分模型。'
      }
    ],
    starterCode: `import pandas as pd
from sklearn.linear_model import LogisticRegression

# 信用风险评估项目开始代码
`,
    solutionCode: `import pandas as pd

# 完整解决方案
`,
    learningPoints: [
      '理解信用风险概念',
      '学习逻辑回归应用',
      '掌握模型评估方法',
      '培养风控思维'
    ]
  },
  {
    id: 9,
    title: '电商推荐系统',
    description: '构建基于协同过滤的商品推荐系统，提升用户购物体验和转化率。',
    skills: ['推荐系统', '协同过滤', '矩阵分解', '相似度计算'],
    difficulty: 'advanced',
    category: '机器学习',
    dataset: '用户购买记录、评分数据',
    objectives: ['推荐算法实现', '协同过滤应用', '结果评估', '系统优化'],
    estimatedHours: 20,
    sections: [
      {
        id: 'intro',
        title: '推荐系统基础',
        content: '推荐系统是电商的核心功能，让我们学习如何构建一个简单的推荐系统。'
      }
    ],
    starterCode: `import pandas as pd
import numpy as np

# 推荐系统项目开始代码
`,
    solutionCode: `import pandas as pd

# 完整解决方案
`,
    learningPoints: [
      '理解推荐系统原理',
      '学习协同过滤算法',
      '掌握相似度计算',
      '培养系统思维'
    ]
  },
  {
    id: 10,
    title: '综合商业分析项目',
    description: '整合前面所学知识，完成一个完整的商业分析项目，从数据获取到报告撰写。',
    skills: ['综合应用', '报告撰写', '数据可视化', '商业洞察'],
    difficulty: 'advanced',
    category: '综合项目',
    dataset: '综合商业数据集',
    objectives: ['项目规划', '数据处理', '深度分析', '报告呈现'],
    estimatedHours: 24,
    sections: [
      {
        id: 'intro',
        title: '综合项目简介',
        content: '这是一个综合项目，你将运用前面所学的所有知识，完成一个完整的商业分析任务。'
      }
    ],
    starterCode: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# 综合分析项目开始代码
`,
    solutionCode: `import pandas as pd

# 完整解决方案
`,
    learningPoints: [
      '整合所有数据分析技能',
      '学习商业报告撰写',
      '培养项目管理能力',
      '提升综合分析能力'
    ]
  }
];

export const courses: Course[] = [
  {
    id: 1,
    title: 'Python 基础入门',
    description: '从零基础开始学习 Python 编程语言，掌握变量、数据类型、循环、函数等基础概念。',
    topics: ['Python语法', '数据结构', '函数编程', '文件操作'],
    duration: '8小时',
    chapters: [
      {
        id: 1,
        title: 'Python 基础语法',
        content: '学习 Python 的基本语法，包括变量、数据类型、运算符等。',
        examples: [
          '# 变量定义\nname = "小明"\nage = 20\nprint(f"我叫{name}，今年{age}岁")',
          '# 基本数据类型\nnum = 10\npi = 3.14\nis_student = True\nfruits = ["苹果", "香蕉", "橙子"]'
        ],
        exercises: [
          {
            id: 1,
            question: '编写一个函数，计算两个数的和',
            solution: 'def add(a, b): return a + b'
          },
          {
            id: 2,
            question: '创建一个列表，包含1-10的数字，然后计算它们的和',
            solution: 'numbers = list(range(1, 11))\nsum(numbers)'
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: 'Python 中用于定义变量的关键字是？',
            options: ['var', 'let', '直接命名', 'def'],
            correctAnswer: '直接命名',
            explanation: 'Python 不需要关键字声明变量，直接赋值即可创建变量。'
          },
          {
            id: 2,
            type: 'true_false',
            question: 'Python 是一种强类型语言。',
            correctAnswer: true,
            explanation: 'Python 是强类型语言，不允许隐式类型转换。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '以下哪个是 Python 的注释符号？',
            options: ['//', '/* */', '#', '--'],
            correctAnswer: '#',
            explanation: 'Python 使用 # 作为单行注释符号。'
          },
          {
            id: 4,
            type: 'true_false',
            question: 'Python 中变量名可以以数字开头。',
            correctAnswer: false,
            explanation: 'Python 变量名不能以数字开头，必须以字母或下划线开头。'
          }
        ]
      },
      {
        id: 2,
        title: '数据结构',
        content: '学习 Python 中常用的数据结构：列表、字典、元组和集合。',
        examples: [
          '# 列表操作\nnumbers = [1, 2, 3, 4, 5]\nnumbers.append(6)\nprint(numbers[0])  # 索引访问',
          '# 字典操作\nstudent = {"name": "小红", "age": 18, "score": 95}\nprint(student["name"])'
        ],
        exercises: [
          {
            id: 1,
            question: '创建一个字典，存储学生姓名和成绩，然后找出最高分的学生',
            solution: 'students = {"小明": 85, "小红": 92, "小刚": 78}\nmax(students.items(), key=lambda x: x[1])'
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: 'Python 中用于创建不可变序列的数据结构是？',
            options: ['列表', '字典', '元组', '集合'],
            correctAnswer: '元组',
            explanation: '元组（tuple）是不可变序列，创建后不能修改其元素。'
          },
          {
            id: 2,
            type: 'true_false',
            question: '字典的键必须是不可变类型。',
            correctAnswer: true,
            explanation: '字典的键必须是不可变的，如字符串、数字或元组。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '以下哪个方法用于向列表末尾添加元素？',
            options: ['append()', 'extend()', 'insert()', 'add()'],
            correctAnswer: 'append()',
            explanation: 'append() 方法用于向列表末尾添加单个元素。'
          },
          {
            id: 4,
            type: 'true_false',
            question: '集合可以包含重复元素。',
            correctAnswer: false,
            explanation: '集合中的元素是唯一的，不能有重复值。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: '访问字典中不存在的键会抛出什么异常？',
            options: ['KeyError', 'ValueError', 'IndexError', 'TypeError'],
            correctAnswer: 'KeyError',
            explanation: '访问字典中不存在的键会抛出 KeyError 异常。'
          }
        ]
      },
      {
        id: 3,
        title: '函数与模块',
        content: '学习如何定义函数、使用参数、返回值，以及如何导入和使用模块。',
        examples: [
          '# 定义函数\ndef calculate_area(radius):\n    return 3.14159 * radius ** 2',
          '# 导入模块\nimport math\nprint(math.sqrt(16))'
        ],
        exercises: [
          {
            id: 1,
            question: '编写一个函数，判断一个数是否是素数',
            solution: 'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, int(n**0.5) + 1):\n        if n % i == 0:\n            return False\n    return True'
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: 'Python 中用于定义函数的关键字是？',
            options: ['function', 'def', 'func', 'define'],
            correctAnswer: 'def',
            explanation: 'Python 使用 def 关键字来定义函数。'
          },
          {
            id: 2,
            type: 'true_false',
            question: 'Python 函数可以返回多个值。',
            correctAnswer: true,
            explanation: 'Python 函数可以通过元组返回多个值。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '以下哪个是正确的模块导入方式？',
            options: ['import math', 'include math', 'using math', 'load math'],
            correctAnswer: 'import math',
            explanation: 'Python 使用 import 语句导入模块。'
          },
          {
            id: 4,
            type: 'true_false',
            question: '函数参数必须有默认值。',
            correctAnswer: false,
            explanation: '函数参数可以有默认值，也可以没有，不是必须的。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: 'lambda 函数是什么类型的函数？',
            options: ['命名函数', '匿名函数', '递归函数', '异步函数'],
            correctAnswer: '匿名函数',
            explanation: 'lambda 函数是匿名函数，用于创建简单的单行函数。'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Pandas 数据处理',
    description: '深入学习 Pandas 库的核心功能，掌握数据处理、清洗、转换等技能。',
    topics: ['DataFrame操作', '数据清洗', '数据聚合', '合并连接'],
    duration: '10小时',
    chapters: [
      {
        id: 1,
        title: 'DataFrame 基础',
        content: '学习 Pandas 的核心数据结构 DataFrame 和 Series 的基本操作。',
        examples: [
          'import pandas as pd\n# 创建 DataFrame\ndata = {"name": ["小明", "小红"], "age": [20, 18]}\ndf = pd.DataFrame(data)',
          '# 选择列\ndf["name"]\ndf[["name", "age"]]',
          '# 筛选数据\ndf[df["age"] > 18]'
        ],
        exercises: [
          {
            id: 1,
            question: '创建一个 DataFrame，包含产品名、价格和销量，然后计算总销售额',
            solution: 'df = pd.DataFrame({"product": ["A", "B"], "price": [10, 20], "sales": [5, 3]})\ndf["revenue"] = df["price"] * df["sales"]'
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: 'Pandas 中用于创建二维表格的数据结构是？',
            options: ['Series', 'DataFrame', 'Array', 'Matrix'],
            correctAnswer: 'DataFrame',
            explanation: 'DataFrame 是 Pandas 的核心二维表格数据结构。'
          },
          {
            id: 2,
            type: 'true_false',
            question: 'DataFrame 的列名必须是字符串类型。',
            correctAnswer: false,
            explanation: 'DataFrame 的列名可以是任意可哈希类型，不一定是字符串。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '以下哪个方法用于读取 CSV 文件？',
            options: ['read_excel()', 'read_csv()', 'load_csv()', 'open_csv()'],
            correctAnswer: 'read_csv()',
            explanation: 'pd.read_csv() 是 Pandas 用于读取 CSV 文件的标准方法。'
          },
          {
            id: 4,
            type: 'true_false',
            question: '使用 df["列名"] 可以选择 DataFrame 的列。',
            correctAnswer: true,
            explanation: '使用方括号和列名是选择 DataFrame 列的常用方法。'
          }
        ]
      },
      {
        id: 2,
        title: '数据清洗与预处理',
        content: '学习如何处理缺失值、重复数据、异常值，以及数据类型转换。',
        examples: [
          '# 处理缺失值\ndf = df.dropna()  # 删除缺失值\ndf = df.fillna(0)  # 填充缺失值',
          '# 数据类型转换\ndf["date"] = pd.to_datetime(df["date"])'
        ],
        exercises: [
          {
            id: 1,
            question: '读取一个 CSV 文件，处理其中的缺失值，然后转换日期列',
            solution: 'df = pd.read_csv("data.csv")\ndf = df.fillna(df.mean())\ndf["date"] = pd.to_datetime(df["date"])'
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: '以下哪个方法用于删除包含缺失值的行？',
            options: ['dropna()', 'fillna()', 'delete()', 'remove()'],
            correctAnswer: 'dropna()',
            explanation: 'dropna() 方法用于删除包含缺失值的行或列。'
          },
          {
            id: 2,
            type: 'true_false',
            question: 'fillna(0) 会用 0 填充所有缺失值。',
            correctAnswer: true,
            explanation: 'fillna() 方法可以用指定值填充缺失值。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: 'pd.to_datetime() 用于什么？',
            options: ['转换为字符串', '转换为日期时间', '转换为数字', '转换为布尔值'],
            correctAnswer: '转换为日期时间',
            explanation: 'pd.to_datetime() 用于将数据转换为日期时间类型。'
          },
          {
            id: 4,
            type: 'true_false',
            question: 'duplicated() 方法用于查找重复行。',
            correctAnswer: true,
            explanation: 'duplicated() 方法返回布尔值，表示哪些行是重复的。'
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: '数据可视化',
    description: '学习使用 Matplotlib 和 Seaborn 创建专业的数据分析图表。',
    topics: ['Matplotlib', 'Seaborn', '图表类型', '可视化最佳实践'],
    duration: '8小时',
    chapters: [
      {
        id: 1,
        title: 'Matplotlib 基础',
        content: '学习 Matplotlib 的基本用法，创建折线图、柱状图、散点图等。',
        examples: [
          'import matplotlib.pyplot as plt\n# 折线图\nplt.plot([1, 2, 3, 4])\nplt.show()',
          '# 柱状图\nplt.bar(["A", "B", "C"], [10, 20, 15])\nplt.show()'
        ],
        exercises: [
          {
            id: 1,
            question: '创建一个包含数据的 DataFrame，然后绘制其柱状图',
            solution: 'import pandas as pd\nimport matplotlib.pyplot as plt\ndf = pd.DataFrame({"x": ["A", "B", "C"], "y": [10, 20, 15]})\nplt.bar(df["x"], df["y"])\nplt.show()'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: '统计分析基础',
    description: '学习统计学基础概念，掌握描述性统计、假设检验、相关性分析等方法。',
    topics: ['描述性统计', '概率分布', '假设检验', '相关性分析'],
    duration: '12小时',
    chapters: [
      {
        id: 1,
        title: '描述性统计',
        content: '学习如何计算均值、中位数、标准差、方差等统计指标。',
        examples: [
          'import numpy as np\n# 计算统计指标\ndata = [1, 2, 3, 4, 5]\nmean = np.mean(data)\nstd = np.std(data)',
          'import pandas as pd\ndf = pd.DataFrame(data)\nprint(df.describe())'
        ],
        exercises: [
          {
            id: 1,
            question: '计算一组数据的均值、中位数、标准差和方差',
            solution: 'import numpy as np\ndata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nprint("均值:", np.mean(data))\nprint("中位数:", np.median(data))\nprint("标准差:", np.std(data))\nprint("方差:", np.var(data))'
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: '机器学习入门',
    description: '从零开始学习机器学习，掌握 Scikit-learn 库的使用和常用算法。',
    topics: ['Scikit-learn', '监督学习', '模型评估', '特征工程'],
    duration: '16小时',
    chapters: [
      {
        id: 1,
        title: '机器学习基础',
        content: '了解机器学习的基本概念、流程和常用算法。',
        examples: [
          'from sklearn.linear_model import LinearRegression\nfrom sklearn.model_selection import train_test_split\n# 准备数据\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n# 训练模型\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)',
          '# 预测\npredictions = model.predict(X_test)'
        ],
        exercises: [
          {
            id: 1,
            question: '使用线性回归模型预测房价',
            solution: 'from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)'
          }
        ]
      }
    ]
  }
];

export const learningStats = {
  totalUsers: 12580,
  completedProjects: 45230,
  certificates: 8920,
  avgCompletionRate: 87
};
