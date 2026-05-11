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
}

export interface Course {
  id: number;
  title: string;
  description: string;
  topics: string[];
  duration: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: '销售数据分析',
    description: '分析电商销售数据，识别销售趋势、热门商品和客户购买行为模式。',
    skills: ['Pandas', 'Matplotlib', '数据清洗', '趋势分析'],
    difficulty: 'beginner',
    category: '数据处理',
    dataset: '电商销售记录（订单、商品、用户）',
    objectives: ['数据清洗与预处理', '销售趋势可视化', '商品销量排名', '客户购买分析'],
    estimatedHours: 8
  },
  {
    id: 2,
    title: '客户分群分析',
    description: '使用聚类算法对客户进行分群，识别不同客户群体特征，为精准营销提供依据。',
    skills: ['K-Means', '客户画像', '特征工程', 'Seaborn'],
    difficulty: 'intermediate',
    category: '机器学习',
    dataset: '客户购买行为数据',
    objectives: ['客户特征提取', 'K-Means聚类实现', '客户群体分析', '可视化展示'],
    estimatedHours: 12
  },
  {
    id: 3,
    title: '财务报表分析',
    description: '分析企业财务数据，评估财务健康状况，识别潜在风险和机遇。',
    skills: ['财务比率', '趋势分析', '财务建模', '报表可视化'],
    difficulty: 'intermediate',
    category: '商业分析',
    dataset: '上市公司财务报表',
    objectives: ['财务指标计算', '趋势对比分析', '财务健康评估', '可视化报告'],
    estimatedHours: 10
  },
  {
    id: 4,
    title: '市场调研数据分析',
    description: '分析问卷调查数据，提取消费者洞察，支持商业决策。',
    skills: ['描述统计', '交叉分析', '问卷分析', '数据可视化'],
    difficulty: 'beginner',
    category: '数据处理',
    dataset: '消费者调研问卷数据',
    objectives: ['问卷数据清洗', '描述性统计分析', '交叉表分析', '可视化报告'],
    estimatedHours: 8
  },
  {
    id: 5,
    title: '库存优化预测',
    description: '基于历史数据预测库存需求，优化库存管理，降低成本。',
    skills: ['时间序列', '预测模型', 'ARIMA', 'Prophet'],
    difficulty: 'advanced',
    category: '预测分析',
    dataset: '库存出入库记录',
    objectives: ['时间序列分析', '预测模型构建', '库存优化建议', '可视化展示'],
    estimatedHours: 14
  },
  {
    id: 6,
    title: '营销效果分析',
    description: '评估不同营销渠道的ROI，优化营销资源配置。',
    skills: ['A/B测试', '归因分析', 'ROI计算', '漏斗分析'],
    difficulty: 'intermediate',
    category: '商业分析',
    dataset: '营销活动数据',
    objectives: ['营销效果评估', '渠道对比分析', '归因模型构建', '优化建议'],
    estimatedHours: 10
  },
  {
    id: 7,
    title: '客户流失预测',
    description: '预测客户流失概率，识别高风险客户，制定挽留策略。',
    skills: ['分类模型', '特征工程', 'XGBoost', '模型评估'],
    difficulty: 'advanced',
    category: '机器学习',
    dataset: '客户行为数据',
    objectives: ['特征工程', '分类模型训练', '流失概率预测', '可解释性分析'],
    estimatedHours: 14
  },
  {
    id: 8,
    title: '价格优化分析',
    description: '分析价格弹性，优化定价策略，最大化收益。',
    skills: ['回归分析', '价格敏感度', '需求预测', '收益优化'],
    difficulty: 'advanced',
    category: '商业分析',
    dataset: '产品销售与价格数据',
    objectives: ['价格弹性分析', '需求曲线拟合', '定价策略优化', '收益预测'],
    estimatedHours: 12
  },
  {
    id: 9,
    title: '供应链数据分析',
    description: '分析供应链物流数据，优化供应链效率，降低成本。',
    skills: ['网络分析', '路径优化', '物流分析', '数据可视化'],
    difficulty: 'intermediate',
    category: '数据处理',
    dataset: '供应链物流数据',
    objectives: ['物流路径分析', '供应链可视化', '瓶颈识别', '优化建议'],
    estimatedHours: 10
  },
  {
    id: 10,
    title: '综合商业分析报告',
    description: '整合多维度数据，生成商业洞察报告，支持战略决策。',
    skills: ['综合分析', '报告撰写', '数据可视化', '商业洞察'],
    difficulty: 'advanced',
    category: '综合项目',
    dataset: '多维度企业数据',
    objectives: ['数据整合', '多维度分析', '报告撰写', '商业建议'],
    estimatedHours: 16
  }
];

export const courses: Course[] = [
  {
    id: 1,
    title: 'Python基础入门',
    description: '学习Python编程语言基础，掌握数据类型、控制结构和函数。',
    topics: ['Python语法', '数据结构', '函数编程', '文件操作'],
    duration: '8小时'
  },
  {
    id: 2,
    title: 'Pandas数据处理',
    description: '掌握Pandas库的核心功能，学习数据清洗、转换和分析技巧。',
    topics: ['DataFrame操作', '数据清洗', '数据聚合', '合并连接'],
    duration: '10小时'
  },
  {
    id: 3,
    title: '数据可视化',
    description: '学习Matplotlib和Seaborn库，创建专业的数据可视化图表。',
    topics: ['Matplotlib基础', 'Seaborn高级图表', '交互式可视化', '图表美化'],
    duration: '8小时'
  },
  {
    id: 4,
    title: '统计分析',
    description: '掌握描述统计和推论统计方法，为数据分析提供理论支持。',
    topics: ['描述统计', '假设检验', '相关分析', '回归分析'],
    duration: '12小时'
  },
  {
    id: 5,
    title: '机器学习入门',
    description: '学习常用机器学习算法，掌握模型训练和评估方法。',
    topics: ['监督学习', '聚类分析', '模型评估', '特征工程'],
    duration: '16小时'
  }
];

export const learningStats = {
  totalUsers: 12580,
  completedProjects: 45230,
  certificates: 8920,
  avgCompletionRate: 87
};
