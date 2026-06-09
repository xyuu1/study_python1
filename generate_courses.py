#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成完整的 courses.ts 文件"""
import os

def ts_str(s):
    """将Python字符串转换为TypeScript字符串字面量"""
    return '"' + s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n') + '"'

def ts_code(code):
    """将Python代码字符串转换为TypeScript模板字符串"""
    return '`' + code.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$') + '`'

def gen_chapter(ch):
    lines = []
    lines.append('    // === 第%d章：%s ===' % (ch['id'], ch['title']))
    lines.append('    {')
    lines.append('      id: %d,' % ch['id'])
    lines.append('      title: %s,' % ts_str(ch['title']))
    lines.append('      content: %s,' % ts_str(ch['content']))
    
    # codeExamples
    lines.append('      codeExamples: [')
    for title, code in ch['codeExamples']:
        lines.append('        { title: %s, code: %s },' % (ts_str(title), ts_code(code)))
    lines.append('      ],')
    
    # exercises
    lines.append('      exercises: [')
    for idx, (question, starter, solution, explanation, errors) in enumerate(ch['exercises']):
        lines.append('        {')
        lines.append('          id: %d,' % (idx + 1))
        lines.append('          type: "coding",')
        lines.append('          question: %s,' % ts_str(question))
        lines.append('          starterCode: %s,' % ts_code(starter))
        lines.append('          solution: %s,' % ts_code(solution))
        lines.append('          explanation: %s,' % ts_str(explanation))
        if errors:
            lines.append('          commonErrors: [')
            for e in errors:
                lines.append('            { error: %s, description: %s, solution: %s },' % (ts_str(e[0]), ts_str(e[1]), ts_str(e[2])))
            lines.append('          ]')
        else:
            lines.append('          commonErrors: []')
        lines.append('        },')
    lines.append('      ],')
    
    # quiz - multipleChoice
    lines.append('      quiz: {')
    lines.append('        multipleChoice: [')
    for idx, (question, options, correct, explanation) in enumerate(ch['mcq']):
        opts = ', '.join([ts_str(o) for o in options])
        lines.append('          { id: %d, type: "multiple_choice", question: %s, options: [%s], correctAnswer: %s, explanation: %s },' % 
                     (idx + 1, ts_str(question), opts, ts_str(correct), ts_str(explanation)))
    lines.append('        ],')
    
    # quiz - trueFalse
    lines.append('        trueFalse: [')
    for idx, (question, correct, explanation) in enumerate(ch['tfq']):
        ts_bool = 'true' if correct else 'false'
        lines.append('          { id: %d, type: "true_false", question: %s, correctAnswer: %s, explanation: %s },' % 
                     (idx + 1, ts_str(question), ts_bool, ts_str(explanation)))
    lines.append('        ]')
    lines.append('      }')
    lines.append('    },')
    return '\n'.join(lines)


# === 各章节数据 ===

def ch1():
    return {
        'id': 1, 'title': 'Python基础',
        'content': '本章学习Python编程语言的基础知识，包括变量、数据类型、控制流和函数等核心概念，为后续数据分析学习打下坚实基础。',
        'codeExamples': [
            ('变量与数据类型', '''name = "张三"
age = 20
height = 1.75
is_student = True
print(f"姓名：{name}, 年龄：{age}")
print(type(name), type(age), type(height))'''),
            ('列表与字典操作', '''numbers = [1, 2, 3, 4, 5]
numbers.append(6)
print(f"长度：{len(numbers)}, 求和：{sum(numbers)}")
student = {"name": "张三", "age": 20, "score": 85.5}
print(f"学生姓名：{student['name']}")'''),
            ('函数定义与调用', '''def greet(name):
    return f"你好，{name}！"
def calculate_stats(numbers):
    return {'sum': sum(numbers), 'avg': sum(numbers)/len(numbers)}
print(greet("数据分析"))
print(calculate_stats([10, 20, 30, 40, 50]))''')
        ],
        'exercises': [
            ('猜数字游戏：编写一个函数，让用户猜1-100之间的随机数，给出"太大了"或"太小了"的提示',
             '''import random
def guess_number():
    target = random.randint(1, 100)
    # 在这里编写代码
guess_number()''',
             '''import random
def guess_number():
    target = random.randint(1, 100)
    attempts = 0
    print("欢迎来到猜数字游戏！")
    while True:
        try:
            guess = int(input("请输入你的猜测: "))
            attempts += 1
            if guess < target:
                print("太小了！再试一次。")
            elif guess > target:
                print("太大了！再试一次。")
            else:
                print(f"恭喜你，猜对了！你用了{attempts}次尝试。")
                break
        except ValueError:
            print("请输入有效的数字！")
guess_number()''',
             '使用 random.randint() 生成随机数，用 while 循环让用户持续猜测，根据猜测结果给出提示。try-except 处理用户输入非数字的情况。',
             [('未处理异常', '没有处理用户输入非数字的情况', '使用 try-except 捕获 ValueError'),
              ('循环无结束条件', '忘记在猜对时 break 跳出循环', '在猜对时添加 break')]),
            ('石头剪刀布游戏：编写一个函数，让玩家和电脑玩石头剪刀布',
             '''import random
def rock_paper_scissors():
    choices = ['石头', '剪刀', '布']
    # 在这里编写代码
rock_paper_scissors()''',
             '''import random
def rock_paper_scissors():
    choices = ['石头', '剪刀', '布']
    print("欢迎来到石头剪刀布游戏！")
    while True:
        player = input("请输入你的选择（石头/剪刀/布），输入退出结束：")
        if player == '退出':
            print("游戏结束！")
            break
        if player not in choices:
            continue
        computer = random.choice(choices)
        print(f"电脑选择：{computer}")
        if player == computer:
            print("平局！")
        elif (player == '石头' and computer == '剪刀') or (player == '剪刀' and computer == '布') or (player == '布' and computer == '石头'):
            print("你赢了！")
        else:
            print("你输了！")
rock_paper_scissors()''',
             '使用 random.choice() 让电脑随机选择，通过 if-elif 判断胜负关系。',
             [('判断逻辑错误', '胜负判断条件有误', '正确列出所有玩家获胜的情况')]),
            ('斐波那契数列：编写一个函数，生成前n个斐波那契数',
             '''def fibonacci(n):
    # 在这里编写代码
print(fibonacci(10))''',
             '''def fibonacci(n):
    if n <= 0: return []
    elif n == 1: return [0]
    elif n == 2: return [0, 1]
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib
print(fibonacci(10))''',
             '斐波那契数列的每个数是前两个数的和。用列表存储序列，循环逐步生成后续的数。',
             [('边界情况处理', '没有处理n为0或1的情况', '先判断n的大小并返回相应结果')])
        ],
        'mcq': [
            ('Python中，以下哪个是正确的变量命名？', ['2name', 'my-name', 'my_name', 'myName'], 'my_name', 'Python变量名必须以字母或下划线开头，不能以数字开头。my_name是推荐的命名方式（蛇形命名法）。'),
            ('type()函数的作用是什么？', ['修改变量类型', '返回变量的类型', '创建新变量', '删除变量'], '返回变量的类型', 'type()函数返回变量或值的数据类型。'),
            ('以下哪个是浮点数的例子？', ['42', '"3.14"', '3.14', 'True'], '3.14', '浮点数（float）是包含小数点的数值类型。"3.14"是字符串，42是整数，True是布尔值。'),
            ('Python中整数除法使用哪个运算符？', ['/', '//', '%', '*'], '//', '//是整数除法运算符，返回整数结果。/是普通除法，返回浮点数。'),
            ('字符串可以使用什么符号定义？', ['只有双引号', '只有单引号', '单引号或双引号', '只有中括号'], '单引号或双引号', 'Python中字符串可以用单引号或双引号定义。'),
            ('len()函数不能用于以下哪个类型？', ['字符串', '列表', '字典', '整数'], '整数', 'len()函数用于获取序列的长度，整数不是序列类型。'),
            ('input()函数的返回值类型是什么？', ['整数', '浮点数', '字符串', '布尔值'], '字符串', 'input()函数总是返回字符串类型。需要数值时要用int()或float()转换。'),
            ('Python中的布尔值True和False分别等价于？', ['1和0', '"1"和"0"', '10和0', '其他'], '1和0', '在Python中，True等价于1，False等价于0。'),
            ('str(123)的作用是什么？', ['转成整数', '转成浮点数', '转成字符串', '转成布尔值'], '转成字符串', 'str()函数将其他类型转换为字符串。'),
            ('以下哪个是正确的注释符号？', ['//', '/* */', '#', '--'], '#', 'Python中使用#符号创建单行注释。')
        ],
        'tfq': [
            ('Python中的变量创建时不需要声明类型。', True, 'Python是动态类型语言，变量在赋值时自动确定类型。'),
            ('链式赋值 a = b = c = 0 在Python中是合法的。', True, 'Python支持链式赋值，可以同时给多个变量赋相同的值。'),
            ('字符串在Python中是可变的，可以通过索引直接修改某个字符。', False, 'Python中的字符串是不可变对象（immutable）。'),
            ('浮点数运算可能存在精度问题，例如 0.1 + 0.2 不一定严格等于 0.3。', True, '由于浮点数在计算机中以二进制存储，存在精度损失问题。'),
            ('Python中可以用下划线作为数字的分隔符，如 1_000_000 表示100万。', True, 'Python 3.6+支持下划线作为数字的视觉分隔符。'),
            ('None 在Python中等价于数字0。', False, 'None是一个特殊的空值对象，不是0。'),
            ('Python区分大小写，变量 Name 和 name 是两个不同的变量。', True, 'Python是区分大小写的语言。'),
            ('在布尔运算中，and 和 or 运算符总是返回布尔值True或False。', False, 'Python中的and和or运算符返回的是参与运算的实际值，而非布尔值。'),
            ('Python变量名可以以字母或下划线开头。', True, '变量名必须以字母（a-z, A-Z）或下划线（_）开头。'),
            ('type()函数可以用来查看变量的数据类型。', True, 'type()是Python内置函数，返回对象的类型信息。')
        ]
    }


def ch2():
    return {
        'id': 2, 'title': '数据来源与类型',
        'content': '本章学习常见数据源的获取方式，以及CSV、JSON、Excel等数据格式的特点，掌握使用Pandas读取各种格式数据的方法。',
        'codeExamples': [
            ('读取CSV文件', '''import pandas as pd
df = pd.read_csv('students.csv')
print("数据形状：", df.shape)
print("前5行：")
print(df.head())'''),
            ('读取Excel文件', '''import pandas as pd
df = pd.read_excel('sales.xlsx', sheet_name='2024')
print("列名：", df.columns.tolist())
print("数据概览：")
print(df.describe())'''),
            ('读取JSON数据', '''import pandas as pd
import json
json_str = '''
[
  {"name": "苹果", "price": 5.5, "stock": 100},
  {"name": "香蕉", "price": 3.0, "stock": 200}
]
'''
data = json.loads(json_str)
df = pd.DataFrame(data)
print(df)''')
        ],
        'exercises': [
            ('简单的学生成绩管理：创建包含学生姓名、科目和成绩的DataFrame，按科目计算平均分',
             '''import pandas as pd
data = {
    '姓名': ['张三', '李四', '王五', '张三', '李四', '王五'],
    '科目': ['数学', '数学', '数学', '语文', '语文', '语文'],
    '成绩': [85, 92, 78, 90, 88, 82]
}
# 在这里编写代码''',
             '''import pandas as pd
data = {
    '姓名': ['张三', '李四', '王五', '张三', '李四', '王五'],
    '科目': ['数学', '数学', '数学', '语文', '语文', '语文'],
    '成绩': [85, 92, 78, 90, 88, 82]
}
df = pd.DataFrame(data)
print(df)
print()
print("按科目平均分：")
print(df.groupby('科目')['成绩'].mean())
print()
print("按学生平均分：")
print(df.groupby('姓名')['成绩'].mean())''',
             '使用Pandas创建DataFrame，通过 groupby() 进行分组聚合计算。',
             [('分组语法错误', '忘记指定聚合函数如 mean()', 'groupby() 后需要调用聚合函数')]),
            ('数据筛选：使用Pandas从销售数据中筛选出销售额大于1000且地区为"华东"的记录',
             '''import pandas as pd
sales_data = {
    '产品': ['A', 'B', 'C', 'D', 'E'],
    '销售额': [1500, 800, 2000, 600, 1200],
    '地区': ['华东', '华北', '华东', '华南', '华东']
}
df = pd.DataFrame(sales_data)
# 在这里编写筛选逻辑''',
             '''import pandas as pd
sales_data = {
    '产品': ['A', 'B', 'C', 'D', 'E'],
    '销售额': [1500, 800, 2000, 600, 1200],
    '地区': ['华东', '华北', '华东', '华南', '华东']
}
df = pd.DataFrame(sales_data)
filtered = df[(df['销售额'] > 1000) & (df['地区'] == '华东')]
print("筛选结果：")
print(filtered)''',
             'Pandas支持使用布尔索引进行数据筛选。多个条件需要用 & (与)、| (或) 连接，每个条件必须用括号包裹。',
             [('符号错误', '使用了 and/or 而不是 &/|', '在Pandas筛选中使用 & 和 |'),
              ('缺少括号', '没有给每个条件加括号', '每个条件必须用括号包裹以保证运算优先级')]),
            ('统计分析：编写代码计算一组数据的总数、总和、平均值、最大值和最小值',
             '''import pandas as pd
numbers = [23, 45, 12, 67, 89, 34, 56, 78, 91, 28]
df = pd.DataFrame(numbers, columns=['数值'])
# 在这里编写代码''',
             '''import pandas as pd
numbers = [23, 45, 12, 67, 89, 34, 56, 78, 91, 28]
df = pd.DataFrame(numbers, columns=['数值'])
print("=== 手动计算 ===")
print(f"总数：{len(numbers)}")
print(f"总和：{sum(numbers)}")
print(f"平均值：{sum(numbers)/len(numbers):.2f}")
print(f"最大值：{max(numbers)}")
print(f"最小值：{min(numbers)}")
print()
print("=== Pandas describe() ===")
print(df.describe())''',
             '可以使用Python内置函数进行统计计算，也可以直接使用Pandas的 describe() 方法生成完整的统计摘要。',
             [('空列表处理', '没有处理空列表导致除零错误', '判断列表长度或使用Pandas自动处理')])
        ],
        'mcq': [
            ('Pandas中用于读取CSV文件的函数是？', ['pd.read_csv()', 'pd.load_csv()', 'pd.open_csv()', 'pd.csv_read()'], 'pd.read_csv()', 'pd.read_csv() 是Pandas读取CSV文件的标准函数。'),
            ('以下哪种文件格式Pandas不支持直接读取？', ['CSV', 'Excel', 'JSON', 'PSD'], 'PSD', 'PSD是Photoshop图像格式，Pandas不支持。'),
            ('DataFrame的shape属性返回什么？', ['元素总数', '(行数, 列数)', '列名列表', '数据类型'], '(行数, 列数)', 'shape属性返回一个元组(行数, 列数)。'),
            ('df.head() 默认返回前几行？', ['3行', '5行', '10行', '全部'], '5行', 'head()方法默认返回前5行。'),
            ('df.dtypes 的作用是？', ['返回所有数据', '返回各列数据类型', '删除数据', '修改类型'], '返回各列数据类型', 'dtypes属性返回DataFrame中每一列的数据类型。'),
            ('读取 .xlsx 文件通常需要安装哪个库？', ['numpy', 'openpyxl', 'scipy', 'sklearn'], 'openpyxl', 'pandas读取 .xlsx 文件需要openpyxl作为引擎。'),
            ('JSON数据中键值对之间用什么符号分隔？', ['分号', '逗号', '冒号', '空格'], '逗号', 'JSON中键值对之间用逗号分隔，键和值之间用冒号分隔。'),
            ('Pandas中将DataFrame保存为CSV的方法是？', ['df.save_csv()', 'df.write_csv()', 'df.to_csv()', 'df.export_csv()'], 'df.to_csv()', 'df.to_csv() 是保存为CSV文件的标准方法。'),
            ('Series和DataFrame的主要区别是什么？', ['没有区别', 'Series是一维，DataFrame是二维', 'Series更快', 'DataFrame只能存数字'], 'Series是一维，DataFrame是二维', 'Series是一维带标签的数据结构，DataFrame是二维表格结构。'),
            ('读取CSV文件遇到中文乱码时，通常可以尝试设置什么参数？', ['header', 'index_col', 'encoding', 'sep'], 'encoding', 'encoding参数指定文件编码，中文文件常使用 utf-8、gbk 等编码。')
        ],
        'tfq': [
            ('CSV文件只能使用逗号作为字段分隔符。', False, 'CSV虽然名称是逗号分隔值，但分隔符可以是制表符、分号等，pandas的 sep 参数可以自定义。'),
            ('一个DataFrame中的不同列可以是不同的数据类型。', True, 'DataFrame的每一列可以有独立的数据类型。'),
            ('pd.read_json() 只能读取JSON文件，不能解析JSON字符串。', False, 'pd.read_json() 可以读取JSON文件，也可以传入JSON字符串。'),
            ('df.info() 方法可以显示每列的非空值数量和内存使用情况。', True, 'info() 是数据探索的常用方法，显示索引、列名、非空计数、数据类型和内存使用。'),
            ('Excel文件可以包含多个工作表（Sheet），Pandas可以指定读取某个工作表。', True, 'read_excel() 可以通过 sheet_name 参数指定要读取的工作表。'),
            ('JSON格式支持在数据中添加注释。', False, '标准JSON不支持注释。'),
            ('df.describe() 只对数值列生成统计摘要。', True, 'describe() 默认只对数值类型列输出统计量。'),
            ('Pandas主要用于处理结构化的表格类数据。', True, 'Pandas专门设计用于处理结构化表格数据。'),
            ('read_csv() 的 usecols 参数可以只读取指定的列，减少内存占用。', True, 'usecols 参数接受列名列表或索引列表，只加载需要的列。'),
            ('df.columns 属性返回DataFrame的所有行索引。', False, 'df.columns 返回列名，df.index 返回行索引。')
        ]
    }


def ch3():
    return {
        'id': 3, 'title': '数据采集',
        'content': '本章学习如何使用Python进行数据采集，包括文件读取、API调用、网络爬虫基础和数据库连接，掌握多源数据获取能力。',
        'codeExamples': [
            ('使用requests获取网页数据', '''import requests
response = requests.get('https://api.github.com')
print(f"状态码：{response.status_code}")
print(response.text[:200])'''),
            ('调用RESTful API', '''import requests
url = 'https://jsonplaceholder.typicode.com/posts/1'
response = requests.get(url)
if response.status_code == 200:
    data = response.json()
    print(f"标题：{data['title']}")
    print(f"内容：{data['body'][:100]}")'''),
            ('数据库连接查询', '''import sqlite3
import pandas as pd
conn = sqlite3.connect('example.db')
query = "SELECT * FROM users LIMIT 10"
df = pd.read_sql(query, conn)
print(df.head())
conn.close()''')
        ],
        'exercises': [
            ('待办事项管理：编写一个简单的待办事项管理程序，支持添加、查看和删除任务',
             '''def todo_manager():
    todos = []
    # 在这里编写代码
todo_manager()''',
             '''def todo_manager():
    todos = []
    while True:
        print("\\n=== 待办事项管理 ===")
        print("1. 添加任务")
        print("2. 查看任务")
        print("3. 删除任务")
        print("4. 退出")
        choice = input("请选择操作：")
        if choice == '1':
            task = input("请输入任务内容：")
            todos.append(task)
            print(f"已添加：{task}")
        elif choice == '2':
            if not todos:
                print("暂无任务")
            else:
                for i, task in enumerate(todos, 1):
                    print(f"{i}. {task}")
        elif choice == '3':
            idx = int(input("请输入要删除的任务编号：")) - 1
            if 0 <= idx < len(todos):
                removed = todos.pop(idx)
                print(f"已删除：{removed}")
        elif choice == '4':
            print("再见！")
            break
todo_manager()''',
             '通过列表存储任务，使用循环提供菜单选择，列表的 append() 和 pop() 方法实现添加和删除功能。',
             [('索引越界', '删除时没有检查用户输入的编号是否有效', '判断索引是否在有效范围内')]),
            ('简单的用户输入处理：编写代码收集用户基本信息并以字典形式保存',
             '''def collect_user_info():
    # 在这里编写代码
collect_user_info()''',
             '''def collect_user_info():
    user = {}
    user['name'] = input("请输入姓名：")
    while True:
        try:
            user['age'] = int(input("请输入年龄："))
            break
        except ValueError:
            print("请输入有效数字！")
    user['email'] = input("请输入邮箱：")
    user['city'] = input("请输入所在城市：")
    print("\\n用户信息：")
    for k, v in user.items():
        print(f"{k}: {v}")
    return user
collect_user_info()''',
             '使用字典存储用户信息，通过 input() 收集数据，使用 try-except 验证年龄输入的有效性。',
             [('输入未验证', '数字类型输入没有做异常处理', '使用 try-except 捕获 ValueError')]),
            ('数据存储与展示：编写一个保存学生成绩到JSON文件并从文件读取展示的程序',
             '''import json
def save_and_load_scores():
    scores = {
        '张三': {'数学': 85, '语文': 90},
        '李四': {'数学': 92, '语文': 88}
    }
    # 在这里编写代码
save_and_load_scores()''',
             '''import json
def save_and_load_scores():
    scores = {
        '张三': {'数学': 85, '语文': 90},
        '李四': {'数学': 92, '语文': 88}
    }
    with open('scores.json', 'w', encoding='utf-8') as f:
        json.dump(scores, f, ensure_ascii=False, indent=2)
    print("已保存到 scores.json")
    with open('scores.json', 'r', encoding='utf-8') as f:
        loaded = json.load(f)
    print("\\n从文件读取：")
    for name, subjects in loaded.items():
        print(f"{name}：{subjects}")
save_and_load_scores()''',
             '使用 json.dump() 将字典保存为JSON文件，json.load() 从文件读取数据。with 语句自动管理文件的打开和关闭。',
             [('中文乱码', '未设置 encoding 和 ensure_ascii 参数', '设置 encoding=utf-8 和 ensure_ascii=False')])
        ],
        'mcq': [
            ('发送POST请求应该使用requests库的哪个方法？', ['requests.get()', 'requests.post()', 'requests.put()', 'requests.send()'], 'requests.post()', 'requests.post() 用于发送POST请求。'),
            ('HTTP响应状态码200表示什么？', ['重定向', '客户端错误', '服务器错误', '请求成功'], '请求成功', '200是标准的"成功"状态码。'),
            ('GET请求通常用于什么场景？', ['修改数据', '删除数据', '获取/查询数据', '上传文件'], '获取/查询数据', 'GET是最常用的HTTP方法，用于从服务器获取数据。'),
            ('以下哪个是用于测试的公共JSON API？', ['jsonplaceholder.typicode.com', 'testapi.google.com', 'json.test', 'api.demo'], 'jsonplaceholder.typicode.com', 'JSONPlaceholder是一个免费的公共API，提供测试用的假数据。'),
            ('requests请求中设置请求头信息使用哪个参数？', ['params', 'headers', 'body', 'meta'], 'headers', 'headers 参数接收一个字典，用于设置请求头。'),
            ('如何从requests响应中获取解析后的JSON数据？', ['response.text', 'response.json()', 'response.data', 'response.content'], 'response.json()', 'response.json() 会自动将JSON格式的响应内容解析为Python字典或列表。'),
            ('Python中操作SQLite数据库使用哪个标准库？', ['mysql', 'psycopg2', 'sqlite3', 'pymongo'], 'sqlite3', 'sqlite3 是Python标准库中的模块，提供SQLite数据库操作接口。'),
            ('requests中设置请求超时时间使用哪个参数？', ['time', 'timeout', 'delay', 'wait'], 'timeout', 'timeout 参数设置请求的超时秒数。'),
            ('HTTP状态码404表示什么？', ['服务器内部错误', '资源未找到', '请求成功', '需要登录'], '资源未找到', '404表示客户端请求的资源在服务器上不存在。'),
            ('执行SQL查询后，获取所有结果的方法是？', ['cursor.getone()', 'cursor.fetchall()', 'cursor.read()', 'cursor.all()'], 'cursor.fetchall()', 'cursor.fetchall() 获取所有查询结果行。')
        ],
        'tfq': [
            ('POST请求发送的数据比GET请求更安全，因为数据不会出现在URL中。', True, 'GET请求的数据在URL中可见，POST数据放在请求体中。'),
            ('可以通过 response.status_code 检查HTTP请求的状态码。', True, 'status_code 属性返回响应的HTTP状态码。'),
            ('robots.txt 文件规定了网站哪些内容允许被爬虫抓取。', True, 'robots.txt 告诉爬虫哪些页面可以或不可以访问。'),
            ('cursor.fetchone() 返回查询结果中的所有行。', False, 'fetchone() 只返回下一行数据，fetchall() 才返回所有行。'),
            ('URL查询参数（?key=value形式）通常用于GET请求。', True, '查询参数是GET请求传递数据的标准方式。'),
            ('数据库操作中，conn.commit() 用于回滚事务。', False, 'commit() 提交事务使更改永久生效，rollback() 才是回滚。'),
            ('response.text 返回字符串形式的响应内容。', True, 'response.text 返回解码后的文本字符串。'),
            ('爬虫可以无限制地抓取任何网站的内容。', False, '爬取数据需要遵守网站的robots.txt和服务条款，过度抓取可能导致IP被封或法律风险。'),
            ('操作数据库后应该调用 conn.close() 关闭连接。', True, '及时关闭数据库连接是良好的实践。'),
            ('API返回的数据格式通常只有JSON一种。', False, 'API可以返回多种格式，包括JSON、XML、YAML、CSV等。')
        ]
    }


def ch4():
    return {
        'id': 4, 'title': '数据清洗',
        'content': '本章学习数据清洗的核心技术，包括缺失值处理、异常值检测、数据去重和数据类型转换，让数据变得干净可用。',
        'codeExamples': [
            ('处理缺失值', '''import pandas as pd
import numpy as np
data = {
    'A': [1, 2, np.nan, 4, 5],
    'B': [np.nan, 2, 3, np.nan, 5],
    'C': [1, 2, 3, 4, 5]
}
df = pd.DataFrame(data)
print("缺失数量：")
print(df.isnull().sum())
df_filled = df.fillna(df.mean())
print("填充后：")
print(df_filled)'''),
            ('数据去重', '''import pandas as pd
data = {
    'name': ['张三', '李四', '张三', '王五', '李四'],
    'age': [20, 25, 20, 30, 25],
    'score': [85, 90, 85, 88, 90]
}
df = pd.DataFrame(data)
print(f"重复行数：{df.duplicated().sum()}")
df_unique = df.drop_duplicates()
print("去重后：")
print(df_unique)'''),
            ('数据类型转换', '''import pandas as pd
data = {
    'price': ['￥100', '￥200', '￥300'],
    'date': ['2024-01-01', '2024-01-02', '2024-01-03'],
    'sales': ['1000', '2000', '3000']
}
df = pd.DataFrame(data)
print("原始类型：")
print(df.dtypes)
df['price'] = df['price'].str.replace('￥', '').astype(float)
df['date'] = pd.to_datetime(df['date'])
df['sales'] = pd.to_numeric(df['sales'])
print("\\n转换后类型：")
print(df.dtypes)''')
        ],
        'exercises': [
            ('购物车管理：编写一个管理购物车的程序，支持添加商品、计算总价、删除商品',
             '''def shopping_cart():
    cart = {}
    # 在这里编写代码
shopping_cart()''',
             '''def shopping_cart():
    cart = {}
    while True:
        print("\\n=== 购物车管理 ===")
        print("1. 添加商品")
        print("2. 查看购物车")
        print("3. 删除商品")
        print("4. 计算总价")
        print("5. 退出")
        choice = input("请选择：")
        if choice == '1':
            name = input("商品名：")
            price = float(input("价格："))
            qty = int(input("数量："))
            if name in cart:
                cart[name]['qty'] += qty
            else:
                cart[name] = {'price': price, 'qty': qty}
            print(f"已添加 {name} x{qty}")
        elif choice == '2':
            if not cart:
                print("购物车为空")
            else:
                total = 0
                for name, info in cart.items():
                    subtotal = info['price'] * info['qty']
                    total += subtotal
                    print(f"{name}: {info['price']}元 x{info['qty']} = {subtotal}元")
                print(f"合计：{total}元")
        elif choice == '3':
            name = input("要删除的商品名：")
            if name in cart:
                del cart[name]
                print(f"已删除 {name}")
        elif choice == '4':
            total = sum(i['price'] * i['qty'] for i in cart.values())
            print(f"购物车总价：{total}元")
        elif choice == '5':
            print("再见！")
            break
shopping_cart()''',
             '使用嵌套字典存储购物车数据，键为商品名，值为包含价格和数量的字典。',
             [('重复商品处理', '添加已有商品时没有累加数量而是覆盖', '先判断是否存在，存在则增加数量')]),
            ('数据去重练习：创建一个含重复元素的列表，实现去重并保持原有顺序',
             '''def deduplicate():
    items = ['苹果', '香蕉', '苹果', '橙子', '香蕉', '葡萄', '苹果']
    # 在这里编写代码
deduplicate()''',
             '''def deduplicate():
    items = ['苹果', '香蕉', '苹果', '橙子', '香蕉', '葡萄', '苹果']
    print(f"原始列表：{items}")
    # 方法一：使用 dict.fromkeys() 保持顺序
    unique1 = list(dict.fromkeys(items))
    print(f"去重后（保持顺序）：{unique1}")
    # 方法二：使用 set（不保证顺序）
    unique2 = list(set(items))
    print(f"去重后（set方法）：{unique2}")
deduplicate()''',
             'Python 3.7+ 中 dict.fromkeys() 保持插入顺序。如果不关心顺序，直接使用 set() 是最高效的方法。',
             [('顺序丢失', '使用 set() 去重后元素顺序被打乱', '需要保持顺序时使用 dict.fromkeys()')]),
            ('简单的数据统计：编写代码统计列表中各元素出现的次数并排序',
             '''from collections import Counter
def count_items():
    fruits = ['苹果', '香蕉', '苹果', '橙子', '香蕉', '苹果', '葡萄', '苹果', '香蕉', '橙子']
    # 在这里编写代码
count_items()''',
             '''from collections import Counter
def count_items():
    fruits = ['苹果', '香蕉', '苹果', '橙子', '香蕉', '苹果', '葡萄', '苹果', '香蕉', '橙子']
    counter = Counter(fruits)
    print("各元素出现次数：")
    for fruit, count in counter.items():
        print(f"  {fruit}: {count}次")
    print("\\n按次数排序：")
    for i, (f, c) in enumerate(counter.most_common(), 1):
        print(f"  第{i}名：{f}（{c}次）")
count_items()''',
             'collections.Counter 是Python内置的高效计数器，most_common() 方法可以直接返回排序结果。',
             [('字典键不存在', '手动统计时直接访问未初始化的键', '使用 get(key, 0)')])
        ],
        'mcq': [
            ('检查DataFrame中缺失值使用哪个方法？', ['df.empty()', 'df.isnull()', 'df.missing()', 'df.nan()'], 'df.isnull()', 'isnull() 返回布尔值的DataFrame，缺失值位置为True。'),
            ('填充缺失值使用哪个方法？', ['df.replace()', 'df.fillna()', 'df.setna()', 'df.clean()'], 'df.fillna()', 'fillna() 用指定值或策略填充缺失值。'),
            ('df.dropna() 默认行为是什么？', ['删除含有缺失值的列', '删除含有缺失值的行', '填充缺失值', '不做任何操作'], '删除含有缺失值的行', 'dropna() 默认删除任何含有缺失值的行。'),
            ('检测重复行使用哪个方法？', ['df.unique()', 'df.duplicated()', 'df.repeated()', 'df.count_dup()'], 'df.duplicated()', 'duplicated() 返回布尔Series，标记重复的行。'),
            ('将列转换为整数类型使用哪个方法？', ['.to_int()', '.astype(int)', '.convert(int)', '.asint()'], '.astype(int)', 'astype() 是Pandas数据类型转换的标准方法。'),
            ('处理异常值的第一步通常是什么？', ['直接删除', '识别和分析', '用均值替换', '忽略不管'], '识别和分析', '发现异常值后首先要分析其来源，再决定处理方式。'),
            ('IQR（四分位距）在异常值检测中的作用是什么？', ['计算均值', '定义异常值的边界', '替代缺失值', '转换数据类型'], '定义异常值的边界', 'IQR = Q3 - Q1，常用规则：小于 Q1-1.5*IQR 或大于 Q3+1.5*IQR 的值视为异常值。'),
            ('去除DataFrame中的重复行使用哪个方法？', ['df.drop_duplicates()', 'df.unique()', 'df.dedup()', 'df.remove_dup()'], 'df.drop_duplicates()', 'drop_duplicates() 删除完全相同的重复行。'),
            ('将字符串日期转换为日期类型使用哪个函数？', ['pd.Date()', 'pd.to_datetime()', 'pd.convert_date()', 'pd.date()'], 'pd.to_datetime()', 'pd.to_datetime() 可以智能解析各种格式的日期字符串。'),
            ('df.describe() 输出中不包含哪个统计量？', ['mean', 'count', 'median', 'std'], 'median', 'describe() 输出 count、mean、std、min、25%、50%、75%、max，其中 50%分位数即为中位数。')
        ],
        'tfq': [
            ('缺失值是指数据中不存在的值，空字符串也算作缺失值。', False, 'Pandas中默认只将 NaN 和 None 视作缺失值，空字符串不被视为缺失值。'),
            ('fillna() 可以用均值、中位数或前一个有效值来填充缺失值。', True, 'fillna() 接受具体值，也可以使用 method=ffill 前向填充等策略。'),
            ('drop_duplicates() 保留首次出现的行，删除后续重复的行。', True, '默认保留第一次出现的行，可以通过 keep=last 保留最后一行。'),
            ('发现异常值后必须将其删除，否则分析结果一定不准确。', False, '异常值不一定是错误，可能是真实存在的极端情况，需要先分析原因。'),
            ('包含非数字字符的字符串可以直接通过 astype(int) 转换为整数。', False, '含有非数字字符的字符串必须先清理掉非数字字符，才能进行类型转换。'),
            ('df.replace() 可以用来替换数据中的特定值。', True, 'replace() 可以替换指定的值，支持一对一、多对一和字典映射替换。'),
            ('一个DataFrame中不同列可以有不同的数据类型。', True, 'DataFrame是二维表格结构，每一列有独立的数据类型。'),
            ('drop_duplicates() 只删除所有列都相同的重复行。', True, '默认比较所有列判断重复，可以通过 subset 参数指定只比较某些列。'),
            ('ffill() 前向填充是用上一个非缺失值来填充当前缺失位置。', True, 'ffill (forward fill) 用前一个有效值填充。'),
            ("df['col'].unique() 会删除DataFrame中的重复行。", False, 'unique() 返回列中唯一值的数组（一维），它不会修改DataFrame。删除重复行应该用 drop_duplicates()。')
        ]
    }


def ch5():
    return {
        'id': 5, 'title': '数据可视化',
        'content': '本章学习使用Matplotlib和Seaborn创建专业的数据可视化图表，掌握折线图、柱状图、散点图等常用图表的绘制方法。',
        'codeExamples': [
            ('创建折线图', '''import matplotlib.pyplot as plt
months = ['1月', '2月', '3月', '4月', '5月', '6月']
sales = [120, 150, 180, 160, 200, 230]
plt.figure(figsize=(10, 6))
plt.plot(months, sales, marker='o', linewidth=2, color='blue')
plt.title('2024年上半年销售趋势', fontsize=14)
plt.xlabel('月份', fontsize=12)
plt.ylabel('销售额（万元）', fontsize=12)
plt.grid(True, alpha=0.3)
plt.show()'''),
            ('创建柱状图', '''import matplotlib.pyplot as plt
categories = ['产品A', '产品B', '产品C', '产品D', '产品E']
values = [350, 280, 420, 180, 300]
plt.figure(figsize=(10, 6))
bars = plt.bar(categories, values, color=['#4CAF50', '#2196F3', '#FF9800', '#F44336', '#9C27B0'])
plt.title('各产品销售额对比', fontsize=14)
plt.xlabel('产品类别', fontsize=12)
plt.ylabel('销售额（万元）', fontsize=12)
for bar in bars:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width()/2., height + 5,
             f'{height}', ha='center', fontsize=10)
plt.show()'''),
            ('创建散点图', '''import matplotlib.pyplot as plt
import numpy as np
np.random.seed(42)
x = np.random.rand(100) * 10
y = 2 * x + np.random.randn(100) * 3 + 5
plt.figure(figsize=(10, 6))
plt.scatter(x, y, alpha=0.6, c='red', s=50)
plt.title('广告投入与销售额关系', fontsize=14)
plt.xlabel('广告投入（万元）', fontsize=12)
plt.ylabel('销售额（万元）', fontsize=12)
plt.grid(True, alpha=0.3)
plt.show()''')
        ],
        'exercises': [
            ('骰子游戏：编写模拟掷骰子游戏，统计各种点数出现次数并用柱状图展示',
             '''import random
import matplotlib.pyplot as plt
def dice_game(rolls=1000):
    # 在这里编写代码
dice_game()''',
             '''import random
import matplotlib.pyplot as plt
from collections import Counter
def dice_game(rolls=1000):
    results = [random.randint(1, 6) for _ in range(rolls)]
    counter = Counter(results)
    print(f"投掷 {rolls} 次骰子结果：")
    for num in range(1, 7):
        count = counter.get(num, 0)
        pct = count / rolls * 100
        print(f"点数 {num}: {count}次 ({pct:.1f}%)")
    nums = list(range(1, 7))
    counts = [counter.get(num, 0) for num in nums]
    plt.figure(figsize=(10, 6))
    plt.bar(nums, counts, color='steelblue')
    plt.title(f'骰子模拟结果（共{rolls}次）', fontsize=14)
    plt.xlabel('点数', fontsize=12)
    plt.ylabel('出现次数', fontsize=12)
    plt.xticks(nums)
    plt.grid(axis='y', alpha=0.3)
    plt.show()
dice_game()''',
             '使用列表推导式和 random.randint() 模拟掷骰子，Counter 统计各点数次数，用柱状图可视化。',
             [('未设置随机种子', '结果不可复现', '可添加 random.seed(数字) 使结果固定')]),
            ('简单统计计算：编写代码生成随机数据并计算基础统计量，然后绘制折线图',
             '''import random
import matplotlib.pyplot as plt
def stats_and_plot():
    # 在这里编写代码
stats_and_plot()''',
             '''import random
import matplotlib.pyplot as plt
def stats_and_plot():
    random.seed(42)
    months = list(range(1, 13))
    sales = [random.randint(50, 200) for _ in range(12)]
    total = sum(sales)
    avg = total / len(sales)
    print(f"月度销售：总数={total}, 平均={avg:.1f}")
    plt.figure(figsize=(12, 6))
    plt.plot(months, sales, marker='o', linewidth=2, color='orange', label='销售额')
    plt.axhline(y=avg, color='red', linestyle='--', label=f'平均值={avg:.1f}')
    plt.title('月度销售走势图', fontsize=14)
    plt.xlabel('月份', fontsize=12)
    plt.ylabel('销售额', fontsize=12)
    plt.legend()
    plt.xticks(months)
    plt.grid(True, alpha=0.3)
    plt.show()
stats_and_plot()''',
             '使用 random.randint() 生成随机数据，计算统计量，然后用折线图展示趋势，并用 axhline() 标注平均线。',
             [('刻度不清晰', '未设置 xticks 导致横坐标显示不全', '使用 plt.xticks() 设置清晰的刻度')]),
            ('列表操作：编写代码将两个列表中的数据绘制成对比柱状图',
             '''import matplotlib.pyplot as plt
def compare_chart():
    subjects = ['语文', '数学', '英语', '物理', '化学']
    class_a = [85, 78, 92, 70, 80]
    class_b = [80, 88, 85, 75, 86]
    # 在这里编写代码
compare_chart()''',
             '''import matplotlib.pyplot as plt
import numpy as np
def compare_chart():
    subjects = ['语文', '数学', '英语', '物理', '化学']
    class_a = [85, 78, 92, 70, 80]
    class_b = [80, 88, 85, 75, 86]
    x = np.arange(len(subjects))
    width = 0.35
    fig, ax = plt.subplots(figsize=(12, 6))
    bars1 = ax.bar(x - width/2, class_a, width, label='A班', color='#4CAF50')
    bars2 = ax.bar(x + width/2, class_b, width, label='B班', color='#2196F3')
    ax.set_xlabel('科目', fontsize=12)
    ax.set_ylabel('平均分', fontsize=12)
    ax.set_title('两班成绩对比', fontsize=14)
    ax.set_xticks(x)
    ax.set_xticklabels(subjects)
    ax.legend()
    ax.set_ylim(0, 100)
    for bars in [bars1, bars2]:
        for bar in bars:
            h = bar.get_height()
            ax.text(bar.get_x() + bar.get_width()/2., h + 1,
                    str(h), ha='center', fontsize=9)
    plt.grid(axis='y', alpha=0.3)
    plt.tight_layout()
    plt.show()
compare_chart()''',
             '使用 numpy.arange() 创建位置索引，通过调整柱子位置实现并排柱状图。',
             [('柱子重叠', '两班柱子位置设置错误导致完全重叠', '使用 x +/- width/2 分别设置两组柱子位置')])
        ],
        'mcq': [
            ('Matplotlib中用于创建新画布的函数是？', ['plt.new()', 'plt.figure()', 'plt.canvas()', 'plt.create()'], 'plt.figure()', 'plt.figure() 创建一个新的画布对象，figsize 参数可以设置画布大小。'),
            ('绘制折线图使用哪个函数？', ['plt.line()', 'plt.plot()', 'plt.linechart()', 'plt.draw()'], 'plt.plot()', 'plt.plot() 是Matplotlib最基础的绘图函数。'),
            ('设置图表标题使用哪个函数？', ['plt.title()', 'plt.name()', 'plt.label()', 'plt.header()'], 'plt.title()', 'plt.title() 设置图表的主标题。'),
            ('绘制柱状图使用哪个函数？', ['plt.bar()', 'plt.column()', 'plt.barplot()', 'plt.hist()'], 'plt.bar()', 'plt.bar() 绘制柱状图。'),
            ('绘制散点图使用哪个函数？', ['plt.point()', 'plt.scatter()', 'plt.dot()', 'plt.spread()'], 'plt.scatter()', 'plt.scatter() 专门用于绘制散点图。'),
            ('添加图例使用哪个函数？', ['plt.legend()', 'plt.key()', 'plt.note()', 'plt.explain()'], 'plt.legend()', 'plt.legend() 添加图例，需要配合绘图函数中的 label 参数。'),
            ('设置图形元素透明度使用哪个参数？', ['trans', 'alpha', 'beta', 'opacity'], 'alpha', 'alpha 参数设置透明度，取值范围 0-1。'),
            ('设置折线图中数据点标记样式使用哪个参数？', ['mark', 'symbol', 'marker', 'dot'], 'marker', "marker 参数设置数据点的形状标记，如 'o' 圆形、's' 方形等。"),
            ('设置线条粗细使用哪个参数？', ['thickness', 'linewidth', 'width', 'lw2'], 'linewidth', 'linewidth（或简写为 lw）设置线条的粗细。'),
            ('Seaborn库与Matplotlib的关系是什么？', ['完全无关', 'Seaborn基于Matplotlib', 'Matplotlib基于Seaborn', '两者互相竞争'], 'Seaborn基于Matplotlib', 'Seaborn是在Matplotlib基础上构建的高级绘图库，提供更美观的默认样式。')
        ],
        'tfq': [
            ('使用 plt.show() 可以在终端或Notebook中显示绘制的图形。', True, 'plt.show() 是显示图形的标准方式。'),
            ('plt.grid(True) 可以在图表中添加网格线。', True, 'grid(True) 显示网格线。'),
            ('在一个图中只能绘制一条折线，不能同时绘制多条。', False, '可以在同一个 figure 中多次调用 plt.plot() 绘制多条线。'),
            ('plt.tight_layout() 可以自动调整子图布局防止重叠。', True, 'tight_layout() 自动调整子图间距，优化标签位置。'),
            ('Matplotlib的 color 参数只能接受英文颜色名。', False, 'color 支持多种格式：颜色名、十六进制代码、RGB元组、灰度值等。'),
            ('箱线图（Box Plot）可以展示数据的中位数、四分位数和异常值。', True, '箱线图通过箱体展示四分位距，线条展示中位数和极值范围。'),
            ('饼图适合展示数据的时间序列变化趋势。', False, '饼图用于展示各部分占整体的比例，时间趋势应该用折线图或柱状图。'),
            ('seaborn的 histplot() 可以绘制直方图展示数据分布。', True, 'histplot() 是Seaborn绘制直方图的函数。'),
            ('plt.savefig() 可以将图表保存为PNG、JPG、PDF等格式文件。', True, 'savefig() 根据文件扩展名自动确定格式。'),
            ('设置横坐标标签使用 plt.xlabel()，纵坐标标签使用 plt.ylabel()。', True, 'xlabel() 和 ylabel() 分别设置x轴和y轴的标签文字。')
        ]
    }


def ch6():
    return {
        'id': 6, 'title': '统计分析基础',
        'content': '本章学习统计分析基础知识，包括描述性统计、假设检验、相关分析和回归分析基础，掌握用数据进行科学推断的能力。',
        'codeExamples': [
            ('描述性统计', '''import pandas as pd
import numpy as np
np.random.seed(42)
data = pd.Series(np.random.randn(1000) * 10 + 50)
print(f"平均值: {data.mean():.2f}")
print(f"中位数: {data.median():.2f}")
print(f"标准差: {data.std():.2f}")
print(f"方差: {data.var():.2f}")
print(f"最小值: {data.min():.2f}")
print(f"最大值: {data.max():.2f}")
print("Pandas describe：")
print(data.describe())'''),
            ('相关性分析', '''import pandas as pd
import numpy as np
np.random.seed(42)
x = np.random.rand(100) * 10
y = 2 * x + np.random.randn(100) * 2
z = -x + np.random.randn(100) * 3
df = pd.DataFrame({'广告投入': x, '销售额': y, '退货率': z})
corr_matrix = df.corr()
print("相关系数矩阵：")
print(corr_matrix)'''),
            ('假设检验示例', '''import numpy as np
from scipy import stats
np.random.seed(42)
group_a = np.random.normal(85, 5, 30)
group_b = np.random.normal(80, 6, 30)
print(f"A班平均分: {group_a.mean():.2f}")
print(f"B班平均分: {group_b.mean():.2f}")
t_stat, p_value = stats.ttest_ind(group_a, group_b)
print(f"t统计量: {t_stat:.4f}")
print(f"p值: {p_value:.4f}")
if p_value < 0.05:
    print("结论: p < 0.05，两班成绩存在显著差异")
else:
    print("结论: p >= 0.05，两班成绩无显著差异")''')
        ],
        'exercises': [
            ('猜数字2.0电脑猜：编写让电脑自动猜测数字的程序，用二分法优化效率',
             '''import random
def computer_guess():
    # 在这里编写代码
computer_guess()''',
             '''import random
def computer_guess():
    print("请在心中想一个1-1000之间的数字")
    low = 1
    high = 1000
    attempts = 0
    while low <= high:
        guess = (low + high) // 2
        attempts += 1
        print(f"电脑猜测第{attempts}次：{guess}")
        feedback = input("请回答(>/</=)：").strip()
        if feedback == '=':
            print(f"电脑用{attempts}次猜中了你的数字！")
            break
        elif feedback == '>':
            high = guess - 1
        elif feedback == '<':
            low = guess + 1
        else:
            print("请输入有效的符号")
            continue
    print(f"共尝试 {attempts} 次")
computer_guess()''',
             '二分法每次将搜索范围缩小一半，时间复杂度为 O(log n)。在1-1000范围内，最多只需10次猜测。',
             [('边界更新错误', '更新 low/high 时忘记加减1导致死循环', '太大时 high=guess-1，太小时 low=guess+1')]),
            ('简单的统计计算：编写代码生成数据并计算偏度和峰度，理解数据分布特征',
             '''import numpy as np
from scipy import stats
def distribution_analysis():
    # 在这里编写代码
distribution_analysis()''',
             '''import numpy as np
from scipy import stats
def distribution_analysis():
    np.random.seed(42)
    normal_data = np.random.normal(50, 10, 1000)
    skewed_data = np.random.exponential(20, 1000) + 20
    uniform_data = np.random.uniform(20, 80, 1000)
    datasets = {
        '正态分布': normal_data,
        '右偏分布': skewed_data,
        '均匀分布': uniform_data
    }
    print("=== 分布特征分析 ===")
    for name, data in datasets.items():
        mean = np.mean(data)
        median = np.median(data)
        std = np.std(data)
        skew = stats.skew(data)
        kurt = stats.kurtosis(data)
        print(f"{name}: 均值={mean:.1f}, 中位数={median:.1f}, 标准差={std:.1f}, 偏度={skew:.2f}, 峰度={kurt:.2f}")
    print("偏度>0表示右偏，峰度>0表示尖峰厚尾。")
distribution_analysis()''',
             '偏度衡量分布的对称性，峰度衡量分布的陡峭程度。结合均值和中位数的大小关系，可以判断数据分布形状。',
             [('样本与总体混淆', '未注意某些库默认计算的是样本统计量', '注意查看文档是否需要调整参数（如 ddof）')]),
            ('数据分析练习：编写代码计算两组数据的相关系数并进行线性回归拟合',
             '''import numpy as np
from scipy import stats
import matplotlib.pyplot as plt
def regression_analysis():
    # 在这里编写代码
regression_analysis()''',
             '''import numpy as np
from scipy import stats
import matplotlib.pyplot as plt
def regression_analysis():
    hours = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    scores = np.array([45, 55, 60, 68, 75, 82, 88, 92, 95, 98])
    corr, _ = stats.pearsonr(hours, scores)
    print(f"Pearson相关系数: {corr:.4f}")
    slope, intercept, r_value, p_val, std_err = stats.linregress(hours, scores)
    print(f"回归方程: 分数 = {slope:.2f} x 时长 + {intercept:.2f}")
    print(f"R^2: {r_value**2:.4f}")
    for h in [3.5, 7.5]:
        pred = slope * h + intercept
        print(f"学习{h}小时，预测得分: {pred:.1f}分")
    plt.figure(figsize=(10, 6))
    plt.scatter(hours, scores, color='blue', s=100, label='实际数据')
    x_line = np.linspace(min(hours), max(hours), 100)
    plt.plot(x_line, slope * x_line + intercept, 'r-', linewidth=2, label='回归线')
    plt.xlabel('学习时长（小时）', fontsize=12)
    plt.ylabel('考试分数', fontsize=12)
    plt.title('学习时长与分数关系（线性回归）', fontsize=14)
    plt.legend()
    plt.grid(True, alpha=0.3)
    plt.show()
regression_analysis()''',
             '使用 scipy.stats.linregress() 进行最小二乘线性回归。R²越接近1，模型拟合越好。',
             [('因果误解', '把相关性误判为因果关系', '相关不代表因果，需谨慎解读回归结果')])
        ],
        'mcq': [
            ('以下哪个统计量最能反映数据的集中趋势？', ['标准差', '均值', '方差', '相关系数'], '均值', '均值、中位数、众数都是描述数据集中趋势的统计量。'),
            ('标准差描述的是什么？', ['数据的平均值', '数据的分散程度', '数据的最大值', '数据的个数'], '数据的分散程度', '标准差衡量数据与其均值的平均距离，反映数据的离散程度。'),
            ('相关系数的取值范围是？', ['0 到 1', '-1 到 1', '0 到 100', '-100 到 100'], '-1 到 1', '相关系数取值范围为 -1 到 1。1表示完全正相关，-1表示完全负相关，0表示无线性关系。'),
            ('在假设检验中，通常以什么标准判断结果是否显著？', ['p < 0.5', 'p < 0.05', 'p > 0.05', 'p = 0'], 'p < 0.05', '通常将显著性水平 α 设为 0.05，当 p < 0.05 时拒绝原假设。'),
            ('如果一组数据服从标准正态分布，其均值、中位数、众数的关系是？', ['均值 > 中位数 > 众数', '三者相等', '均值 < 中位数 < 众数', '没有固定关系'], '三者相等', '正态分布是对称分布，均值、中位数和众数完全相同。'),
            ('在t检验中，原假设(H0)通常是什么？', ['两组存在显著差异', '两组没有显著差异', '一定存在差异', '无法判断'], '两组没有显著差异', '原假设通常假设无效应、无差异、无关联。'),
            ('t检验主要用于什么？', ['比较多组均值', '比较两组均值的差异', '分析相关性', '描述数据分布'], '比较两组均值的差异', 't检验用于比较两组的均值是否存在显著差异。'),
            ('相关分析可以揭示变量之间的什么关系？', ['因果关系', '线性关系的强度', '时间顺序', '确定性关系'], '线性关系的强度', '相关系数仅衡量线性关系的强度和方向，不代表因果关系。'),
            ('置信水平 95% 意味着什么？', ['有95%的概率真实值在置信区间内', '数据有95%的准确率', '95%的数据在范围内', '误差为5%'], '有95%的概率真实值在置信区间内', '95%置信水平意味着重复抽样时，约95%的区间会包含真实的总体参数。'),
            ('方差与标准差的关系是什么？', ['方差 = 标准差', '方差 = 标准差的平方', '方差 = 标准差的平方根', '没有直接关系'], '方差 = 标准差的平方', '方差是标准差的平方，两者都是衡量数据离散程度的指标。')
        ],
        'tfq': [
            ('均值对异常值非常敏感，极端值会显著影响均值结果。', True, '均值受所有数据影响，极端值会将均值拉向它们。相比之下，中位数对异常值更稳健。'),
            ('相关系数为0说明两个变量之间完全没有关系。', False, '相关系数为0仅说明无线性关系，但可能存在非线性关系。'),
            ('大数定律表明样本量越大，样本均值越接近总体均值。', True, '大数定律保证样本量足够大时，样本统计量会稳定地接近总体参数。'),
            ('拒绝原假设意味着原假设一定是错误的。', False, '拒绝原假设只表示统计证据不足以支持它，并不意味着它绝对错误，仍可能有错误判断的概率。'),
            ('z分数（标准分数）表示一个值距离均值有多少个标准差。', True, 'z = (x - 均值) / 标准差，表示x相对于均值的位置。'),
            ('显著性水平 α 是犯第一类错误（假阳性）的概率上限。', True, 'α 是预先设定的显著性阈值，代表愿意容忍的假阳性错误率。'),
            ('线性回归分析可以确定变量之间的因果关系。', False, '回归分析展示变量之间的预测关系，但不能确定因果方向。因果关系需要实验设计或逻辑推断。'),
            ('中位数是将数据排序后位于中间位置的值。', True, '中位数将数据分为两半，50%的数据小于中位数，50%大于中位数。'),
            ('变异系数（CV）= 标准差 / 均值，用于比较不同数据组的离散程度。', True, '变异系数消除了量纲和均值大小的影响，可用于比较不同量级数据的离散程度。'),
            ('数据清洗和数据预处理不属于数据分析的必要步骤。', False, '数据清洗是数据分析的基础和核心步骤。低质量数据会导致错误结论。')
        ]
    }


# === 生成完整文件 ===
chapters = [ch1(), ch2(), ch3(), ch4(), ch5(), ch6()]

header = '''// 课程数据结构定义
export interface Exercise {
  id: number;
  type: 'coding';
  question: string;
  starterCode: string;
  solution: string;
  explanation: string;
  commonErrors?: { error: string; description: string; solution