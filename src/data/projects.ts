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
  explanation?: string;
  commonErrors?: {
    error: string;
    description: string;
    fix: string;
  }[];
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
            type: 'multiple_choice',
            question: '以下哪个属性用于查看每列的数据类型？',
            options: ['types', 'dtypes', 'datatypes', 'type_info'],
            correctAnswer: 'dtypes',
            explanation: 'dtypes 属性返回每列的数据类型。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '如何查看 DataFrame 的基本信息？',
            options: ['info()', 'summary()', 'details()', 'overview()'],
            correctAnswer: 'info()',
            explanation: 'info() 方法显示列名、非空值数量、数据类型等信息。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: '以下哪个方法用于读取 Excel 文件？',
            options: ['read_csv()', 'read_excel()', 'read_xlsx()', 'load_excel()'],
            correctAnswer: 'read_excel()',
            explanation: 'pd.read_excel() 用于读取 Excel 文件。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: '如何查看 DataFrame 的行数？',
            options: ['len(df)', 'df.count()', 'df.size', 'df.rows'],
            correctAnswer: 'len(df)',
            explanation: 'len(df) 返回 DataFrame 的行数。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '以下哪个属性用于查看索引？',
            options: ['index', 'keys', 'labels', 'tags'],
            correctAnswer: 'index',
            explanation: 'df.index 属性返回 DataFrame 的索引。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: '如何随机采样数据？',
            options: ['sample()', 'random()', 'select()', 'choice()'],
            correctAnswer: 'sample()',
            explanation: 'sample() 方法可以随机抽取数据样本。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: '以下哪个方法用于查看唯一值？',
            options: ['unique()', 'distinct()', 'different()', 'single()'],
            correctAnswer: 'unique()',
            explanation: 'unique() 方法返回列中的唯一值数组。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: '如何统计每个值的出现次数？',
            options: ['value_counts()', 'count_values()', 'frequency()', 'occurrences()'],
            correctAnswer: 'value_counts()',
            explanation: 'value_counts() 统计每个值的出现频率。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: '以下哪个方法用于查看数据相关性？',
            options: ['corr()', 'correlate()', 'relation()', 'connect()'],
            correctAnswer: 'corr()',
            explanation: 'corr() 方法计算列之间的相关系数。'
          },
          {
            id: 11,
            type: 'true_false',
            question: 'DataFrame 的 shape 属性返回 (行数, 列数)。',
            correctAnswer: true,
            explanation: 'shape 属性返回一个元组，第一个元素是行数，第二个是列数。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'read_csv() 只能读取 .csv 格式的文件。',
            correctAnswer: false,
            explanation: 'read_csv() 可以读取各种文本文件，只要分隔符正确。'
          },
          {
            id: 13,
            type: 'true_false',
            question: 'df.tail() 默认显示最后 5 行。',
            correctAnswer: true,
            explanation: 'tail() 方法默认显示 DataFrame 的最后 5 行。'
          },
          {
            id: 14,
            type: 'true_false',
            question: 'df.describe() 只适用于数值型列。',
            correctAnswer: true,
            explanation: 'describe() 默认只统计数值型列，可以用 include="all" 包含所有类型。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'Pandas 可以从互联网 URL 直接读取数据。',
            correctAnswer: true,
            explanation: 'read_csv() 等方法可以直接接受 URL 作为文件路径。'
          },
          {
            id: 16,
            type: 'true_false',
            question: 'df.columns 返回的是列表类型。',
            correctAnswer: false,
            explanation: 'df.columns 返回的是 Index 类型，可以转换为列表。'
          },
          {
            id: 17,
            type: 'true_false',
            question: 'df.sample() 可以指定采样数量。',
            correctAnswer: true,
            explanation: '可以用 n 参数指定采样数量，frac 参数指定比例。'
          },
          {
            id: 18,
            type: 'true_false',
            question: 'df.nunique() 统计每列的唯一值数量。',
            correctAnswer: true,
            explanation: 'nunique() 方法统计每列的唯一值数量（不包括 NaN）。'
          },
          {
            id: 19,
            type: 'true_false',
            question: 'Pandas 支持从 JSON 格式读取数据。',
            correctAnswer: true,
            explanation: 'pd.read_json() 可以读取 JSON 格式的数据。'
          },
          {
            id: 20,
            type: 'true_false',
            question: 'df.memory_usage() 查看内存使用情况。',
            correctAnswer: true,
            explanation: 'memory_usage() 方法显示每列占用的内存大小。'
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
            type: 'multiple_choice',
            question: 'sum() 结合 isnull() 用于什么？',
            options: ['计算总和', '统计每列缺失值数量', '删除缺失值', '填充缺失值'],
            correctAnswer: '统计每列缺失值数量',
            explanation: 'isnull().sum() 可以统计每列的缺失值数量。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: '以下哪个方法用于删除缺失值？',
            options: ['dropna()', 'fillna()', 'remove()', 'delete()'],
            correctAnswer: 'dropna()',
            explanation: 'dropna() 方法用于删除包含缺失值的行或列。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '如何用中位数填充缺失值？',
            options: ['df.fillna(df.median())', 'df.median().fillna()', 'fillna(df.median)', 'df.fillna(median)'],
            correctAnswer: 'df.fillna(df.median())',
            explanation: '可以用 fillna() 方法结合 median() 填充缺失值。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: '以下哪个方法用于检查重复？',
            options: ['duplicated()', 'duplicates()', 'check_duplicates()', 'find_duplicates()'],
            correctAnswer: 'duplicated()',
            explanation: 'duplicated() 方法返回布尔值，表示哪些行是重复的。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: 'dropna() 的 thresh 参数表示什么？',
            options: ['阈值，需要的非缺失值数量', '阈值，允许的缺失值数量', '删除的行数', '保留的行数'],
            correctAnswer: '阈值，需要的非缺失值数量',
            explanation: 'thresh 参数指定行需要至少有多少个非缺失值才会被保留。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '如何用前一个非缺失值填充？',
            options: ['fillna(method="ffill")', 'fillna(method="bfill")', 'fillna(method="forward")', 'fillna(method="prev")'],
            correctAnswer: 'fillna(method="ffill")',
            explanation: 'ffill (forward fill) 用前一个非缺失值填充。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: '以下哪个方法用于检测异常值？',
            options: ['describe()', 'info()', 'head()', 'tail()'],
            correctAnswer: 'describe()',
            explanation: 'describe() 显示最小值和最大值，可以帮助发现异常值。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: '如何删除指定列的缺失值？',
            options: ['df.dropna(subset=["列名"])', 'df.dropna(columns=["列名"])', 'df.dropna(axis="列名")', 'df.dropna(col="列名")'],
            correctAnswer: 'df.dropna(subset=["列名"])',
            explanation: 'subset 参数指定检查缺失值的列。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: 'interpolate() 方法用于什么？',
            options: ['插值填充缺失值', '删除缺失值', '查找缺失值', '标记缺失值'],
            correctAnswer: '插值填充缺失值',
            explanation: 'interpolate() 使用插值方法填充缺失值。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: '如何用众数填充缺失值？',
            options: ['df.fillna(df.mode().iloc[0])', 'df.mode().fillna()', 'fillna(df.mode)', 'df.fillna(mode)'],
            correctAnswer: 'df.fillna(df.mode().iloc[0])',
            explanation: 'mode() 返回众数，可能有多个，取第一个。'
          },
          {
            id: 11,
            type: 'true_false',
            question: 'isnull() 方法返回一个布尔值 DataFrame。',
            correctAnswer: true,
            explanation: 'isnull() 对每个元素检查是否为缺失值，返回布尔值。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'drop_duplicates() 会删除所有重复的行。',
            correctAnswer: true,
            explanation: 'drop_duplicates() 方法用于删除 DataFrame 中的重复行。'
          },
          {
            id: 13,
            type: 'true_false',
            question: 'fillna() 可以按列使用不同的填充值。',
            correctAnswer: true,
            explanation: '可以传入字典为不同列指定不同的填充值。'
          },
          {
            id: 14,
            type: 'true_false',
            question: 'dropna() 默认删除包含缺失值的列。',
            correctAnswer: false,
            explanation: '默认 axis=0 删除行，需要指定 axis=1 删除列。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'notna() 与 isnull() 结果相反。',
            correctAnswer: true,
            explanation: 'notna() 与 isnull() 是互逆的操作，返回相反的布尔值。'
          },
          {
            id: 16,
            type: 'true_false',
            question: 'drop_duplicates() 可以指定检查的列。',
            correctAnswer: true,
            explanation: '可以用 subset 参数指定只检查某些列的重复。'
          },
          {
            id: 17,
            type: 'true_false',
            question: 'Pandas 中 np.nan == np.nan 返回 True。',
            correctAnswer: false,
            explanation: 'NaN 不等于任何值，包括它自己，应该用 isna() 检查。'
          },
          {
            id: 18,
            type: 'true_false',
            question: 'bfill 用后一个非缺失值填充。',
            correctAnswer: true,
            explanation: 'bfill (backward fill) 用后一个非缺失值填充。'
          },
          {
            id: 19,
            type: 'true_false',
            question: 'fillna() 会修改原 DataFrame。',
            correctAnswer: false,
            explanation: '默认返回副本，需要用 inplace=True 或重新赋值才会修改原数据。'
          },
          {
            id: 20,
            type: 'true_false',
            question: 'clip() 方法可以将数据限制在范围内。',
            correctAnswer: true,
            explanation: 'clip() 可以将超过范围的值截断到最小值或最大值，用于处理异常值。'
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
            type: 'multiple_choice',
            question: '以下哪个方法用于获取日期的月份？',
            options: ['dt.month', 'dt.year', 'dt.day', 'dt.hour'],
            correctAnswer: 'dt.month',
            explanation: 'dt.month 用于从 datetime 列中提取月份信息。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: 'plt.figure(figsize=(12, 6)) 用于什么？',
            options: ['创建数据', '设置图表大小', '保存图表', '显示图表'],
            correctAnswer: '设置图表大小',
            explanation: 'figsize 参数用于设置图表的宽度和高度（单位：英寸）。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: '以下哪个方法用于绘制折线图？',
            options: ['plot(kind="bar")', 'plot(kind="line")', 'plot(kind="scatter")', 'plot(kind="pie")'],
            correctAnswer: 'plot(kind="line")',
            explanation: 'kind="line" 用于绘制折线图，适合展示趋势。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: 'sort_values() 默认按什么顺序排序？',
            options: ['降序', '升序', '随机', '不排序'],
            correctAnswer: '升序',
            explanation: 'sort_values() 默认 ascending=True，按升序排序。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: 'plt.title() 用于什么？',
            options: ['设置图表标题', '设置坐标轴标签', '设置图例', '设置网格'],
            correctAnswer: '设置图表标题',
            explanation: 'plt.title() 用于设置图表的标题。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: '以下哪个方法用于显示网格？',
            options: ['plt.grid(True)', 'plt.show()', 'plt.legend()', 'plt.savefig()'],
            correctAnswer: 'plt.grid(True)',
            explanation: 'plt.grid(True) 用于在图表中显示网格线。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: 'groupby 后使用 sum() 会做什么？',
            options: ['计算平均值', '计算总和', '计算最大值', '计算最小值'],
            correctAnswer: '计算总和',
            explanation: 'sum() 方法用于计算每组的总和。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: 'plt.xlabel() 用于什么？',
            options: ['设置Y轴标签', '设置X轴标签', '设置标题', '设置图例'],
            correctAnswer: '设置X轴标签',
            explanation: 'plt.xlabel() 用于设置X轴的标签文字。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: 'to_period("M") 用于什么？',
            options: ['转换为日期格式', '转换为月度周期', '转换为年份', '转换为日期时间'],
            correctAnswer: '转换为月度周期',
            explanation: 'to_period("M") 将日期转换为月度周期格式。'
          },
          {
            id: 11,
            type: 'true_false',
            question: 'sort_values(ascending=False) 会按降序排序。',
            correctAnswer: true,
            explanation: 'ascending=False 表示降序排列。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'plt.show() 用于显示图表。',
            correctAnswer: true,
            explanation: 'plt.show() 是 Matplotlib 中显示图表的方法。'
          },
          {
            id: 13,
            type: 'true_false',
            question: 'groupby 可以同时按多个列分组。',
            correctAnswer: true,
            explanation: 'groupby 可以接受列名列表，按多个列进行分组。'
          },
          {
            id: 14,
            type: 'true_false',
            question: 'plot(marker="o") 会在数据点上显示圆形标记。',
            correctAnswer: true,
            explanation: 'marker 参数用于指定数据点的标记样式。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'head(10) 会显示 DataFrame 的最后10行。',
            correctAnswer: false,
            explanation: 'head(10) 显示前10行，tail(10) 显示最后10行。'
          },
          {
            id: 16,
            type: 'true_false',
            question: 'plt.ylabel() 用于设置Y轴标签。',
            correctAnswer: true,
            explanation: 'plt.ylabel() 用于设置Y轴的标签文字。'
          },
          {
            id: 17,
            type: 'true_false',
            question: 'mean() 方法用于计算平均值。',
            correctAnswer: true,
            explanation: 'mean() 是 Pandas 中计算平均值的方法。'
          },
          {
            id: 18,
            type: 'true_false',
            question: '折线图不适合展示时间序列趋势。',
            correctAnswer: false,
            explanation: '折线图非常适合展示时间序列数据的趋势变化。'
          },
          {
            id: 19,
            type: 'true_false',
            question: 'plt.savefig() 用于保存图表到文件。',
            correctAnswer: true,
            explanation: 'plt.savefig() 可以将图表保存为图片文件。'
          },
          {
            id: 20,
            type: 'true_false',
            question: 'max() 方法用于计算最小值。',
            correctAnswer: false,
            explanation: 'max() 计算最大值，min() 计算最小值。'
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
    title: '数据分析技术',
    description: '系统学习数据分析全流程，掌握 Python 编程、数据采集、清洗、可视化等核心技能。',
    topics: ['Python编程', '数据采集', '数据清洗', '数据可视化', '统计分析'],
    duration: '40小时',
    chapters: [
      {
        id: 1,
        title: 'Python基础',
        content: '学习 Python 编程语言的基础知识，包括变量、数据类型、控制流、函数等核心概念，为后续数据分析学习打下坚实基础。',
        examples: [
          '# 变量定义与基本运算\nname = "数据分析"\nversion = 3.10\npi = 3.14159\nprint(f"{name} version: {version}")',
          '# 列表与字典操作\ndata = [85, 92, 78, 95, 88]\nscores = {"数学": 95, "语文": 88, "英语": 92}\nprint("平均分:", sum(data) / len(data))'
        ],
        exercises: [
          {
            id: 1,
            question: '创建一个函数，接收一个列表，计算并返回列表中的最大值和最小值',
            solution: 'def find_min_max(numbers):\n    """计算列表的最大值和最小值"""\n    if not numbers:\n        return None, None\n    return max(numbers), min(numbers)\n\n# 测试\nresult = find_min_max([85, 92, 78, 95, 88])\nprint(f"最大值: {result[0]}, 最小值: {result[1]}")',
            explanation: '使用 Python 内置的 max() 和 min() 函数可以快速找到列表中的最大值和最小值。函数应该先检查列表是否为空，避免在空列表上调用 max/min 导致的错误。',
            commonErrors: [
              {
                error: '空列表处理',
                description: '没有处理空列表的情况',
                fix: '添加空列表检查 if not numbers: return None, None'
              },
              {
                error: '返回格式错误',
                description: '返回值格式不正确',
                fix: '使用元组返回多个值 return max_value, min_value'
              }
            ]
          },
          {
            id: 2,
            question: '使用字典统计一段文本中每个单词出现的频率',
            solution: 'text = "数据分析 数据 可视化 数据 分析"\nwords = text.split()\nword_count = {}\n\nfor word in words:\n    word_count[word] = word_count.get(word, 0) + 1\n\nprint("单词统计:", word_count)',
            explanation: '使用字典的 get() 方法可以安全地获取键值，如果键不存在则返回默认值 0。这种方法比先检查键是否存在更简洁高效。',
            commonErrors: [
              {
                error: '字典键错误',
                description: '直接使用 word_count[word] += 1 在首次遇到单词时会报错',
                fix: '使用 word_count.get(word, 0) + 1 来安全地累加计数'
              },
              {
                error: '大小写问题',
                description: '没有处理大小写导致重复统计',
                fix: '可以先转换为小写 word.lower()'
              }
            ]
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: 'Python 中以下哪种方式可以正确定义一个列表？',
            options: ['data = (1, 2, 3)', 'data = [1, 2, 3]', 'data = {1, 2, 3}', 'data = {"a": 1, "b": 2}'],
            correctAnswer: 'data = [1, 2, 3]',
            explanation: 'Python 中列表使用方括号 [] 定义，元组使用圆括号 ()，集合使用花括号 {}。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: '以下哪个函数可以获取列表的长度？',
            options: ['len()', 'length()', 'size()', 'count()'],
            correctAnswer: 'len()',
            explanation: 'len() 是 Python 内置函数，可以获取各种序列类型（列表、元组、字符串等）的长度。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: 'Python 中如何定义一个字典？',
            options: ['dict = [1, 2]', 'dict = (1, 2)', 'dict = {1: "一", 2: "二"}', 'dict = [1: "一", 2: "二"]'],
            correctAnswer: 'dict = {1: "一", 2: "二"}',
            explanation: '字典使用花括号 {} 定义，键值对之间用冒号分隔，多个键值对用逗号分隔。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: '以下哪个方法可以向列表末尾添加元素？',
            options: ['add()', 'insert()', 'append()', 'push()'],
            correctAnswer: 'append()',
            explanation: 'append() 方法用于向列表末尾添加单个元素，是列表操作中最常用的方法之一。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: 'Python 中的 for 循环用于遍历什么类型？',
            options: ['只能遍历列表', '只能遍历数字', '可以遍历任何可迭代对象', '只能遍历字符串'],
            correctAnswer: '可以遍历任何可迭代对象',
            explanation: 'Python 的 for 循环可以遍历列表、元组、字典、字符串、文件等任何可迭代对象。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '以下哪个是 Python 的注释符号？',
            options: ['//', '/* */', '#', '--'],
            correctAnswer: '#',
            explanation: 'Python 使用 # 作为单行注释符号，注释内容从 # 开始到行尾结束。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: '如何定义一个带有默认参数的函数？',
            options: ['def func(a=1, b)', 'def func(a=1, b=2)', 'def func(a=1; b=2)', 'def func(a=1: b=2)'],
            correctAnswer: 'def func(a=1, b=2)',
            explanation: '函数参数的默认值在定义时指定，格式为 parameter=default_value。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: 'Python 中 True 和 False 属于什么数据类型？',
            options: ['int', 'string', 'bool', 'float'],
            correctAnswer: 'bool',
            explanation: 'True 和 False 是布尔类型（bool）的两个值，布尔类型是 Python 的基本数据类型之一。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: '以下哪个方法可以合并两个集合？',
            options: ['extend()', 'union()', 'merge()', 'concat()'],
            correctAnswer: 'union()',
            explanation: 'union() 方法或 | 运算符可以合并两个集合，返回一个新的集合。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: 'Python 中表示空值的关键字是什么？',
            options: ['null', 'undefined', 'None', 'nil'],
            correctAnswer: 'None',
            explanation: 'Python 使用 None 表示空值或空对象，它是一个特殊的关键字。'
          },
          {
            id: 11,
            type: 'true_false',
            question: 'Python 中的变量不需要声明类型，可以直接赋值使用。',
            correctAnswer: true,
            explanation: 'Python 是动态类型语言，变量不需要预先声明类型，直接赋值即可创建变量。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'Python 中可以使用 + 运算符连接两个列表。',
            correctAnswer: true,
            explanation: '列表可以使用 + 运算符进行拼接，如 [1, 2] + [3, 4] 会得到 [1, 2, 3, 4]。'
          },
          {
            id: 13,
            type: 'true_false',
            question: 'Python 中的字典的键必须是唯一的。',
            correctAnswer: true,
            explanation: '字典中的键必须是唯一的，如果添加相同的键，后面的值会覆盖前面的值。'
          },
          {
            id: 14,
            type: 'true_false',
            question: 'Python 中列表的索引从 1 开始。',
            correctAnswer: false,
            explanation: 'Python 中所有序列（列表、元组、字符串）的索引都从 0 开始，而不是 1。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'Python 函数可以返回多个值。',
            correctAnswer: true,
            explanation: 'Python 函数可以通过 return 语句返回一个元组，从而实现返回多个值的效果。'
          },
          {
            id: 16,
            type: 'true_false',
            question: '集合中的元素是有序的。',
            correctAnswer: false,
            explanation: '集合（set）是无序的数据结构，不保证元素的顺序，不支持索引访问。'
          },
          {
            id: 17,
            type: 'true_false',
            question: 'Python 中的字符串是不可变的。',
            correctAnswer: true,
            explanation: '字符串一旦创建就不能修改，任何修改操作都会返回一个新的字符串对象。'
          },
          {
            id: 18,
            type: 'true_false',
            question: '可以使用 in 关键字检查元素是否在列表中。',
            correctAnswer: true,
            explanation: 'in 关键字可以检查元素是否存在于列表、元组、字典或集合中，返回布尔值。'
          },
          {
            id: 19,
            type: 'true_false',
            question: 'Python 中可以使用负数作为列表的索引。',
            correctAnswer: true,
            explanation: 'Python 支持负数索引，-1 表示最后一个元素，-2 表示倒数第二个元素，以此类推。'
          },
          {
            id: 20,
            type: 'true_false',
            question: '字典的 get() 方法可以在键不存在时返回默认值。',
            correctAnswer: true,
            explanation: 'dict.get(key, default) 方法在键不存在时返回指定的默认值，而不是抛出异常。'
          }
        ]
      },
      {
        id: 2,
        title: '数据来源与类型',
        content: '了解数据的各种来源（文件、数据库、API、网络爬虫等）和数据类型（结构化、半结构化、非结构化），掌握不同数据源的读取和存储方法。',
        examples: [
          '# 读取 CSV 文件\nimport pandas as pd\ndf = pd.read_csv("sales_data.csv")\nprint(df.head())',
          '# 读取 Excel 文件\ndf_excel = pd.read_excel("report.xlsx", sheet_name="2024")\nprint(df_excel.info())',
          '# 读取 JSON 数据\nimport json\nwith open("config.json", "r", encoding="utf-8") as f:\n    config = json.load(f)'
        ],
        exercises: [
          {
            id: 1,
            question: '读取一个 CSV 文件，查看数据的基本信息（行数、列数、数据类型），并检查是否有缺失值',
            solution: 'import pandas as pd\n\n# 读取 CSV 文件\ndf = pd.read_csv("data.csv")\n\n# 查看基本信息\nprint(f"数据形状: {df.shape[0]} 行, {df.shape[1]} 列")\nprint(f"\\n列名: {list(df.columns)}")\nprint(f"\\n数据类型:\\n{df.dtypes}")\n\n# 检查缺失值\nprint(f"\\n各列缺失值数量:\\n{df.isnull().sum()}")\nprint(f"\\n总缺失值: {df.isnull().sum().sum()}")',
            explanation: '读取 CSV 文件后，使用 shape 属性查看数据规模，使用 dtypes 查看列的数据类型，使用 isnull().sum() 检查每列的缺失值数量。',
            commonErrors: [
              {
                error: '编码问题',
                description: '读取中文文件时出现乱码',
                fix: '添加 encoding="utf-8" 参数 pd.read_csv(file, encoding="utf-8")'
              },
              {
                error: '路径错误',
                description: '文件路径不正确导致文件找不到',
                fix: '使用绝对路径或确保文件在当前工作目录下'
              }
            ]
          },
          {
            id: 2,
            question: '从字典创建一个 DataFrame，并添加新的计算列（例如：总销售额 = 单价 × 数量）',
            solution: 'import pandas as pd\n\n# 从字典创建 DataFrame\ndata = {\n    "产品": ["手机", "电脑", "平板"],\n    "单价": [2999, 5999, 1999],\n    "数量": [150, 80, 120]\n}\ndf = pd.DataFrame(data)\n\n# 添加计算列\ndf["总销售额"] = df["单价"] * df["数量"]\n\nprint(df)\nprint(f"\\n总销售额: ¥{df["总销售额"].sum():,.2f}")',
            explanation: '可以直接对 DataFrame 的列进行算术运算，生成新的列。这在数据分析中非常常用，用于计算衍生指标。',
            commonErrors: [
              {
                error: '列名错误',
                description: '列名拼写错误导致运算失败',
                fix: '确保列名与创建 DataFrame 时使用的完全一致，注意大小写'
              },
              {
                error: '数据类型不匹配',
                description: '列中包含非数值类型导致运算出错',
                fix: '使用 astype() 转换为数值类型，或使用 pd.to_numeric()'
              }
            ]
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: '以下哪种数据类型不属于结构化数据？',
            options: ['CSV文件', 'Excel表格', '数据库表', '图片文件'],
            correctAnswer: '图片文件',
            explanation: '结构化数据以表格形式组织，图片文件属于非结构化数据。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: 'Pandas 中用于读取 CSV 文件的函数是？',
            options: ['pd.read_excel()', 'pd.read_csv()', 'pd.read_json()', 'pd.read_sql()'],
            correctAnswer: 'pd.read_csv()',
            explanation: 'pd.read_csv() 是 Pandas 中用于读取 CSV 文件的专用函数。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '以下哪种数据格式是半结构化数据？',
            options: ['MySQL数据库', 'CSV文件', 'JSON文件', 'Excel文件'],
            correctAnswer: 'JSON文件',
            explanation: 'JSON 是半结构化数据格式，具有自描述性，但不遵循固定的表结构。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: '如何查看 DataFrame 的行数和列数？',
            options: ['df.size', 'df.shape', 'df.length', 'df.dimensions'],
            correctAnswer: 'df.shape',
            explanation: 'df.shape 返回一个元组 (行数, 列数)，可以直接查看数据的规模。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: '以下哪个方法可以查看 DataFrame 的列名？',
            options: ['df.names', 'df.columns', 'df.headers', 'df.keys()'],
            correctAnswer: 'df.columns',
            explanation: 'df.columns 返回一个 Index 对象，包含所有的列名。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '如何检查 DataFrame 中每列的缺失值数量？',
            options: ['df.count()', 'df.isnull().sum()', 'df.empty()', 'df.nan()'],
            correctAnswer: 'df.isnull().sum()',
            explanation: 'isnull() 返回布尔 DataFrame，sum() 沿列方向求和，得到每列的缺失值数量。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: '以下哪种文件格式适合存储大量数值型数据？',
            options: ['CSV', 'JSON', 'XML', 'HTML'],
            correctAnswer: 'CSV',
            explanation: 'CSV 是纯文本格式，文件小、读写速度快，适合存储大量数值型数据。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: 'Pandas 中读取 Excel 文件需要安装什么库？',
            options: ['numpy', 'openpyxl 或 xlrd', 'matplotlib', 'scipy'],
            correctAnswer: 'openpyxl 或 xlrd',
            explanation: '读取 Excel 文件需要安装 openpyxl（支持 .xlsx）或 xlrd（支持 .xls）库。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: 'DataFrame 的哪个属性可以查看数据类型？',
            options: ['df.types', 'df.dtypes', 'df.datatypes', 'df.info()'],
            correctAnswer: 'df.dtypes',
            explanation: 'df.dtypes 返回每列的数据类型，是一个 Series 对象。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: '以下哪个是读取 JSON 文件的正确方式？',
            options: ['pd.read_json("file.json")', 'json.load("file.json")', 'open("file.json").read()', 'pd.read_csv("file.json")'],
            correctAnswer: 'pd.read_json("file.json")',
            explanation: 'Pandas 的 read_json() 可以直接读取 JSON 文件并转换为 DataFrame。'
          },
          {
            id: 11,
            type: 'true_false',
            question: 'CSV 文件只能用逗号作为分隔符。',
            correctAnswer: false,
            explanation: 'CSV 文件可以使用逗号、制表符、分号等作为分隔符，pandas 可以通过 sep 参数指定。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'DataFrame 可以从字典创建。',
            correctAnswer: true,
            explanation: 'pd.DataFrame(dict) 可以将字典转换为 DataFrame，字典的键会成为列名。'
          },
          {
            id: 13,
            type: 'true_false',
            question: 'JSON 格式只能存储文本数据，不能存储数值。',
            correctAnswer: false,
            explanation: 'JSON 格式支持多种数据类型，包括字符串、数字、布尔值、数组和对象。'
          },
          {
            id: 14,
            type: 'true_false',
            question: 'DataFrame 的每一列都是一个 Series 对象。',
            correctAnswer: true,
            explanation: 'DataFrame 由多个 Series 组成，每个 Series 对应一列数据，有自己的索引和值。'
          },
          {
            id: 15,
            type: 'true_false',
            question: '非结构化数据无法用表格形式存储。',
            correctAnswer: true,
            explanation: '非结构化数据（如文本、图片、音频）没有固定的格式，无法直接用表格存储。'
          },
          {
            id: 16,
            type: 'true_false',
            question: 'df.head() 默认显示前 5 行数据。',
            correctAnswer: true,
            explanation: 'df.head(n) 默认 n=5，可以指定显示前 n 行数据。'
          },
          {
            id: 17,
            type: 'true_false',
            question: '读取文件时可以不指定编码格式。',
            correctAnswer: false,
            explanation: '处理中文文件时最好指定 encoding="utf-8"，否则可能出现乱码问题。'
          },
          {
            id: 18,
            type: 'true_false',
            question: 'DataFrame 可以包含不同数据类型的列。',
            correctAnswer: true,
            explanation: 'DataFrame 是列式存储，每列可以是不同的数据类型（int、float、string 等）。'
          },
          {
            id: 19,
            type: 'true_false',
            question: '读取大文件时应该一次性读取全部数据。',
            correctAnswer: false,
            explanation: '对于大文件，可以使用 nrows 参数限制读取行数，或使用 chunksize 分块读取。'
          },
          {
            id: 20,
            type: 'true_false',
            question: 'df.tail() 用于查看数据的后几行。',
            correctAnswer: true,
            explanation: 'df.tail(n) 默认显示最后 5 行，常用于检查数据末尾的情况。'
          }
        ]
      },
      {
        id: 3,
        title: '数据采集',
        content: '学习如何从不同来源采集数据，包括网络爬虫、API 调用、数据库查询等方法，掌握数据获取的常用技术。',
        examples: [
          '# 使用 requests 库发送 HTTP 请求\nimport requests\n\nresponse = requests.get("https://api.example.com/data")\nprint(response.status_code)\ndata = response.json()',
          '# 使用 Pandas 读取数据库数据\nimport pandas as pd\nimport pymysql\n\nconn = pymysql.connect(host="localhost", user="root", password="123456", database="sales")\ndf = pd.read_sql("SELECT * FROM orders", conn)\nconn.close()'
        ],
        exercises: [
          {
            id: 1,
            question: '使用 requests 库发送 POST 请求，向 API 提交数据并获取响应',
            solution: 'import requests\n\n# API 地址\nurl = "https://api.example.com/submit"\n\n# 准备要提交的数据\ndata = {\n    "username": "zhangsan",\n    "password": "123456",\n    "action": "login"\n}\n\n# 发送 POST 请求\nresponse = requests.post(url, json=data)\n\n# 检查响应状态\nif response.status_code == 200:\n    result = response.json()\n    print(f"登录成功: {result}")\nelse:\n    print(f"请求失败: {response.status_code}")',
            explanation: 'POST 请求通常用于向服务器提交数据，使用 json 参数会自动将字典转换为 JSON 格式。响应状态码 200 表示成功。',
            commonErrors: [
              {
                error: '网络超时',
                description: '请求时间过长导致失败',
                fix: '添加 timeout 参数 requests.post(url, json=data, timeout=10)'
              },
              {
                error: 'JSON 解析错误',
                description: '响应不是有效的 JSON 格式',
                fix: '先检查 response.status_code 和 response.text，再用 response.json()'
              }
            ]
          },
          {
            id: 2,
            question: '模拟浏览器发送请求，抓取网页内容并解析其中的链接',
            solution: 'import requests\nfrom bs4 import BeautifulSoup\n\n# 模拟浏览器访问\nheaders = {\n    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"\n}\n\n# 发送请求\nurl = "https://example.com"\nresponse = requests.get(url, headers=headers)\n\n# 解析 HTML\nsoup = BeautifulSoup(response.text, "html.parser")\n\n# 提取所有链接\nlinks = []\nfor a_tag in soup.find_all("a", href=True):\n    links.append({\n        "text": a_tag.get_text(strip=True),\n        "url": a_tag["href"]\n    })\n\nprint(f"找到 {len(links)} 个链接")\nfor link in links[:5]:\n    print(f"- {link["text"]}: {link["url"]}")',
            explanation: '发送请求时添加 User-Agent 头可以模拟浏览器访问，避免被网站识别为爬虫。使用 BeautifulSoup 解析 HTML 可以方便地提取需要的数据。',
            commonErrors: [
              {
                error: '反爬虫限制',
                description: '网站返回 403 或要求登录',
                fix: '添加更多的请求头，或使用 session 保持会话状态'
              },
              {
                error: '编码问题',
                description: '网页内容出现乱码',
                fix: 'response.encoding = response.apparent_encoding 或手动指定编码'
              }
            ]
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: '以下哪个库常用于发送 HTTP 请求？',
            options: ['pandas', 'requests', 'matplotlib', 'numpy'],
            correctAnswer: 'requests',
            explanation: 'requests 是 Python 中最常用的 HTTP 请求库，可以发送 GET、POST 等各种 HTTP 请求。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: 'HTTP 请求中，GET 方法和 POST 方法的主要区别是什么？',
            options: ['GET 更快', 'POST 更快', 'GET 参数在 URL 中，POST 参数在请求体中', '没有区别'],
            correctAnswer: 'POST 参数在请求体中',
            explanation: 'GET 请求将参数附加在 URL 后面，POST 请求将参数放在请求体中，更安全且可以传输更多数据。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '以下哪个状态码表示请求成功？',
            options: ['404', '500', '403', '200'],
            correctAnswer: '200',
            explanation: '200 表示 OK，请求成功；404 表示 Not Found；403 表示 Forbidden；500 表示 Internal Server Error。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: 'BeautifulSoup 库的主要作用是什么？',
            options: ['发送网络请求', '解析 HTML/XML', '操作数据库', '绘制图表'],
            correctAnswer: '解析 HTML/XML',
            explanation: 'BeautifulSoup 用于解析 HTML 和 XML 文档，可以方便地提取文档中的各种元素。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: '以下哪个不是有效的 HTTP 请求方法？',
            options: ['GET', 'POST', 'FETCH', 'DELETE'],
            correctAnswer: 'FETCH',
            explanation: '常用的 HTTP 方法有 GET、POST、PUT、DELETE 等，FETCH 不是标准的 HTTP 方法。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '如何设置请求头中的 User-Agent？',
            options: ['requests.get(url, agent="...")', 'requests.get(url, headers={"User-Agent": "..."})', 'requests.get(url, user_agent="...")', 'requests.get(url, ua="...")'],
            correctAnswer: 'requests.get(url, headers={"User-Agent": "..."})',
            explanation: '使用 headers 参数可以设置请求头，是一个字典类型。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: '以下哪个库用于解析 HTML？',
            options: ['numpy', 'BeautifulSoup', 'pandas', 'scipy'],
            correctAnswer: 'BeautifulSoup',
            explanation: 'BeautifulSoup 是专门用于解析 HTML 和 XML 的库，常与 requests 配合使用。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: '如何获取 JSON 格式的 API 响应？',
            options: ['response.text', 'response.json()', 'response.content', 'response.html()'],
            correctAnswer: 'response.json()',
            explanation: 'response.json() 方法可以直接将 JSON 格式的响应转换为 Python 对象。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: '网络爬虫中，如何避免被网站封禁？',
            options: ['设置合理的请求间隔', '使用代理 IP', '遵守网站的 robots.txt', '以上都是'],
            correctAnswer: '以上都是',
            explanation: '合法的网络爬虫应该控制请求频率、使用代理、遵守 robots.txt 规则，避免对网站造成负担。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: 'pandas 中，哪个函数可以读取 SQL 查询结果？',
            options: ['pd.read_csv()', 'pd.read_excel()', 'pd.read_sql()', 'pd.read_json()'],
            correctAnswer: 'pd.read_sql()',
            explanation: 'pd.read_sql() 可以直接执行 SQL 查询并将结果转换为 DataFrame。'
          },
          {
            id: 11,
            type: 'true_false',
            question: 'GET 请求比 POST 请求更安全。',
            correctAnswer: false,
            explanation: 'POST 请求将参数放在请求体中，比 GET 请求（参数在 URL 中）更安全，不会在 URL 历史中留下敏感信息。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'requests 库默认会处理 Cookie。',
            correctAnswer: true,
            explanation: 'requests.Session() 会自动处理 Cookie，保持会话状态。'
          },
          {
            id: 13,
            type: 'true_false',
            question: 'BeautifulSoup 可以直接解析 JavaScript 动态生成的内容。',
            correctAnswer: false,
            explanation: 'BeautifulSoup 只能解析静态 HTML，对于 JavaScript 动态生成的内容需要使用 Selenium 等工具。'
          },
          {
            id: 14,
            type: 'true_false',
            question: 'API 是应用程序编程接口的缩写。',
            correctAnswer: true,
            explanation: 'API（Application Programming Interface）定义了软件组件之间交互的方式。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'requests.get() 的 timeout 参数用于设置请求超时时间。',
            correctAnswer: true,
            explanation: 'timeout 参数可以防止请求无限等待，通常设置为 5-30 秒。'
          },
          {
            id: 16,
            type: 'true_false',
            question: 'POST 请求适合用于获取数据。',
            correctAnswer: false,
            explanation: 'GET 请求适合获取数据，POST 请求适合提交或修改数据。'
          },
          {
            id: 17,
            type: 'true_false',
            question: '网络爬虫应该遵守网站的爬虫协议。',
            correctAnswer: true,
            explanation: 'robots.txt 文件中定义了网站允许爬取的规则，合法的爬虫应该遵守这些规则。'
          },
          {
            id: 18,
            type: 'true_false',
            question: 'JSON 是一种轻量级的数据交换格式。',
            correctAnswer: true,
            explanation: 'JSON（JavaScript Object Notation）是一种常用的数据格式，易于人阅读和编写，也易于机器解析和生成。'
          },
          {
            id: 19,
            type: 'true_false',
            question: 'requests 的 response.text 返回的是二进制内容。',
            correctAnswer: false,
            explanation: 'response.text 返回解码后的字符串（Unicode），response.content 返回原始字节数据。'
          },
          {
            id: 20,
            type: 'true_false',
            question: '所有网站都欢迎网络爬虫访问。',
            correctAnswer: false,
            explanation: '有些网站会采取措施防止爬虫访问，如检测 User-Agent、限制访问频率等，应该尊重网站的规定。'
          }
        ]
      },
      {
        id: 4,
        title: '数据清洗',
        content: '学习数据清洗的核心技术，包括处理缺失值、异常值、重复数据，以及数据类型转换和数据标准化，为后续分析做好准备。',
        examples: [
          '# 处理缺失值\ndf["age"].fillna(df["age"].mean(), inplace=True)  # 用均值填充\ndf.dropna(inplace=True)  # 删除包含缺失值的行',
          '# 删除重复数据\ndf.drop_duplicates(inplace=True)\n\n# 数据类型转换\ndf["date"] = pd.to_datetime(df["date"])\ndf["price"] = df["price"].astype(float)'
        ],
        exercises: [
          {
            id: 1,
            question: '读取包含缺失值的数据集，使用合适的方法处理不同列的缺失值（数值列用均值，分类列用众数），并验证处理结果',
            solution: 'import pandas as pd\nimport numpy as np\n\n# 读取数据\ndf = pd.read_csv("sales_data.csv")\n\nprint("处理前缺失值情况:")\nprint(df.isnull().sum())\n\n# 处理数值列的缺失值（使用均值）\nnumeric_cols = df.select_dtypes(include=[np.number]).columns\nfor col in numeric_cols:\n    if df[col].isnull().any():\n        df[col].fillna(df[col].mean(), inplace=True)\n        print(f"列 {col} 使用均值 {df[col].mean():.2f} 填充")\n\n# 处理分类列的缺失值（使用众数）\ncategorical_cols = df.select_dtypes(include=["object"]).columns\nfor col in categorical_cols:\n    if df[col].isnull().any():\n        mode_value = df[col].mode()[0]\n        df[col].fillna(mode_value, inplace=True)\n        print(f"列 {col} 使用众数 "{mode_value}" 填充")\n\nprint("\\n处理后缺失值情况:")\nprint(df.isnull().sum())',
            explanation: '不同的列应该使用不同的策略填充缺失值。数值型列通常使用均值或中位数，分类列使用众数或最常见的值。',
            commonErrors: [
              {
                error: '使用固定的填充值',
                description: '所有列都用同一个值填充',
                fix: '根据列的数据类型和分布特点选择合适的填充方法'
              },
              {
                error: '忽略了异常值影响',
                description: '使用均值填充时没有考虑异常值',
                fix: '先检查数据分布，或使用中位数填充更稳健'
              }
            ]
          },
          {
            id: 2,
            question: '识别并处理数据中的异常值（使用 IQR 方法），将异常值替换为边界值或标记为缺失值',
            solution: 'import pandas as pd\nimport numpy as np\n\n# 读取数据\ndf = pd.read_csv("data.csv")\n\ndef handle_outliers_iqr(series, method="cap"):\n    """使用 IQR 方法处理异常值\n    \n    Args:\n        series: 数据系列\n        method: "cap" 用边界值替换, "nan" 标记为缺失值\n    """\n    Q1 = series.quantile(0.25)\n    Q3 = series.quantile(0.75)\n    IQR = Q3 - Q1\n    \n    lower_bound = Q1 - 1.5 * IQR\n    upper_bound = Q3 + 1.5 * IQR\n    \n    print(f"Q1={Q1:.2f}, Q3={Q3:.2f}, IQR={IQR:.2f}")\n    print(f"正常范围: [{lower_bound:.2f}, {upper_bound:.2f}]")\n    \n    if method == "cap":\n        # 用边界值替换异常值\n        return series.clip(lower=lower_bound, upper=upper_bound)\n    else:\n        # 标记为缺失值\n        return series.mask((series < lower_bound) | (series > upper_bound))\n\n# 处理某一列的异常值\ncolumn = "sales"\noriginal_outliers = df[column][(df[column] < df[column].quantile(0.25) - 1.5 * (df[column].quantile(0.75) - df[column].quantile(0.25))) | \n                               (df[column] > df[column].quantile(0.75) + 1.5 * (df[column].quantile(0.75) - df[column].quantile(0.25)))]\nprint(f"发现 {len(original_outliers)} 个异常值")\n\ndf[column] = handle_outliers_iqr(df[column], method="cap")\nprint(f"异常值处理完成")',
            explanation: 'IQR（四分位距）方法通过计算数据的四分位数来识别异常值，超出 [Q1-1.5*IQR, Q3+1.5*IQR] 范围的值被视为异常值。',
            commonErrors: [
              {
                error: '直接删除异常值',
                description: '直接删除包含异常值的行，可能导致数据量大幅减少',
                fix: '使用替换或标记的方法处理异常值，保留数据行数'
              },
              {
                error: '不了解业务场景',
                description: '没有考虑异常值可能是真实的业务数据',
                fix: '先了解数据来源，异常值可能是真实的高价值客户或特殊事件'
              }
            ]
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: '以下哪个方法可以删除包含缺失值的行？',
            options: ['df.remove()', 'df.drop()', 'df.dropna()', 'df.delete()'],
            correctAnswer: 'df.dropna()',
            explanation: 'dropna() 方法用于删除包含缺失值的行或列。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: 'fillna() 方法的作用是什么？',
            options: ['检查缺失值', '删除缺失值', '填充缺失值', '统计缺失值'],
            correctAnswer: '填充缺失值',
            explanation: 'fillna() 方法用于用指定的值或方法填充缺失值。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: 'drop_duplicates() 方法用于删除什么？',
            options: ['缺失值', '异常值', '重复行', '空行'],
            correctAnswer: '重复行',
            explanation: 'drop_duplicates() 方法用于删除 DataFrame 中的重复行。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: 'IQR 方法用于检测什么？',
            options: ['缺失值', '异常值', '重复值', '空行'],
            correctAnswer: '异常值',
            explanation: 'IQR（四分位距）方法是常用的异常值检测方法。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: 'astype() 方法的作用是什么？',
            options: ['检查类型', '转换类型', '删除类型', '复制类型'],
            correctAnswer: '转换类型',
            explanation: 'astype() 方法用于转换列的数据类型。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: 'isnull() 方法返回什么类型的数据？',
            options: ['数值', '布尔', '字符串', '日期'],
            correctAnswer: '布尔',
            explanation: 'isnull() 返回布尔类型的 DataFrame，表示每个元素是否为空值。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: '使用 IQR 方法时，异常值的范围是多少？',
            options: ['[Q1-1.5*IQR, Q3+1.5*IQR]', '[Q1-IQR, Q3+IQR]', '[mean-2*std, mean+2*std]', '[min, max]'],
            correctAnswer: '[Q1-1.5*IQR, Q3+1.5*IQR]',
            explanation: 'IQR 方法认为超出 Q1-1.5*IQR 到 Q3+1.5*IQR 范围的值是异常值。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: '以下哪个不是处理缺失值的常用方法？',
            options: ['删除', '均值填充', '删除数据库', '插值填充'],
            correctAnswer: '删除数据库',
            explanation: '常用的缺失值处理方法包括删除、均值/中位数填充、众数填充、插值等。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: 'replace() 方法的作用是什么？',
            options: ['替换列', '替换索引', '替换值', '替换类型'],
            correctAnswer: '替换值',
            explanation: 'replace() 方法用于替换 DataFrame 中的指定值。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: '标准化数据和归一化数据的主要区别是什么？',
            options: ['没有区别', '标准化后数据范围是0-1', '归一化后数据服从正态分布', '两者都使数据转换为特定范围'],
            correctAnswer: '两者都使数据转换为特定范围',
            explanation: '标准化和归一化都是数据预处理方法，使数据落在特定范围内，便于模型训练。'
          },
          {
            id: 11,
            type: 'true_false',
            question: '缺失值就是空值。',
            correctAnswer: true,
            explanation: '在 Pandas 中，缺失值包括 None、np.nan、NaT 等，都可以用 isnull() 检测。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'drop_duplicates() 默认保留第一次出现的重复行。',
            correctAnswer: true,
            explanation: 'drop_duplicates() 默认 keep="first"，保留第一次出现的重复行，删除后续的。'
          },
          {
            id: 13,
            type: 'true_false',
            question: 'fillna(method="ffill") 使用前一个值填充缺失值。',
            correctAnswer: true,
            explanation: 'ffill（forward fill）用前一个非缺失值填充，bfill（backward fill）用后一个值填充。'
          },
          {
            id: 14,
            type: 'true_false',
            question: 'astype() 可以直接将字符串转换为数值类型。',
            correctAnswer: false,
            explanation: 'astype() 要求字符串内容必须是可转换的数值，否则会报错。'
          },
          {
            id: 15,
            type: 'true_false',
            question: '异常值一定是有问题的数据。',
            correctAnswer: false,
            explanation: '异常值可能是真实数据（如高收入客户），需要结合业务场景判断。'
          },
          {
            id: 16,
            type: 'true_false',
            question: 'dropna(thresh=3) 表示一行至少要有 3 个非缺失值才会保留。',
            correctAnswer: true,
            explanation: 'thresh 参数指定一行需要有多少个非缺失值，少于这个数量就会被删除。'
          },
          {
            id: 17,
            type: 'true_false',
            question: '数值型列的缺失值只能用均值填充。',
            correctAnswer: false,
            explanation: '数值型列可以用均值、中位数、众数或根据业务逻辑填充。'
          },
          {
            id: 18,
            type: 'true_false',
            question: '重复数据一定会影响分析结果。',
            correctAnswer: true,
            explanation: '重复数据会导致统计结果偏差，如总和、均值等指标被夸大。'
          },
          {
            id: 19,
            type: 'true_false',
            question: '可以使用正则表达式进行数据清洗。',
            correctAnswer: true,
            explanation: '正则表达式可以用于匹配、提取、替换字符串类型的脏数据。'
          },
          {
            id: 20,
            type: 'true_false',
            question: '数据清洗是数据分析的第一步。',
            correctAnswer: true,
            explanation: '数据清洗是数据分析流程中非常重要的一步，影响后续分析的准确性。'
          }
        ]
      },
      {
        id: 5,
        title: '数据可视化',
        content: '掌握使用 Matplotlib 和 Seaborn 创建专业的数据可视化图表，包括折线图、柱状图、散点图、饼图等，并学习如何美化图表和制作交互式图表。',
        examples: [
          '# 使用 Matplotlib 绘制销售趋势图\nimport matplotlib.pyplot as plt\n\nmonths = ["1月", "2月", "3月", "4月", "5月"]\nsales = [1200, 1500, 1800, 1600, 2000]\n\nplt.figure(figsize=(10, 6))\nplt.plot(months, sales, marker="o", linewidth=2)\nplt.title("月度销售额趋势", fontsize=16)\nplt.xlabel("月份", fontsize=12)\nplt.ylabel("销售额（万元）", fontsize=12)\nplt.grid(True, linestyle="--")\nplt.show()',
          '# 使用 Seaborn 绘制产品分布图\nimport seaborn as sns\n\nsns.barplot(x="产品类别", y="销售额", data=df, palette="Set2")\nplt.title("各类产品销售额对比")\nplt.xticks(rotation=45)\nplt.tight_layout()\nplt.show()'
        ],
        exercises: [
          {
            id: 1,
            question: '创建一张包含 4 个子图的可视化图表，分别展示：销售额趋势、客户年龄分布、产品销量排行、客户地区分布',
            solution: 'import matplotlib.pyplot as plt\nimport pandas as pd\nimport numpy as np\n\n# 设置中文字体\nplt.rcParams["font.sans-serif"] = ["SimHei"]\nplt.rcParams["axes.unicode_minus"] = False\n\n# 创建示例数据\ndf = pd.DataFrame({\n    "月份": ["1月", "2月", "3月", "4月", "5月"],\n    "销售额": [1200, 1500, 1800, 1600, 2000],\n    "产品": ["手机", "电脑", "平板", "耳机", "手表"],\n    "销量": [150, 80, 120, 200, 90]\n})\n\n# 创建 2x2 的子图布局\nfig, axes = plt.subplots(2, 2, figsize=(14, 10))\n\n# 1. 销售额趋势（折线图）\naxes[0, 0].plot(df["月份"], df["销售额"], marker="o", linewidth=2, color="#1f77b4")\naxes[0, 0].set_title("月度销售额趋势", fontsize=12, fontweight="bold")\naxes[0, 0].set_xlabel("月份")\naxes[0, 0].set_ylabel("销售额（万元）")\naxes[0, 0].grid(True, alpha=0.3)\n\n# 2. 客户年龄分布（直方图）\nages = np.random.normal(35, 10, 100)\naxes[0, 1].hist(ages, bins=15, color="#ff7f0e", edgecolor="white", alpha=0.7)\naxes[0, 1].set_title("客户年龄分布", fontsize=12, fontweight="bold")\naxes[0, 1].set_xlabel("年龄")\naxes[0, 1].set_ylabel("人数")\n\n# 3. 产品销量排行（水平柱状图）\naxes[1, 0].barh(df["产品"], df["销量"], color="#2ca02c", alpha=0.8)\naxes[1, 0].set_title("产品销量排行", fontsize=12, fontweight="bold")\naxes[1, 0].set_xlabel("销量")\naxes[1, 0].set_ylabel("产品")\n\n# 4. 客户地区分布（饼图）\nregions = ["华东", "华南", "华北", "西南", "其他"]\nsizes = [35, 25, 20, 15, 5]\ncolors = ["#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f"]\naxes[1, 1].pie(sizes, labels=regions, autopct="%1.1f%%", colors=colors, startangle=90)\naxes[1, 1].set_title("客户地区分布", fontsize=12, fontweight="bold")\n\n# 调整布局\nplt.tight_layout()\nplt.suptitle("数据分析报告 - 综合看板", fontsize=16, fontweight="bold", y=1.02)\nplt.savefig("dashboard.png", dpi=150, bbox_inches="tight")\nplt.show()\nprint("图表已保存为 dashboard.png")',
            explanation: '使用 subplots() 可以创建多个子图，每个子图用不同的图表类型展示数据。注意设置中文字体以正确显示中文标签。',
            commonErrors: [
              {
                error: '中文字体显示问题',
                description: '中文显示为方块或乱码',
                fix: '设置 plt.rcParams["font.sans-serif"] = ["SimHei"] 和 plt.rcParams["axes.unicode_minus"] = False'
              },
              {
                error: '子图布局混乱',
                description: '子图标签重叠或被截断',
                fix: '使用 plt.tight_layout() 自动调整布局，或使用 subplots_adjust() 手动调整'
              }
            ]
          },
          {
            id: 2,
            question: '创建一个交互式的销售数据分析仪表板，使用 Plotly 库展示多个指标',
            solution: 'import pandas as pd\nimport plotly.graph_objects as go\nfrom plotly.subplots import make_subplots\n\n# 创建数据\ndf = pd.DataFrame({\n    "月份": ["1月", "2月", "3月", "4月", "5月", "6月"],\n    "销售额": [1200, 1500, 1800, 1600, 2000, 2200],\n    "成本": [800, 1000, 1200, 1050, 1300, 1450],\n    "订单数": [120, 150, 180, 160, 200, 220]\n})\n\n# 计算利润\ndf["利润"] = df["销售额"] - df["成本"]\n\n# 创建子图\nfig = make_subplots(\n    rows=2, cols=2,\n    specs=[[{"colspan": 2}, None], [{}, {}]],\n    subplot_titles=("销售额与利润趋势", "订单数", "利润率"),\n    row_heights=[0.6, 0.4]\n)\n\n# 添加销售额和利润趋势线\nfig.add_trace(\n    go.Scatter(x=df["月份"], y=df["销售额"], name="销售额", \n               line=dict(color="#2563eb", width=2)),\n    row=1, col=1\n)\nfig.add_trace(\n    go.Scatter(x=df["月份"], y=df["利润"], name="利润", \n               line=dict(color="#16a34a", width=2)),\n    row=1, col=1\n)\n\n# 添加订单数柱状图\nfig.add_trace(\n    go.Bar(x=df["月份"], y=df["订单数"], name="订单数", \n           marker_color="#f59e0b"),\n    row=2, col=1\n)\n\n# 添加利润率饼图\nprofit_rate = (df["利润"] / df["销售额"] * 100).mean()\nfig.add_trace(\n    go.Pie(labels=["利润占比", "成本占比"], \n           values=[profit_rate, 100-profit_rate],\n           hole=0.5,\n           marker_colors=["#16a34a", "#e5e7eb"]),\n    row=2, col=2\n)\n\n# 更新布局\nfig.update_layout(\n    title_text="销售数据分析仪表板",\n    title_font_size=20,\n    showlegend=True,\n    template="plotly_white"\n)\n\n# 显示图表\nfig.show()\n\n# 保存为 HTML 文件（可交互）\nfig.write_html("sales_dashboard.html")\nprint("交互式仪表板已保存为 sales_dashboard.html")',
            explanation: 'Plotly 可以创建交互式图表，支持缩放、悬停查看详情等功能。生成的 HTML 文件可以直接在浏览器中打开并交互操作。',
            commonErrors: [
              {
                error: 'Plotly 版本问题',
                description: '某些函数在新版本中不可用',
                fix: '确保安装最新版本的 plotly pip install plotly'
              },
              {
                error: '中文显示问题',
                description: '在 HTML 中中文显示不正确',
                fix: '设置 fig.update_layout(font=dict(family="Arial, Microsoft YaHei"))'
              }
            ]
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: '以下哪个函数用于绘制折线图？',
            options: ['plt.bar()', 'plt.plot()', 'plt.scatter()', 'plt.hist()'],
            correctAnswer: 'plt.plot()',
            explanation: 'plt.plot() 是 Matplotlib 中用于绘制折线图的函数。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: 'plt.show() 的作用是什么？',
            options: ['保存图表', '显示图表', '创建图表', '关闭图表'],
            correctAnswer: '显示图表',
            explanation: 'plt.show() 用于在屏幕或笔记本中显示已经创建的图表。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '以下哪个方法用于设置图表标题？',
            options: ['plt.label()', 'plt.title()', 'plt.header()', 'plt.text()'],
            correctAnswer: 'plt.title()',
            explanation: 'plt.title() 用于设置图表的标题。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: '在 Matplotlib 中，创建子图的方法是？',
            options: ['plt.subplot()', 'plt.subplots()', 'plt.subplot2grid()', '以上都是'],
            correctAnswer: '以上都是',
            explanation: 'Matplotlib 提供多种创建子图的方法，plt.subplots() 是最常用的面向对象接口。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: 'Seaborn 主要用于什么？',
            options: ['统计分析', '统计可视化', '数据清洗', '数据存储'],
            correctAnswer: '统计可视化',
            explanation: 'Seaborn 是基于 Matplotlib 的高级统计可视化库，提供更美观的默认样式。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: 'plt.figure(figsize=(12, 6)) 中的 figsize 参数单位是什么？',
            options: ['厘米', '英寸', '像素', '毫米'],
            correctAnswer: '英寸',
            explanation: 'Matplotlib 中 figsize 参数的单位是英寸，1 英寸约等于 2.54 厘米。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: '以下哪个图表适合展示各部分占总体的比例？',
            options: ['折线图', '柱状图', '饼图', '散点图'],
            correctAnswer: '饼图',
            explanation: '饼图适合展示各部分占总体的比例关系，如市场份额构成。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: 'plt.savefig() 用于什么？',
            options: ['读取图片', '显示图片', '保存图表', '复制图表'],
            correctAnswer: '保存图表',
            explanation: 'plt.savefig() 用于将图表保存为图片文件，支持 PNG、JPG、SVG 等多种格式。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: 'Plotly 图表的特点是什么？',
            options: ['只能静态展示', '支持交互', '无法保存', '不支持中文'],
            correctAnswer: '支持交互',
            explanation: 'Plotly 可以创建交互式图表，支持缩放、悬停提示、数据选择等交互功能。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: 'plt.grid(True) 的作用是什么？',
            options: ['添加标题', '显示网格', '设置颜色', '添加标签'],
            correctAnswer: '显示网格',
            explanation: 'plt.grid(True) 用于在图表中显示网格线，便于读取数据值。'
          },
          {
            id: 11,
            type: 'true_false',
            question: '柱状图适合展示随时间变化的趋势。',
            correctAnswer: false,
            explanation: '折线图适合展示随时间变化的趋势，柱状图适合展示分类数据的对比。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'Matplotlib 默认支持中文显示。',
            correctAnswer: false,
            explanation: 'Matplotlib 默认不支持中文，需要设置中文字体才能正常显示中文。'
          },
          {
            id: 13,
            type: 'true_false',
            question: '散点图可以展示两个变量之间的关系。',
            correctAnswer: true,
            explanation: '散点图通过点的位置展示两个变量的对应关系，常用于分析相关性。'
          },
          {
            id: 14,
            type: 'true_false',
            question: 'plt.legend() 用于添加图例。',
            correctAnswer: true,
            explanation: 'plt.legend() 用于在图表中添加图例，标识不同数据系列。'
          },
          {
            id: 15,
            type: 'true_false',
            question: '一个图表可以有多个子图。',
            correctAnswer: true,
            explanation: '使用 plt.subplots() 或 plt.subplot() 可以创建包含多个子图的布局。'
          },
          {
            id: 16,
            type: 'true_false',
            question: '饼图可以展示多个分类的数值比较。',
            correctAnswer: true,
            explanation: '饼图通过扇形大小展示各分类在总体中的占比。'
          },
          {
            id: 17,
            type: 'true_false',
            question: '直方图和柱状图是一样的。',
            correctAnswer: false,
            explanation: '直方图用于展示连续数据的分布，柱状图用于展示分类数据。'
          },
          {
            id: 18,
            type: 'true_false',
            question: 'Seaborn 的 sns.set_style() 可以设置整体图表风格。',
            correctAnswer: true,
            explanation: 'sns.set_style() 可以设置图表的整体风格，如 whitegrid、darkgrid 等。'
          },
          {
            id: 19,
            type: 'true_false',
            question: 'plt.xlabel() 用于设置 Y 轴标签。',
            correctAnswer: false,
            explanation: 'plt.xlabel() 用于设置 X 轴标签，plt.ylabel() 用于设置 Y 轴标签。'
          },
          {
            id: 20,
            type: 'true_false',
            question: '交互式图表只能使用 Plotly 库创建。',
            correctAnswer: false,
            explanation: '除了 Plotly，还可以使用 Bokeh、Altair、pyecharts 等库创建交互式图表。'
          }
        ]
      },
      {
        id: 6,
        title: '统计分析基础',
        content: '学习描述性统计分析、概率分布、假设检验和相关性分析，掌握使用统计方法从数据中提取洞察的能力。',
        examples: [
          '# 描述性统计\nimport pandas as pd\ndf.describe()\nprint("均值:", df["sales"].mean())\nprint("中位数:", df["sales"].median())\nprint("标准差:", df["sales"].std())',
          '# 相关性分析\nimport seaborn as sns\nsns.heatmap(df.corr(), annot=True, cmap="RdYlGn")'
        ],
        exercises: [
          {
            id: 1,
            question: '对销售数据进行描述性统计分析，计算集中趋势指标（均值、中位数、众数）和离散程度指标（方差、标准差、极差），并生成统计报告',
            solution: 'import pandas as pd\nimport numpy as np\n\n# 读取数据\ndf = pd.read_csv("sales_data.csv")\nsales = df["销售额"]\n\n# 计算集中趋势指标\nmean_value = sales.mean()\nmedian_value = sales.median()\nmode_value = sales.mode()[0]  # 众数可能有多个，取第一个\n\n# 计算离散程度指标\nvariance = sales.var()  # 方差\nstd_dev = sales.std()   # 标准差\nmin_val = sales.min()\nmax_val = sales.max()\nrange_val = max_val - min_val  # 极差\n\n# 计算分布形状指标\nskewness = sales.skew()  # 偏度\nkurtosis = sales.kurt()  # 峰度\n\n# 生成统计报告\nreport = f"""销售数据描述性统计分析报告\n{"="*50}\n\n一、集中趋势指标\n- 均值: {mean_value:.2f} 万元\n- 中位数: {median_value:.2f} 万元\n- 众数: {mode_value:.2f} 万元\n\n二、离散程度指标\n- 方差: {variance:.2f}\n- 标准差: {std_dev:.2f} 万元\n- 极差: {range_val:.2f} 万元\n- 变异系数: {(std_dev/mean_value*100):.2f}%\n\n三、数据分布形状\n- 偏度: {skewness:.2f} {"(右偏)" if skewness > 0 else "(左偏)"}\n- 峰度: {kurtosis:.2f} {"(尖峰)" if kurtosis > 0 else "(平峰)"}\n\n四、分位数信息\n- 25%分位数: {sales.quantile(0.25):.2f} 万元\n- 50%分位数: {sales.quantile(0.50):.2f} 万元\n- 75%分位数: {sales.quantile(0.75):.2f} 万元\n- IQR: {sales.quantile(0.75) - sales.quantile(0.25):.2f} 万元\n\n{"="*50}\n分析结论:\n{"均值大于中位数，数据右偏" if mean_value > median_value else "均值小于中位数，数据左偏"}\n标准差较大，数据较为分散\n"""\n\nprint(report)',
            explanation: '描述性统计是数据分析的基础，通过均值、中位数等指标了解数据的中心位置，通过方差、标准差了解数据的离散程度。',
            commonErrors: [
              {
                error: '混淆方差和标准差',
                description: '没有理解方差的单位是标准差的平方',
                fix: '方差的单位与原始数据不同，标准差的单位与原始数据相同'
              },
              {
                error: '忽略偏度和峰度的业务含义',
                description: '只关注数值而不理解分布形状',
                fix: '结合业务场景解释偏度和峰度，如右偏可能表示存在高价值客户'
              }
            ]
          },
          {
            id: 2,
            question: '进行两个变量之间的相关性分析，并判断是否具有统计显著性',
            solution: 'import pandas as pd\nimport numpy as np\nfrom scipy import stats\n\n# 读取数据\ndf = pd.read_csv("marketing_data.csv")\n\n# 计算皮尔逊相关系数\ncorrelation = df["广告投入"].corr(df["销售额"])\nprint(f"皮尔逊相关系数: {correlation:.4f}")\n\n# 进行显著性检验\n# H0: 相关系数 = 0 (两个变量不相关)\n# H1: 相关系数 != 0 (两个变量相关)\nn = len(df)\nt_statistic, p_value = stats.pearsonr(df["广告投入"], df["销售额"])\n\nprint(f"\\n统计检验结果:")\nprint(f"- t 统计量: {t_statistic:.4f}")\nprint(f"- p 值: {p_value:.6f}")\n\n# 判断相关性强度\ndef interpret_correlation(r):\n    r_abs = abs(r)\n    if r_abs < 0.3:\n        return "弱相关"\n    elif r_abs < 0.7:\n        return "中等相关"\n    else:\n        return "强相关"\n\ndef interpret_significance(p):\n    if p < 0.01:\n        return "在 1% 显著性水平下显著"\n    elif p < 0.05:\n        return "在 5% 显著性水平下显著"\n    else:\n        return "不显著"\n\nprint(f"\\n相关性解释: {interpret_correlation(correlation)}")\nprint(f"统计显著性: {interpret_significance(p_value)}")\n\n# 置信区间\nconfidence_level = 0.95\ndegrees_freedom = n - 2\nt_critical = stats.t.ppf((1 + confidence_level) / 2, degrees_freedom)\nr_z = np.arctanh(correlation)  # Fisher z变换\nse = 1 / np.sqrt(n - 3)\nz_lower = r_z - t_critical * se\nz_upper = r_z + t_critical * se\nr_lower = np.tanh(z_lower)\nr_upper = np.tanh(z_upper)\n\nprint(f"\\n95% 置信区间: [{r_lower:.4f}, {r_upper:.4f}]")',
            explanation: '相关性分析不仅要计算相关系数，还要进行显著性检验。p 值小于 0.05 表示相关性在统计上是显著的。',
            commonErrors: [
              {
                error: '混淆相关性和因果关系',
                description: '相关性不等于因果关系',
                fix: '只能说两个变量相关，需要进一步分析才能确定因果关系'
              },
              {
                error: '忽略异常值影响',
                description: '异常值会显著影响相关系数',
                fix: '先进行数据清洗，处理异常值后再计算相关性'
              }
            ]
          }
        ],
        quizzes: [
          {
            id: 1,
            type: 'multiple_choice',
            question: '以下哪个指标反映数据的中心位置？',
            options: ['标准差', '方差', '均值', '极差'],
            correctAnswer: '均值',
            explanation: '均值是反映数据中心位置的最常用指标。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: '当数据中存在极端值时，哪个指标更稳健？',
            options: ['均值', '中位数', '众数', '标准差'],
            correctAnswer: '中位数',
            explanation: '中位数不受极端值影响，比均值更能反映数据的中心位置。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '标准差和方差的关系是？',
            options: ['标准差 = 方差²', '方差 = 标准差²', '两者相等', '没有关系'],
            correctAnswer: '方差 = 标准差²',
            explanation: '标准差是方差的平方根，方差是标准差的平方。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: '皮尔逊相关系数的取值范围是？',
            options: ['[-1, 1]', '[0, 1]', '[-∞, +∞]', '[0, +∞]'],
            correctAnswer: '[-1, 1]',
            explanation: '皮尔逊相关系数 r 的取值范围是 [-1, 1]，其中 1 表示完全正相关，-1 表示完全负相关。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: 'p 值小于 0.05 表示什么？',
            options: ['两组数据相同', '差异由随机因素造成', '差异具有统计学意义', '数据有错误'],
            correctAnswer: '差异具有统计学意义',
            explanation: 'p < 0.05 表示观察到的差异由随机因素造成的概率小于 5%，通常认为差异是显著的。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '以下哪个不是离散程度指标？',
            options: ['方差', '标准差', '极差', '均值'],
            correctAnswer: '均值',
            explanation: '均值是集中趋势指标，方差、标准差、极差都是离散程度指标。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: '偏度为正值表示什么？',
            options: ['数据左偏', '数据右偏', '数据对称', '数据均匀'],
            correctAnswer: '数据右偏',
            explanation: '偏度为正表示数据右偏（长尾在右），均值大于中位数。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: '在正态分布中，均值、中位数和众数的关系是？',
            options: ['均值>中位数>众数', '均值<中位数<众数', '三者相等', '没有关系'],
            correctAnswer: '三者相等',
            explanation: '在完全正态分布中，均值、中位数和众数是相等的。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: '以下哪个是假设检验的原假设？',
            options: ['H1', 'H0', 'Ha', 'Hp'],
            correctAnswer: 'H0',
            explanation: 'H0 表示原假设（null hypothesis），H1 或 Ha 表示备择假设。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: '置信区间为 95% 表示什么？',
            options: ['有 95% 的数据落在这个区间', '总体参数有 95% 的概率落在这个区间', '这个区间包含 95% 的样本', '以上都对'],
            correctAnswer: '总体参数有 95% 的概率落在这个区间',
            explanation: '置信区间表示如果重复抽样多次，有 95% 的置信区间会包含真实的总体参数。'
          },
          {
            id: 11,
            type: 'true_false',
            question: '均值对极端值不敏感。',
            correctAnswer: false,
            explanation: '均值对极端值非常敏感，一个极端值会显著影响均值。'
          },
          {
            id: 12,
            type: 'true_false',
            question: '相关系数为 0 表示两个变量完全不相关。',
            correctAnswer: false,
            explanation: '皮尔逊相关系数为 0 只表示线性关系不存在，但可能存在非线性关系。'
          },
          {
            id: 13,
            type: 'true_false',
            question: '标准差的单位与原始数据相同。',
            correctAnswer: true,
            explanation: '标准差与原始数据有相同的单位，方差的单位是原始数据单位的平方。'
          },
          {
            id: 14,
            type: 'true_false',
            question: '样本量越大，样本均值越接近总体均值。',
            correctAnswer: true,
            explanation: '根据大数定律和中心极限定理，样本量越大，样本统计量越接近总体参数。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'p < 0.01 表示相关性比 p < 0.05 更显著。',
            correctAnswer: true,
            explanation: 'p 值越小，拒绝原假设的证据越强，相关性越显著。'
          },
          {
            id: 16,
            type: 'true_false',
            question: '相关关系意味着因果关系。',
            correctAnswer: false,
            explanation: '相关不等于因果，两个变量相关可能是由于第三个变量造成的。'
          },
          {
            id: 17,
            type: 'true_false',
            question: '极差越大，数据越分散。',
            correctAnswer: true,
            explanation: '极差是最大值与最小值的差，差值越大说明数据的范围越大，越分散。'
          },
          {
            id: 18,
            type: 'true_false',
            question: '众数是一组数据中出现次数最多的值。',
            correctAnswer: true,
            explanation: '众数是数据集中出现频率最高的值，适合描述分类数据。'
          },
          {
            id: 19,
            type: 'true_false',
            question: '正态分布的偏度为 0。',
            correctAnswer: true,
            explanation: '正态分布是对称分布，偏度等于 0。'
          },
          {
            id: 20,
            type: 'true_false',
            question: '可以使用 t 检验比较两个组的均值是否有显著差异。',
            correctAnswer: true,
            explanation: 't 检验是常用的假设检验方法，用于比较两组数据的均值是否有显著差异。'
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
