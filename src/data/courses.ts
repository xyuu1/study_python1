// 课程数据结构定义
export interface Exercise {
  id: number;
  type: 'coding' | 'multiple_choice' | 'true_false';
  question: string;
  starterCode?: string;
  solution: string;
  explanation: string;
  commonErrors?: {
    error: string;
    description: string;
    solution: string;
  }[];
}

export interface Quiz {
  id: number;
  type: 'multiple_choice' | 'true_false';
  question: string;
  options?: string[];
  correctAnswer: string | boolean;
  explanation: string;
}

export interface Chapter {
  id: number;
  title: string;
  content: string;
  codeExamples: {
    title: string;
    code: string;
  }[];
  exercises: Exercise[];
  quiz: Quiz[];
}

export interface Course {
  id: number;
  title: string;
  description: string;
  totalDuration: string;
  difficulty: '基础' | '进阶' | '高级';
  chapters: Chapter[];
}

// 课程数据
export const courses: Course[] = [
  {
    id: 1,
    title: '数据分析技术',
    description: '学习Python数据分析核心技术，包括Python基础、数据来源、数据采集、数据清洗、数据可视化和统计分析。',
    totalDuration: '24小时',
    difficulty: '基础',
    chapters: [
      // 第1章：Python基础
      {
        id: 1,
        title: 'Python基础',
        content: '本章学习Python编程语言的基础知识，包括变量、数据类型、控制流和函数等核心概念，为后续数据分析学习打下坚实基础。',
        codeExamples: [
          {
            title: '变量与数据类型',
            code: `# 变量赋值
name = "张三"
age = 20
height = 1.75
is_student = True

print(f"姓名：{name}")
print(f"年龄：{age}")
print(f"身高：{height}")
print(f"是否学生：{is_student}")

# 查看数据类型
print(type(name))
print(type(age))
print(type(height))
print(type(is_student))`
          },
          {
            title: '列表与字典操作',
            code: `# 列表操作
numbers = [1, 2, 3, 4, 5]
numbers.append(6)
print(f"列表长度：{len(numbers)}")
print(f"最大值：{max(numbers)}")
print(f"最小值：{min(numbers)}")
print(f"求和：{sum(numbers)}")

# 字典操作
student = {
    "name": "张三",
    "age": 20,
    "score": 85.5
}
print(f"学生姓名：{student['name']}")
student['grade'] = 'A'
print(f"添加年级后：{student}")`
          },
          {
            title: '函数定义与调用',
            code: `# 定义函数
def greet(name):
    """问候函数"""
    return f"你好，{name}！"

def calculate_stats(numbers):
    """计算统计信息"""
    return {
        'sum': sum(numbers),
        'avg': sum(numbers) / len(numbers),
        'max': max(numbers),
        'min': min(numbers)
    }

# 调用函数
print(greet("数据分析"))
nums = [10, 20, 30, 40, 50]
stats = calculate_stats(nums)
print(f"统计数据：{stats}")`
          }
        ],
        exercises: [
          {
            id: 1,
            type: 'coding',
            question: '创建一个函数，接收一个列表，计算并返回列表中的最大值和最小值',
            starterCode: `def find_min_max(numbers):
    # 在这里编写代码

# 测试
result = find_min_max([85, 92, 78, 95, 88])
print(f"最大值: {result[0]}, 最小值: {result[1]}")`,
            solution: `def find_min_max(numbers):
    """计算列表的最大值和最小值"""
    if not numbers:
        return None, None
    return max(numbers), min(numbers)

# 测试
result = find_min_max([85, 92, 78, 95, 88])
print(f"最大值: {result[0]}, 最小值: {result[1]}")`,
            explanation: '使用 Python 内置的 max() 和 min() 函数可以快速找到列表中的最大值和最小值。注意处理空列表的情况。',
            commonErrors: [
              {
                error: '空列表处理',
                description: '没有处理空列表的情况',
                solution: '添加空列表检查 if not numbers: return None, None'
              },
              {
                error: '返回格式错误',
                description: '返回值格式不正确',
                solution: '使用元组返回多个值 return max_value, min_value'
              }
            ]
          },
          {
            id: 2,
            type: 'coding',
            question: '编写一个函数，统计字符串中每个字符出现的次数',
            starterCode: `def count_chars(text):
    # 在这里编写代码

# 测试
result = count_chars("数据分析技术")
print(result)`,
            solution: `def count_chars(text):
    """统计字符串中每个字符出现的次数"""
    char_count = {}
    for char in text:
        if char in char_count:
            char_count[char] += 1
        else:
            char_count[char] = 1
    return char_count

# 测试
result = count_chars("数据分析技术")
print(result)`,
            explanation: '使用字典来统计每个字符出现的次数。遍历字符串中的每个字符，在字典中记录或增加计数。',
            commonErrors: [
              {
                error: '未初始化字典',
                description: '直接使用字典而不初始化',
                solution: '使用 char_count = {} 初始化空字典'
              },
              {
                error: '字符统计遗漏',
                description: '只统计了部分字符',
                solution: '确保遍历整个字符串 for char in text'
              }
            ]
          },
          {
            id: 3,
            type: 'coding',
            question: '使用列表推导式生成1到100之间的偶数列表',
            starterCode: `# 使用列表推导式生成偶数列表
evens = # 在这里编写代码

print(f"偶数列表：{evens}")
print(f"偶数个数：{len(evens)}")`,
            solution: `# 使用列表推导式生成偶数列表
evens = [x for x in range(1, 101) if x % 2 == 0]

print(f"偶数列表：{evens}")
print(f"偶数个数：{len(evens)}")`,
            explanation: '列表推导式 [表达式 for item in iterable if 条件]，结合 range 和取模运算可以筛选偶数。',
            commonErrors: [
              {
                error: 'range范围错误',
                description: 'range范围不正确导致遗漏数据',
                solution: '使用 range(1, 101) 包含1到100'
              },
              {
                error: '条件判断错误',
                description: 'if条件写错导致结果不对',
                solution: 'if x % 2 == 0 判断偶数'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'multiple_choice',
            question: 'Python中，以下哪个是正确的变量命名？',
            options: ['2name', 'my-name', 'my_name', 'class'],
            correctAnswer: 'my_name',
            explanation: 'Python变量名必须以字母或下划线开头，不能以数字开头。不能使用连字符（-），不能使用保留关键字。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: 'type()函数的作用是什么？',
            options: ['修改变量类型', '返回变量的类型', '创建新变量', '删除变量'],
            correctAnswer: '返回变量的类型',
            explanation: 'type()函数返回变量或值的数据类型。例如：type(123) 返回 <class \'int\'>。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '以下哪个是浮点数的例子？',
            options: ['42', '"3.14"', '3.14', 'True'],
            correctAnswer: '3.14',
            explanation: '浮点数（float）是包含小数点的数值类型。"3.14"是字符串，42是整数，True是布尔值。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: 'Python中整数除法使用哪个运算符？',
            options: ['/', '//', '%', '*'],
            correctAnswer: '//',
            explanation: '// 是整数除法运算符，返回整数结果。/ 是普通除法，返回浮点数。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: '字符串可以使用什么符号定义？',
            options: ['只有双引号', '只有单引号', '单引号或双引号', '只有中括号'],
            correctAnswer: '单引号或双引号',
            explanation: 'Python中字符串可以用单引号（\' \'）或双引号（" "）定义，两者效果相同。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: 'len()函数不能用于以下哪个类型？',
            options: ['字符串', '列表', '字典', '整数'],
            correctAnswer: '整数',
            explanation: 'len()函数用于获取序列（字符串、列表、元组等）的长度，整数不是序列类型。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: 'input()函数的返回值类型是什么？',
            options: ['整数', '浮点数', '字符串', '布尔值'],
            correctAnswer: '字符串',
            explanation: 'input()函数总是返回字符串类型。如果需要数值，需要用int()或float()转换。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: 'Python中的布尔值True和False分别等价于？',
            options: ['1和0', '"1"和"0"', '10和0', '其他'],
            correctAnswer: '1和0',
            explanation: '在Python中，True等价于1，False等价于0。可以在数值运算中使用。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: 'str(123)的作用是什么？',
            options: ['转成整数', '转成浮点数', '转成字符串', '转成布尔值'],
            correctAnswer: '转成字符串',
            explanation: 'str()函数将其他类型转换为字符串。例如：str(123) 返回 "123"。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: '以下哪个是正确的注释符号？',
            options: ['//', '/* */', '#', '--'],
            correctAnswer: '#',
            explanation: 'Python中使用 # 符号创建单行注释，# 后面的内容会被解释器忽略。'
          },
          {
            id: 11,
            type: 'true_false',
            question: 'Python是强类型语言，变量类型一旦确定就不能改变。',
            correctAnswer: false,
            explanation: 'Python是强类型语言，但变量可以重新赋值为不同类型的值。变量本身没有类型，类型属于值。'
          },
          {
            id: 12,
            type: 'true_false',
            question: '在Python中，可以同时给多个变量赋相同的值，如 a = b = 10。',
            correctAnswer: true,
            explanation: 'Python支持链式赋值，可以同时给多个变量赋相同的值。'
          },
          {
            id: 13,
            type: 'true_false',
            question: '字符串是不可变的，不能修改字符串中的单个字符。',
            correctAnswer: true,
            explanation: 'Python中的字符串是不可变对象，不能通过索引修改。但可以重新赋值整个字符串。'
          },
          {
            id: 14,
            type: 'true_false',
            question: '浮点数运算的结果总是精确的。',
            correctAnswer: false,
            explanation: '浮点数运算可能存在精度问题，如 0.1 + 0.2 = 0.30000000000000004。对于精确计算应使用Decimal模块。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'Python中可以使用下划线分隔数字提高可读性，如 1_000_000。',
            correctAnswer: true,
            explanation: 'Python 3.6+支持使用下划线分隔数字，这在表示大数值时非常有用。'
          },
          {
            id: 16,
            type: 'true_false',
            question: 'None表示空值，可以用作数字0。',
            correctAnswer: false,
            explanation: 'None是Python的特殊空值，但不是数字0。在布尔上下文中，None被视为False。'
          },
          {
            id: 17,
            type: 'true_false',
            question: 'Python变量名区分大小写，Name和name是不同的变量。',
            correctAnswer: true,
            explanation: 'Python是区分大小写的语言，所以Name、name、NAME是三个不同的变量名。'
          },
          {
            id: 18,
            type: 'true_false',
            question: '布尔运算符and表示"与"，or表示"或"。',
            correctAnswer: true,
            explanation: 'and表示逻辑与（两者都为True才为True），or表示逻辑或（至少一个为True就为True）。'
          },
          {
            id: 19,
            type: 'true_false',
            question: '在Python中，变量名可以以字母开头或下划线开头。',
            correctAnswer: true,
            explanation: 'Python变量名必须以字母或下划线开头，可以包含字母、数字和下划线。'
          },
          {
            id: 20,
            type: 'true_false',
            question: '使用type()函数可以查看变量的数据类型。',
            correctAnswer: true,
            explanation: 'type()函数返回变量的数据类型，是Python中常用的调试和检查工具。'
          }
        ]
      },
      // 第2章：数据来源与类型
      {
        id: 2,
        title: '数据来源与类型',
        content: '本章学习常见数据源的获取方式，以及CSV、JSON、Excel等数据格式的特点和使用方法。',
        codeExamples: [
          {
            title: '读取CSV文件',
            code: `import pandas as pd

# 读取CSV文件
df = pd.read_csv('data.csv')
print("CSV文件内容：")
print(df.head())
print(f"\\n数据形状: {df.shape}")
print(f"\\n数据类型:\\n{df.dtypes}")`
          },
          {
            title: '读取Excel文件',
            code: `import pandas as pd

# 读取Excel文件（支持xlsx格式）
df = pd.read_excel('data.xlsx', sheet_name='Sheet1')
print("Excel文件内容：")
print(df.head())
print(f"\\n工作表名称: {df.columns.tolist()}")`
          },
          {
            title: '读取JSON数据',
            code: `import pandas as pd

# 读取JSON文件
df = pd.read_json('data.json')
print("JSON文件内容：")
print(df.head())

# JSON字符串解析
json_str = '{"name": ["张三", "李四"], "score": [85, 92]}'
df2 = pd.read_json(json_str)
print("\\nJSON字符串解析：")
print(df2)`
          }
        ],
        exercises: [
          {
            id: 1,
            type: 'coding',
            question: '编写代码读取CSV文件并显示前5行数据',
            starterCode: `import pandas as pd

# 读取CSV文件
# 在这里编写代码

print(df.head())`,
            solution: `import pandas as pd

# 读取CSV文件
df = pd.read_csv('sales_data.csv')

print(df.head())`,
            explanation: '使用 pandas 的 read_csv() 函数读取CSV文件，head() 方法默认显示前5行数据。',
            commonErrors: [
              {
                error: '文件路径错误',
                description: 'CSV文件路径不正确',
                solution: '确保文件路径正确，或使用绝对路径'
              },
              {
                error: '编码问题',
                description: '文件编码导致读取失败',
                solution: '添加 encoding 参数，如 read_csv(file, encoding="utf-8")'
              }
            ]
          },
          {
            id: 2,
            type: 'coding',
            question: '将一个Python字典转换为DataFrame',
            starterCode: `import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [20, 22, 21],
    '分数': [85.5, 92.0, 78.5]
}

# 将字典转换为DataFrame
# 在这里编写代码

print(df)`,
            solution: `import pandas as pd

data = {
    '姓名': ['张三', '李四', '王五'],
    '年龄': [20, 22, 21],
    '分数': [85.5, 92.0, 78.5]
}

# 将字典转换为DataFrame
df = pd.DataFrame(data)

print(df)`,
            explanation: '使用 pd.DataFrame() 函数可以直接将Python字典转换为DataFrame，字典的键会成为列名。',
            commonErrors: [
              {
                error: '键值长度不一致',
                description: '字典中各列表长度不同',
                solution: '确保所有键对应的列表长度一致'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'multiple_choice',
            question: 'Pandas中读取CSV文件的函数是？',
            options: ['read_csv()', 'read_excel()', 'read_json()', 'read_sql()'],
            correctAnswer: 'read_csv()',
            explanation: 'read_csv()是Pandas用于读取CSV格式文件的函数。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: '以下哪种不是Pandas支持的数据类型？',
            options: ['CSV', 'JSON', 'XML', 'Excel'],
            correctAnswer: 'XML',
            explanation: 'Pandas支持CSV、JSON、Excel等格式，但XML需要使用其他库如lxml来解析。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: 'DataFrame的shape属性返回什么？',
            options: ['行数', '列数', '行数和列数', '数据类型'],
            correctAnswer: '行数和列数',
            explanation: 'shape返回一个元组(shape[0]是行数，shape[1]是列数)。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: '如何查看DataFrame的前几行？',
            options: ['head()', 'tail()', 'info()', 'describe()'],
            correctAnswer: 'head()',
            explanation: 'head()方法显示前几行，默认5行。tail()显示后几行。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: 'dtypes属性返回什么信息？',
            options: ['数据内容', '数据类型', '数据形状', '数据统计'],
            correctAnswer: '数据类型',
            explanation: 'dtypes返回每列的数据类型，是一个Series对象。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '读取Excel文件需要哪个库的支持？',
            options: ['numpy', 'openpyxl或xlrd', 'requests', 'beautifulsoup4'],
            correctAnswer: 'openpyxl或xlrd',
            explanation: '读取xlsx格式需要openpyxl，读取老格式xls需要xlrd。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: 'JSON数据格式使用什么分隔键值对？',
            options: ['冒号(:)', '等号(=)', '分号(;)', '逗号(,)'],
            correctAnswer: '冒号(:)',
            explanation: 'JSON格式使用冒号分隔键和值，如{"name": "张三"}。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: '如何将DataFrame保存为CSV文件？',
            options: ['to_csv()', 'write_csv()', 'save_csv()', 'export_csv()'],
            correctAnswer: 'to_csv()',
            explanation: '使用DataFrame的to_csv()方法可以将数据保存为CSV文件。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: 'Series和DataFrame的主要区别是？',
            options: ['Series是一维，DataFrame是二维', 'DataFrame是一维，Series是二维', '没有区别', 'Series只能存数字'],
            correctAnswer: 'Series是一维，DataFrame是二维',
            explanation: 'Series是类似数组的一维结构，DataFrame是类似表格的二维结构。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: '读取文件时添加encoding参数是为了解决什么问题？',
            options: ['文件大小', '文件格式', '字符编码', '文件权限'],
            correctAnswer: '字符编码',
            explanation: 'encoding参数用于指定文件字符编码，解决中文乱码问题。'
          },
          {
            id: 11,
            type: 'true_false',
            question: 'CSV文件只能用逗号作为分隔符。',
            correctAnswer: false,
            explanation: 'CSV文件可以使用逗号、制表符或其他字符作为分隔符。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'Pandas的DataFrame可以包含不同数据类型的列。',
            correctAnswer: true,
            explanation: 'DataFrame的每列可以是不同的数据类型。'
          },
          {
            id: 13,
            type: 'true_false',
            question: 'read_json()只能读取本地JSON文件。',
            correctAnswer: false,
            explanation: 'read_json()可以读取本地文件，也可以读取JSON字符串。'
          },
          {
            id: 14,
            type: 'true_false',
            question: 'DataFrame的info()方法可以查看数据的详细信息。',
            correctAnswer: true,
            explanation: 'info()显示数据的索引、数据类型和内存信息。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'Excel文件可以包含多个工作表。',
            correctAnswer: true,
            explanation: '一个Excel文件可以包含多个工作表，read_excel()的sheet_name参数可以指定读取哪个表。'
          },
          {
            id: 16,
            type: 'true_false',
            question: 'JSON格式支持注释。',
            correctAnswer: false,
            explanation: 'JSON格式不支持注释，标准JSON就是这样规定的。'
          },
          {
            id: 17,
            type: 'true_false',
            question: 'describe()方法可以生成数据的统计摘要。',
            correctAnswer: true,
            explanation: 'describe()返回计数、均值、标准差、最小值、分位数和最大值。'
          },
          {
            id: 18,
            type: 'true_false',
            question: 'Pandas只能处理结构化数据。',
            correctAnswer: false,
            explanation: 'Pandas主要用于结构化数据，但也可以处理半结构化的JSON等数据。'
          },
          {
            id: 19,
            type: 'true_false',
            question: '读取大CSV文件时，可以指定usecols参数只读取部分列。',
            correctAnswer: true,
            explanation: 'usecols参数可以指定要读取的列，提高读取效率。'
          },
          {
            id: 20,
            type: 'true_false',
            question: 'DataFrame的columns属性返回列名列表。',
            correctAnswer: true,
            explanation: 'columns属性返回所有列名的Index对象。'
          }
        ]
      },
      // 第3章：数据采集
      {
        id: 3,
        title: '数据采集',
        content: '本章学习如何使用Python进行数据采集，包括文件读取、API调用、网络爬虫基础和数据库连接。',
        codeExamples: [
          {
            title: '使用requests获取网页数据',
            code: `import requests

# 发送GET请求
url = 'https://api.example.com/data'
response = requests.get(url)

# 检查响应状态
if response.status_code == 200:
    data = response.json()
    print(f"数据获取成功：{len(data)} 条记录")
else:
    print(f"请求失败：{response.status_code}")`
          },
          {
            title: '调用RESTful API',
            code: `import requests

# POST请求示例
url = 'https://api.example.com/login'
payload = {
    'username': 'admin',
    'password': '123456'
}

response = requests.post(url, json=payload)

if response.status_code == 200:
    result = response.json()
    token = result.get('token')
    print(f"登录成功，获取token：{token}")
else:
    print(f"登录失败：{response.status_code}")`
          },
          {
            title: '数据库连接查询',
            code: `import sqlite3

# 连接SQLite数据库
conn = sqlite3.connect('sales.db')
cursor = conn.cursor()

# 执行查询
cursor.execute('SELECT * FROM orders WHERE amount > 100')
results = cursor.fetchall()

print(f"查询到 {len(results)} 条订单")
for row in results[:5]:
    print(row)

# 关闭连接
conn.close()`
          }
        ],
        exercises: [
          {
            id: 1,
            type: 'coding',
            question: '编写代码，使用requests库获取JSONPlaceholder API的数据',
            starterCode: `import requests

# 获取用户数据
url = 'https://jsonplaceholder.typicode.com/users'

# 在这里编写代码

print(users)`,
            solution: `import requests

# 获取用户数据
url = 'https://jsonplaceholder.typicode.com/users'
response = requests.get(url)

if response.status_code == 200:
    users = response.json()
    print(f"获取到 {len(users)} 个用户")
    print(users)
else:
    print(f"请求失败：{response.status_code}")`,
            explanation: '使用requests.get()发送GET请求，通过response.json()解析返回的JSON数据。',
            commonErrors: [
              {
                error: '未检查状态码',
                description: '直接使用响应内容而不检查状态码',
                solution: '添加 if response.status_code == 200: 检查'
              },
              {
                error: '异常处理缺失',
                description: '网络请求失败时程序崩溃',
                solution: '添加 try-except 异常处理'
              }
            ]
          },
          {
            id: 2,
            type: 'coding',
            question: '模拟POST请求登录接口',
            starterCode: `import requests

# 登录接口
url = 'https://httpbin.org/post'
login_data = {
    'username': 'testuser',
    'password': 'testpass'
}

# 在这里编写代码

print(f"响应状态：{response.status_code}")`,
            solution: `import requests

# 登录接口
url = 'https://httpbin.org/post'
login_data = {
    'username': 'testuser',
    'password': 'testpass'
}

# 发送POST请求
response = requests.post(url, data=login_data)

print(f"响应状态：{response.status_code}")
print(f"响应内容：{response.json()}")`,
            explanation: '使用requests.post()发送POST请求，data参数用于表单数据提交。',
            commonErrors: [
              {
                error: '参数名错误',
                description: '使用json而不是data发送表单数据',
                solution: '表单数据使用data参数，JSON数据使用json参数'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'multiple_choice',
            question: 'requests库中，哪个方法用于发送POST请求？',
            options: ['requests.get()', 'requests.post()', 'requests.put()', 'requests.delete()'],
            correctAnswer: 'requests.post()',
            explanation: 'requests.post()用于发送POST请求，常见用于登录、提交表单等场景。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: '如何检查HTTP响应是否成功？',
            options: ['response.ok', 'response.status_code == 200', 'response.success', 'response.code == 200'],
            correctAnswer: 'response.status_code == 200',
            explanation: '通过检查status_code是否等于200来判断请求是否成功。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: 'RESTful API中，GET方法的主要用途是？',
            options: ['创建资源', '读取资源', '更新资源', '删除资源'],
            correctAnswer: '读取资源',
            explanation: 'GET方法用于从服务器获取资源，不会修改服务器数据。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: 'JSONPlaceholder是一个什么样的API？',
            options: ['收费API', '免费的测试API', '企业级API', '本地API'],
            correctAnswer: '免费的测试API',
            explanation: 'JSONPlaceholder是免费的在线REST API，常用于测试和原型开发。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: 'requests.get()的headers参数用于？',
            options: ['设置请求体', '设置请求头', '设置URL参数', '设置超时'],
            correctAnswer: '设置请求头',
            explanation: 'headers参数用于设置HTTP请求头，如User-Agent、Authorization等。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '如何处理API返回的JSON数据？',
            options: ['response.text', 'response.json()', 'response.content', 'response.xml()'],
            correctAnswer: 'response.json()',
            explanation: 'response.json()方法将JSON响应解析为Python对象。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: 'SQLite数据库使用什么模块操作？',
            options: ['requests', 'sqlite3', 'json', 'pandas'],
            correctAnswer: 'sqlite3',
            explanation: 'Python内置sqlite3模块用于操作SQLite数据库。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: '网络请求中，超时参数timeout的作用是？',
            options: ['设置重试次数', '设置等待时间', '设置缓存', '设置编码'],
            correctAnswer: '设置等待时间',
            explanation: 'timeout参数设置请求超时时间，防止请求无限等待。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: 'HTTP状态码404表示？',
            options: ['服务器错误', '未找到资源', '权限不足', '请求成功'],
            correctAnswer: '未找到资源',
            explanation: '404表示请求的资源不存在或路径错误。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: 'cursor.fetchall()返回什么？',
            options: ['单条记录', '所有记录列表', '记录数量', '字段名列表'],
            correctAnswer: '所有记录列表',
            explanation: 'fetchall()返回查询到的所有记录，以列表形式。'
          },
          {
            id: 11,
            type: 'true_false',
            question: 'POST方法比GET方法更安全。',
            correctAnswer: false,
            explanation: 'POST和GET在安全性上没有本质区别，都使用明文传输。敏感数据需要使用HTTPS。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'requests库的响应对象有status_code属性。',
            correctAnswer: true,
            explanation: 'status_code属性返回HTTP状态码，如200、404等。'
          },
          {
            id: 13,
            type: 'true_false',
            question: '网络爬虫必须遵守网站的robots.txt规则。',
            correctAnswer: true,
            explanation: 'robots.txt文件规定了爬虫的访问规则，应该遵守。'
          },
          {
            id: 14,
            type: 'true_false',
            question: '可以使用fetchone()获取单条记录。',
            correctAnswer: true,
            explanation: 'fetchone()每次返回一条记录，返回None表示没有更多记录。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'API的URL中包含查询参数使用?分隔。',
            correctAnswer: true,
            explanation: 'URL中查询参数格式为：url?key=value&key2=value2。'
          },
          {
            id: 16,
            type: 'true_false',
            question: 'conn.commit()用于提交事务。',
            correctAnswer: true,
            explanation: '执行增删改操作后需要commit()来保存更改。'
          },
          {
            id: 17,
            type: 'true_false',
            question: 'response.text返回的是bytes类型。',
            correctAnswer: false,
            explanation: 'response.text返回str（字符串）类型，response.content返回bytes类型。'
          },
          {
            id: 18,
            type: 'true_false',
            question: '爬虫可以抓取所有网站的数据。',
            correctAnswer: false,
            explanation: '有些网站禁止爬虫采集，需要遵守法律法规和网站规则。'
          },
          {
            id: 19,
            type: 'true_false',
            question: 'conn.close()用于关闭数据库连接。',
            correctAnswer: true,
            explanation: '数据库操作完成后应该关闭连接释放资源。'
          },
          {
            id: 20,
            type: 'true_false',
            question: 'API返回的数据都是JSON格式。',
            correctAnswer: false,
            explanation: 'API可以返回多种格式，如JSON、XML、HTML等，JSON只是其中一种。'
          }
        ]
      },
      // 第4章：数据清洗
      {
        id: 4,
        title: '数据清洗',
        content: '本章学习数据清洗的核心技术，包括缺失值处理、异常值检测、数据去重和数据类型转换。',
        codeExamples: [
          {
            title: '处理缺失值',
            code: `import pandas as pd
import numpy as np

# 创建包含缺失值的数据
df = pd.DataFrame({
    'A': [1, 2, np.nan, 4],
    'B': [5, np.nan, np.nan, 8],
    'C': [9, 10, 11, 12]
})

print("原始数据：")
print(df)

# 检测缺失值
print("\\n缺失值统计：")
print(df.isnull().sum())

# 填充缺失值
df_filled = df.fillna(df.mean())
print("\\n用均值填充后：")
print(df_filled)

# 删除缺失值行
df_dropped = df.dropna()
print("\\n删除缺失值行后：")
print(df_dropped)`
          },
          {
            title: '数据去重',
            code: `import pandas as pd

# 创建包含重复数据
df = pd.DataFrame({
    'Name': ['张三', '李四', '张三', '王五', '李四'],
    'Age': [20, 22, 20, 21, 22],
    'Score': [85, 92, 85, 88, 92]
})

print("原始数据：")
print(df)

# 检测重复行
print("\\n重复行检测：")
print(df.duplicated())

# 删除重复行
df_unique = df.drop_duplicates()
print("\\n删除重复行后：")
print(df_unique)

# 按指定列去重
df_unique2 = df.drop_duplicates(subset=['Name', 'Age'])
print("\\n按Name和Age列去重后：")
print(df_unique2)`
          },
          {
            title: '数据类型转换',
            code: `import pandas as pd

# 创建混合类型数据
df = pd.DataFrame({
    'Name': ['张三', '李四', '王五'],
    'Age': ['20', '22', '21'],  # 字符串类型
    'Score': [85.5, 92.0, 88.5],
    'Date': ['2024-01-01', '2024-01-02', '2024-01-03']
})

print("原始数据类型：")
print(df.dtypes)

# 转换Age为整数
df['Age'] = df['Age'].astype(int)
print("\\nAge转为整数后：")
print(df.dtypes)

# 转换Date为日期类型
df['Date'] = pd.to_datetime(df['Date'])
print("\\nDate转为日期后：")
print(df.dtypes)`
          }
        ],
        exercises: [
          {
            id: 1,
            type: 'coding',
            question: '检测并删除DataFrame中的缺失值',
            starterCode: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, np.nan, 4, np.nan],
    'B': [5, np.nan, 7, 8, 9],
    'C': [10, 11, 12, np.nan, 14]
})

# 检测缺失值
print("缺失值统计：")
# 在这里编写代码

# 删除包含缺失值的行
df_clean = # 在这里编写代码

print("\\n清洗后的数据：")
print(df_clean)`,
            solution: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    'A': [1, 2, np.nan, 4, np.nan],
    'B': [5, np.nan, 7, 8, 9],
    'C': [10, 11, 12, np.nan, 14]
})

# 检测缺失值
print("缺失值统计：")
print(df.isnull().sum())

# 删除包含缺失值的行
df_clean = df.dropna()

print("\\n清洗后的数据：")
print(df_clean)`,
            explanation: 'isnull().sum()统计每列缺失值数量，dropna()删除包含任意缺失值的行。',
            commonErrors: [
              {
                error: '使用isna()混淆',
                description: 'isna()和isnull()功能相同但语义不同',
                solution: '两者都可以使用，效果相同'
              }
            ]
          },
          {
            id: 2,
            type: 'coding',
            question: '将某列的重复数据删除，保留第一条',
            starterCode: `import pandas as pd

df = pd.DataFrame({
    'Name': ['苹果', '香蕉', '苹果', '橙子', '香蕉'],
    'Price': [3.5, 2.5, 3.5, 4.0, 2.5]
})

# 删除Name列的重复项
# 在这里编写代码

print(df_unique)`,
            solution: `import pandas as pd

df = pd.DataFrame({
    'Name': ['苹果', '香蕉', '苹果', '橙子', '香蕉'],
    'Price': [3.5, 2.5, 3.5, 4.0, 2.5]
})

# 删除Name列的重复项
df_unique = df.drop_duplicates(subset=['Name'], keep='first')

print(df_unique)`,
            explanation: 'drop_duplicates()的subset参数指定参考列，keep参数指定保留哪一行。',
            commonErrors: [
              {
                error: 'keep参数缺失',
                description: '不指定keep参数默认保留最后一条',
                solution: '使用 keep="first" 保留第一条'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'multiple_choice',
            question: '哪个方法可以检测缺失值？',
            options: ['isnull()', 'isna()', 'isempty()', 'isnull()和isna()都可以'],
            correctAnswer: 'isnull()和isna()都可以',
            explanation: 'isnull()和isna()功能完全相同，都用于检测缺失值。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: 'fillna()方法的作用是？',
            options: ['删除缺失值', '填充缺失值', '统计缺失值', '标记缺失值'],
            correctAnswer: '填充缺失值',
            explanation: 'fillna()用指定值填充缺失值。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: 'dropna()默认删除包含缺失值的？',
            options: ['列', '行', '单元格', '整个DataFrame'],
            correctAnswer: '行',
            explanation: 'dropna()默认删除任何包含缺失值的行。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: 'duplicated()方法返回什么？',
            options: ['重复的行', '布尔Series', '行数', '列名'],
            correctAnswer: '布尔Series',
            explanation: 'duplicated()返回一个布尔Series，True表示重复的行。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: 'astype()用于？',
            options: ['类型转换', '类型检查', '类型统计', '类型排序'],
            correctAnswer: '类型转换',
            explanation: 'astype()方法用于转换数据类型。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '处理异常值的第一步是？',
            options: ['删除', '替换', '识别', '填充'],
            correctAnswer: '识别',
            explanation: '首先需要识别什么是异常值，通常使用统计方法如IQR或Z-score。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: 'IQR是指什么？',
            options: ['最大值-最小值', 'Q3-Q1', 'Q1-最小值', '最大值-Q3'],
            correctAnswer: 'Q3-Q1',
            explanation: 'IQR是第三四分位数减去第一四分位数。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: '去重可以使用哪个方法？',
            options: ['drop_duplicates()', 'unique()', 'duplicated()', 'remove_duplicates()'],
            correctAnswer: 'drop_duplicates()',
            explanation: 'drop_duplicates()用于删除重复行。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: 'to_datetime()的作用是？',
            options: ['转为字符串', '转为日期', '转为数字', '转为布尔'],
            correctAnswer: '转为日期',
            explanation: 'to_datetime()将字符串或其他格式转为日期时间类型。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: 'describe()不包括以下哪个统计量？',
            options: ['均值', '中位数', '方差', '最大值'],
            correctAnswer: '中位数',
            explanation: 'describe()返回计数、均值、标准差、最小值、25%、50%、75%和最大值，不包括中位数（中位数是50%分位数）。'
          },
          {
            id: 11,
            type: 'true_false',
            question: '缺失值就是空值。',
            correctAnswer: true,
            explanation: '在Pandas中，NaN、None、NaT都表示缺失值。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'fillna()可以用均值填充数值列。',
            correctAnswer: true,
            explanation: 'fillna(df.mean())用每列均值填充缺失值。'
          },
          {
            id: 13,
            type: 'true_false',
            question: 'drop_duplicates()默认保留所有重复行。',
            correctAnswer: false,
            explanation: '默认保留第一条重复行，删除后续重复行。'
          },
          {
            id: 14,
            type: 'true_false',
            question: '异常值必须删除。',
            correctAnswer: false,
            explanation: '异常值处理方式取决于业务需求，可以删除、替换或保留。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'str类型的数字可以转为int类型。',
            correctAnswer: true,
            explanation: '使用astype(int)可以将"123"转为123。'
          },
          {
            id: 16,
            type: 'true_false',
            question: 'replace()可以替换指定值。',
            correctAnswer: true,
            explanation: 'replace()方法可以替换DataFrame中的指定值。'
          },
          {
            id: 17,
            type: 'true_false',
            question: 'DataFrame可以同时存在不同类型的列。',
            correctAnswer: true,
            explanation: '每列可以是不同的数据类型。'
          },
          {
            id: 18,
            type: 'true_false',
            question: '删除重复行后，数据行数一定会减少。',
            correctAnswer: false,
            explanation: '如果没有重复行，删除后行数不变。'
          },
          {
            id: 19,
            type: 'true_false',
            question: 'ffill()是前向填充方法。',
            correctAnswer: true,
            explanation: 'ffill()用前一个有效值填充缺失值。'
          },
          {
            id: 20,
            type: 'true_false',
            question: 'unique()返回去重后的数组。',
            correctAnswer: true,
            explanation: 'unique()返回Series中去重后的值数组。'
          }
        ]
      },
      // 第5章：数据可视化
      {
        id: 5,
        title: '数据可视化',
        content: '本章学习使用Matplotlib和Seaborn创建专业的数据可视化图表，包括折线图、柱状图、散点图等。',
        codeExamples: [
          {
            title: '创建折线图',
            code: `import matplotlib.pyplot as plt
import pandas as pd

# 准备数据
months = ['1月', '2月', '3月', '4月', '5月', '6月']
sales = [120, 150, 180, 140, 200, 220]

# 创建画布和图表
plt.figure(figsize=(10, 6))
plt.plot(months, sales, marker='o', linewidth=2, color='#00CED1')

# 设置标题和标签
plt.title('月度销售趋势', fontsize=16)
plt.xlabel('月份', fontsize=12)
plt.ylabel('销售额（万元）', fontsize=12)

# 添加网格
plt.grid(True, linestyle='--', alpha=0.7)

# 显示图表
plt.tight_layout()
plt.show()`
          },
          {
            title: '创建柱状图',
            code: `import matplotlib.pyplot as plt
import pandas as pd

# 准备数据
products = ['产品A', '产品B', '产品C', '产品D']
sales = [4500, 3800, 5200, 4100]

# 创建柱状图
plt.figure(figsize=(10, 6))
colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4']
bars = plt.bar(products, sales, color=colors, edgecolor='white', linewidth=2)

# 添加数值标签
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2., height,
             f'{height}',
             ha='center', va='bottom', fontsize=12)

plt.title('产品销量对比', fontsize=16)
plt.xlabel('产品', fontsize=12)
plt.ylabel('销量', fontsize=12)

plt.tight_layout()
plt.show()`
          },
          {
            title: '创建散点图',
            code: `import matplotlib.pyplot as plt
import numpy as np

# 生成随机数据
np.random.seed(42)
height = np.random.normal(170, 10, 100)  # 身高
weight = height * 0.6 + np.random.normal(0, 5, 100)  # 体重

# 创建散点图
plt.figure(figsize=(10, 6))
plt.scatter(height, weight, alpha=0.6, c='#FF6B6B', edgecolors='white', s=80)

plt.title('身高与体重关系', fontsize=16)
plt.xlabel('身高 (cm)', fontsize=12)
plt.ylabel('体重 (kg)', fontsize=12)

plt.tight_layout()
plt.show()`
          }
        ],
        exercises: [
          {
            id: 1,
            type: 'coding',
            question: '创建一个显示学生成绩分布的柱状图',
            starterCode: `import matplotlib.pyplot as plt

# 学生成绩数据
students = ['张三', '李四', '王五', '赵六', '陈七']
scores = [85, 92, 78, 96, 88]

# 创建柱状图
# 在这里编写代码

plt.title('学生成绩对比')
plt.xlabel('学生')
plt.ylabel('成绩')
plt.show()`,
            solution: `import matplotlib.pyplot as plt

# 学生成绩数据
students = ['张三', '李四', '王五', '赵六', '陈七']
scores = [85, 92, 78, 96, 88]

# 创建柱状图
plt.figure(figsize=(10, 6))
plt.bar(students, scores, color='#4ECDC4', edgecolor='white')

plt.title('学生成绩对比')
plt.xlabel('学生')
plt.ylabel('成绩')
plt.ylim(0, 100)  # 设置y轴范围

plt.tight_layout()
plt.show()`,
            explanation: '使用plt.bar()创建柱状图，figsize设置画布大小，ylim设置y轴范围。',
            commonErrors: [
              {
                error: '忘记设置y轴范围',
                description: '成绩是0-100，但y轴自动缩放',
                solution: '使用plt.ylim(0, 100)设置合理范围'
              }
            ]
          },
          {
            id: 2,
            type: 'coding',
            question: '创建一个展示公司收入增长趋势的折线图',
            starterCode: `import matplotlib.pyplot as plt

# 收入数据（万元）
years = [2019, 2020, 2021, 2022, 2023, 2024]
revenue = [100, 120, 150, 200, 280, 350]

# 创建折线图
# 在这里编写代码

plt.show()`,
            solution: `import matplotlib.pyplot as plt

# 收入数据（万元）
years = [2019, 2020, 2021, 2022, 2023, 2024]
revenue = [100, 120, 150, 200, 280, 350]

# 创建折线图
plt.figure(figsize=(10, 6))
plt.plot(years, revenue, marker='s', linewidth=2, color='#FF6B6B', markersize=10)

# 添加数据标签
for i, v in enumerate(revenue):
    plt.text(years[i], v + 10, f'{v}万', ha='center', fontsize=10)

plt.title('公司收入增长趋势', fontsize=16)
plt.xlabel('年份', fontsize=12)
plt.ylabel('收入（万元）', fontsize=12)
plt.grid(True, linestyle='--', alpha=0.7)

plt.tight_layout()
plt.show()`,
            explanation: '折线图适合展示趋势变化，使用marker参数添加数据点标记。',
            commonErrors: [
              {
                error: '数据标签重叠',
                description: '数值标签挤在一起看不清',
                solution: '添加偏移量或调整ha参数'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'multiple_choice',
            question: 'Matplotlib中创建画布的函数是？',
            options: ['plt.create()', 'plt.figure()', 'plt.canvas()', 'plt.new()'],
            correctAnswer: 'plt.figure()',
            explanation: 'figure()用于创建画布，figsize参数设置画布大小。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: '哪个函数用于创建折线图？',
            options: ['plt.bar()', 'plt.scatter()', 'plt.plot()', 'plt.pie()'],
            correctAnswer: 'plt.plot()',
            explanation: 'plot()用于创建折线图，可以指定颜色、标记、线宽等参数。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '设置图表标题使用什么方法？',
            options: ['plt.title()', 'plt.xlabel()', 'plt.legend()', 'plt.grid()'],
            correctAnswer: 'plt.title()',
            explanation: 'title()设置图表标题。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: '柱状图使用哪个函数？',
            options: ['plt.bar()', 'plt.hist()', 'plt.plot()', 'plt.scatter()'],
            correctAnswer: 'plt.bar()',
            explanation: 'bar()用于创建柱状图。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: '散点图使用哪个函数？',
            options: ['plt.scatter()', 'plt.plot()', 'plt.bar()', 'plt.pie()'],
            correctAnswer: 'plt.scatter()',
            explanation: 'scatter()用于创建散点图。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '添加图例使用什么方法？',
            options: ['plt.legend()', 'plt.label()', 'plt.title()', 'plt.annotate()'],
            correctAnswer: 'plt.legend()',
            explanation: 'legend()添加图例，label参数设置标签内容。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: 'alpha参数控制什么？',
            options: ['颜色', '透明度', '线宽', '标记大小'],
            correctAnswer: '透明度',
            explanation: 'alpha参数控制元素透明度，范围0-1。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: 'marker参数控制什么？',
            options: ['线条样式', '数据点标记', '颜色', '标签'],
            correctAnswer: '数据点标记',
            explanation: 'marker参数设置数据点的标记样式，如"o"是圆点。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: 'linewidth参数控制什么？',
            options: ['标记大小', '线条粗细', '字体大小', '画布大小'],
            correctAnswer: '线条粗细',
            explanation: 'linewidth设置线条的粗细程度。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: 'Seaborn是基于什么库的高级可视化库？',
            options: ['numpy', 'pandas', 'matplotlib', 'scipy'],
            correctAnswer: 'matplotlib',
            explanation: 'Seaborn基于Matplotlib，提供了更美观的默认样式。'
          },
          {
            id: 11,
            type: 'true_false',
            question: 'plt.show()用于显示图表。',
            correctAnswer: true,
            explanation: 'show()将图表渲染并显示出来。'
          },
          {
            id: 12,
            type: 'true_false',
            question: 'grid()用于添加网格线。',
            correctAnswer: true,
            explanation: 'grid()添加网格，linestyle设置线型。'
          },
          {
            id: 13,
            type: 'true_false',
            question: '一张图只能有一个子图。',
            correctAnswer: false,
            explanation: '可以使用subplot()或subplots()创建多个子图。'
          },
          {
            id: 14,
            type: 'true_false',
            question: 'tight_layout()用于优化布局。',
            correctAnswer: true,
            explanation: 'tight_layout()自动调整子图参数防止重叠。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'color参数可以接受颜色名称。',
            correctAnswer: true,
            explanation: '如"red"、"blue"或十六进制如"#FF0000"。'
          },
          {
            id: 16,
            type: 'true_false',
            question: '箱线图用于显示数据分布。',
            correctAnswer: true,
            explanation: '箱线图显示数据的最小值、Q1、中位数、Q3和最大值。'
          },
          {
            id: 17,
            type: 'true_false',
            question: '饼图适合展示比例关系。',
            correctAnswer: true,
            explanation: '饼图适合展示各部分占总体的比例。'
          },
          {
            id: 18,
            type: 'true_false',
            question: 'histplot()用于绘制直方图。',
            correctAnswer: true,
            explanation: 'Seaborn的histplot()用于绘制直方图。'
          },
          {
            id: 19,
            type: 'true_false',
            question: 'savefig()可以保存图表为文件。',
            correctAnswer: true,
            explanation: 'savefig("filename.png")保存图表为PNG格式。'
          },
          {
            id: 20,
            type: 'true_false',
            question: 'xlabel()和ylabel()分别设置X轴和Y轴标签。',
            correctAnswer: true,
            explanation: 'xlabel()设置X轴标签，ylabel()设置Y轴标签。'
          }
        ]
      },
      // 第6章：统计分析基础
      {
        id: 6,
        title: '统计分析基础',
        content: '本章学习统计分析基础知识，包括描述性统计、假设检验、相关分析和回归分析基础。',
        codeExamples: [
          {
            title: '描述性统计',
            code: `import pandas as pd
import numpy as np

# 创建样本数据
data = pd.DataFrame({
    '数学': [85, 92, 78, 96, 88, 76, 90, 82, 95, 70],
    '英语': [90, 88, 82, 91, 85, 79, 93, 87, 89, 75],
    '物理': [78, 85, 80, 88, 82, 74, 86, 81, 90, 72]
})

# 描述性统计
print("基本统计信息：")
print(data.describe())

print("\\n各科平均分：")
print(data.mean())

print("\\n各科中位数：")
print(data.median())

print("\\n各科标准差：")
print(data.std())`
          },
          {
            title: '相关性分析',
            code: `import pandas as pd
import numpy as np

# 创建数据
data = pd.DataFrame({
    '学习时间': [2, 3, 4, 5, 6, 7, 8],
    '成绩': [60, 65, 72, 80, 88, 92, 95]
})

# 计算相关系数
correlation = data['学习时间'].corr(data['成绩'])
print(f"学习时间与成绩的相关系数：{correlation:.4f}")

# 相关性矩阵
print("\\n相关性矩阵：")
print(data.corr())`
          },
          {
            title: '假设检验示例',
            code: `from scipy import stats
import numpy as np

# 样本数据
sample = [85, 92, 78, 96, 88, 76, 90, 82, 95, 70, 88, 82, 79, 91, 84]

# 单样本t检验（检验均值是否等于85）
t_statistic, p_value = stats.ttest_1samp(sample, 85)

print(f"样本均值：{np.mean(sample):.2f}")
print(f"t统计量：{t_statistic:.4f}")
print(f"p值：{p_value:.4f}")

if p_value < 0.05:
    print("结论：拒绝原假设，均值显著不等于85")
else:
    print("结论：不能拒绝原假设")`
          }
        ],
        exercises: [
          {
            id: 1,
            type: 'coding',
            question: '计算一组数据的均值、中位数和标准差',
            starterCode: `import pandas as pd
import numpy as np

# 学生成绩数据
scores = [85, 92, 78, 96, 88, 76, 90, 82, 95, 70, 88, 82]

# 计算统计量
# 在这里编写代码

print(f"均值：{mean_score:.2f}")
print(f"中位数：{median_score:.2f}")
print(f"标准差：{std_score:.2f}")`,
            solution: `import pandas as pd
import numpy as np

# 学生成绩数据
scores = [85, 92, 78, 96, 88, 76, 90, 82, 95, 70, 88, 82]

# 计算统计量
mean_score = np.mean(scores)
median_score = np.median(scores)
std_score = np.std(scores, ddof=1)  # ddof=1为样本标准差

print(f"均值：{mean_score:.2f}")
print(f"中位数：{median_score:.2f}")
print(f"标准差：{std_score:.2f}")`,
            explanation: '使用numpy的mean()、median()、std()计算均值、中位数和标准差。ddof=1表示计算样本标准差。',
            commonErrors: [
              {
                error: '标准差计算错误',
                description: '未指定ddof参数',
                solution: '数据分析中通常使用ddof=1的样本标准差'
              }
            ]
          },
          {
            id: 2,
            type: 'coding',
            question: '计算两个变量之间的相关系数',
            starterCode: `import pandas as pd

# 广告投入与销售额数据
data = pd.DataFrame({
    '广告投入': [10, 20, 30, 40, 50],
    '销售额': [25, 45, 60, 75, 95]
})

# 计算相关系数
# 在这里编写代码

print(f"相关系数：{correlation:.4f}")`,
            solution: `import pandas as pd

# 广告投入与销售额数据
data = pd.DataFrame({
    '广告投入': [10, 20, 30, 40, 50],
    '销售额': [25, 45, 60, 75, 95]
})

# 计算相关系数
correlation = data['广告投入'].corr(data['销售额'])

print(f"相关系数：{correlation:.4f}")`,
            explanation: '使用Series的corr()方法计算两个变量之间的皮尔逊相关系数。',
            commonErrors: [
              {
                error: '直接对DataFrame使用corr',
                description: '没有指定具体列',
                solution: '使用 data[\'列1\'].corr(data[\'列2\'])'
              }
            ]
          }
        ],
        quiz: [
          {
            id: 1,
            type: 'multiple_choice',
            question: '描述数据集中趋势的统计量是？',
            options: ['均值', '标准差', '方差', '极差'],
            correctAnswer: '均值',
            explanation: '均值、中位数、众数都是描述集中趋势的统计量。'
          },
          {
            id: 2,
            type: 'multiple_choice',
            question: '标准差用于描述什么？',
            options: ['集中趋势', '离散程度', '数据位置', '数据形状'],
            correctAnswer: '离散程度',
            explanation: '标准差越大表示数据越分散，越小表示数据越集中。'
          },
          {
            id: 3,
            type: 'multiple_choice',
            question: '相关系数的取值范围是？',
            options: ['-1到1', '0到1', '-1到0', '任意值'],
            correctAnswer: '-1到1',
            explanation: '相关系数r的范围是-1≤r≤1，r=1表示完全正相关，r=-1表示完全负相关。'
          },
          {
            id: 4,
            type: 'multiple_choice',
            question: 'p值小于0.05表示什么？',
            options: ['差异显著', '差异不显著', '数据错误', '无法判断'],
            correctAnswer: '差异显著',
            explanation: '通常p<0.05被认为统计上显著，拒绝原假设。'
          },
          {
            id: 5,
            type: 'multiple_choice',
            question: '正态分布的特征是？',
            options: ['均值=中位数=众数', '均值>中位数', '均值<中位数', '没有特征'],
            correctAnswer: '均值=中位数=众数',
            explanation: '正态分布是对称的，均值、中位数、众数三者相等。'
          },
          {
            id: 6,
            type: 'multiple_choice',
            question: '假设检验中，原假设用哪个符号表示？',
            options: ['H1', 'H0', 'α', 'β'],
            correctAnswer: 'H0',
            explanation: 'H0表示原假设，H1表示备择假设。'
          },
          {
            id: 7,
            type: 'multiple_choice',
            question: 't检验用于比较什么？',
            options: ['均值', '方差', '比例', '相关系数'],
            correctAnswer: '均值',
            explanation: 't检验用于比较样本均值与总体均值或两个样本均值的差异。'
          },
          {
            id: 8,
            type: 'multiple_choice',
            question: '相关分析研究的是什么关系？',
            options: ['因果关系', '线性关系', '函数关系', '随机关系'],
            correctAnswer: '线性关系',
            explanation: '相关分析研究变量之间的线性相关程度和方向。'
          },
          {
            id: 9,
            type: 'multiple_choice',
            question: '置信区间通常是多少？',
            options: ['80%', '90%', '95%', '99%'],
            correctAnswer: '95%',
            explanation: '95%置信区间是最常用的，表示重复抽样时95%会包含真值。'
          },
          {
            id: 10,
            type: 'multiple_choice',
            question: '方差是标准差的？',
            options: ['平方', '平方根', '倒数', '相反数'],
            correctAnswer: '平方',
            explanation: '标准差是方差的平方根。'
          },
          {
            id: 11,
            type: 'true_false',
            question: '均值对异常值敏感。',
            correctAnswer: true,
            explanation: '均值容易受极端值影响，中位数对异常值更稳健。'
          },
          {
            id: 12,
            type: 'true_false',
            question: '相关系数为0表示两个变量无关。',
            correctAnswer: false,
            explanation: '相关系数为0只表示无线性相关，可能存在非线性关系。'
          },
          {
            id: 13,
            type: 'true_false',
            question: '样本量越大，样本均值越接近总体均值。',
            correctAnswer: true,
            explanation: '根据大数定律，样本量增大会使样本统计量更接近总体参数。'
          },
          {
            id: 14,
            type: 'true_false',
            question: '拒绝原假设意味着原假设一定为假。',
            correctAnswer: false,
            explanation: '拒绝原假设只是说在当前样本下有足够证据，不代表原假设一定为假。'
          },
          {
            id: 15,
            type: 'true_false',
            question: 'z分数表示数据距离均值的标准差倍数。',
            correctAnswer: true,
            explanation: 'z分数 = (x - 均值) / 标准差，表示距离均值的标准化距离。'
          },
          {
            id: 16,
            type: 'true_false',
            question: '显著性水平α是犯第一类错误的概率。',
            correctAnswer: true,
            explanation: '第一类错误是原假设为真却拒绝的错误，概率为α。'
          },
          {
            id: 17,
            type: 'true_false',
            question: '回归分析可以确定因果关系。',
            correctAnswer: false,
            explanation: '回归分析只能发现相关关系，因果关系需要实验设计来确认。'
          },
          {
            id: 18,
            type: 'true_false',
            question: '中位数是排序后位于中间的数值。',
            correctAnswer: true,
            explanation: '对于偶数个数据，中位数是中间两个数的平均值。'
          },
          {
            id: 19,
            type: 'true_false',
            question: '变异系数是标准差与均值的比值。',
            correctAnswer: true,
            explanation: '变异系数CV = 标准差/均值，用于比较不同量纲数据的离散程度。'
          },
          {
            id: 20,
            type: 'true_false',
            question: '数据清洗不属于数据分析的步骤。',
            correctAnswer: false,
            explanation: '数据清洗是数据分析的重要步骤，包括处理缺失值、异常值等。'
          }
        ]
      }
    ]
  }
];

// 导出所有课程
export default courses;
