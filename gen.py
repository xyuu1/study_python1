#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""生成完整的 courses.ts 文件"""

def s(x): return '"' + x.replace('\\', '\\\\').replace('"', '\\"') + '"'
def c(x): return '`' + x.replace('\\', '\\\\').replace('`', '\\`').replace('$', '\\$') + '`'

# ============ 生成章节 ============
def gen_ch(ch):
    lines = []
    lines.append('    // === 第%d章：%s ===' % (ch['id'], ch['title']))
    lines.append('    {')
    lines.append('      id: %d,' % ch['id'])
    lines.append('      title: %s,' % s(ch['title']))
    lines.append('      content: %s,' % s(ch['content']))
    # codeExamples
    lines.append('      codeExamples: [')
    for t, code in ch['codeExamples']:
        lines.append('        { title: %s, code: %s },' % (s(t), c(code)))
    lines.append('      ],')
    # exercises
    lines.append('      exercises: [')
    for idx, (q, starter, sol, expl, errs) in enumerate(ch['exercises']):
        lines.append('        {')
        lines.append('          id: %d,' % (idx + 1))
        lines.append('          type: "coding",')
        lines.append('          question: %s,' % s(q))
        lines.append('          starterCode: %s,' % c(starter))
        lines.append('          solution: %s,' % c(sol))
        lines.append('          explanation: %s,' % s(expl))
        if errs:
            lines.append('          commonErrors: [')
            for e in errs:
                lines.append('            { error: %s, description: %s, solution: %s },' % (s(e[0]), s(e[1]), s(e[2])))
            lines.append('          ]')
        else:
            lines.append('          commonErrors: []')
        lines.append('        },')
    lines.append('      ],')
    # quiz
    lines.append('      quiz: {')
    lines.append('        multipleChoice: [')
    for idx, (q, opts, correct, expl) in enumerate(ch['mcq']):
        o = ', '.join([s(x) for x in opts])
        lines.append('          { id: %d, type: "multiple_choice", question: %s, options: [%s], correctAnswer: %s, explanation: %s },' 
                     % (idx + 1, s(q), o, s(correct), s(expl)))
    lines.append('        ],')
    lines.append('        trueFalse: [')
    for idx, (q, correct, expl) in enumerate(ch['tfq']):
        lines.append('          { id: %d, type: "true_false", question: %s, correctAnswer: %s, explanation: %s },' 
                     % (idx + 1, s(q), 'true' if correct else 'false', s(expl)))
    lines.append('        ]')
    lines.append('      }')
    lines.append('    },')
    return '\n'.join(lines)

# ============ 章节数据 ============
def ch1():
    return { 'id': 1, 'title': 'Python基础',
    'content': '本章学习Python编程语言的基础知识，包括变量、数据类型、控制流和函数等核心概念，为后续数据分析学习打下坚实基础。',
    'codeExamples': [
        ('变量与数据类型', '''name = "张三"
age = 20
height = 1.75
is_student = True
print(f"姓名：{name}")
print(type(age), type(height))'''),
        ('列表与字典操作', '''numbers = [1, 2, 3, 4, 5]
numbers.append(6)
print(f"长度：{len(numbers)}, 求和：{sum(numbers)}")
student = {"name": "张三", "age": 20}
print(student["name"])'''),
        ('函数定义与调用', '''def greet(name):
    return f"你好，{name}！"
def stats(nums):
    return {"sum": sum(nums), "avg": sum(nums)/len(nums)}
print(greet("数据分析"))
print(stats([10, 20, 30, 40, 50]))''')],
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
                print(f"恭喜你，猜对了！用了{attempts}次。")
                break
        except ValueError:
            print("请输入有效的数字！")
guess_number()''',
         '使用 random.randint() 生成随机数，用 while 循环让用户持续猜测，根据猜测结果给出提示。try-except 处理非法输入。',
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
    print("欢迎来到石头剪刀布！输入退出结束游戏。")
    while True:
        player = input("你的选择（石头/剪刀/布）：")
        if player == '退出': break
        if player not in choices: continue
        computer = random.choice(choices)
        print(f"电脑选择：{computer}")
        if player == computer: print("平局！")
        elif (player=='石头'and computer=='剪刀')or(player=='剪刀'and computer=='布')or(player=='布'and computer=='石头'):
            print("你赢了！")
        else: print("你输了！")
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
         '斐波那契数列的每个数是前两个数的和，用列表存储序列，循环逐步生成后续的数。',
         [('边界情况处理', '没有处理n为0或1的情况', '先判断n的大小并返回相应结果')])],
    'mcq': [
        ('Python中，以下哪个是正确的变量命名？', ['2name', 'my-name', 'my_name', 'myName'], 'my_name', 'Python变量名必须以字母或下划线开头，不能以数字开头。my_name是推荐的命名方式。'),
        ('type()函数的作用是什么？', ['修改变量类型', '返回变量的类型', '创建新变量', '删除变量'], '返回变量的类型', 'type()函数返回变量或值的数据类型。'),
        ('以下哪个是浮点数的例子？', ['42', '"3.14"', '3.14', 'True'], '3.14', '浮点数（float）是包含小数点的数值类型。'),
        ('Python中整数除法使用哪个运算符？', ['/', '//', '%', '*'], '//', '//是整数除法运算符，返回整数结果。/是普通除法，返回浮点数。'),
        ('字符串可以使用什么符号定义？', ['只有双引号', '只有单引号', '单引号或双引号', '只有中括号'], '单引号或双引号', 'Python中字符串可以用单引号或双引号定义。'),
        ('len()函数不能用于以下哪个类型？', ['字符串', '列表', '字典', '整数'], '整数', 'len()函数用于获取序列的长度，整数不是序列类型。'),
        ('input()函数的返回值类型是什么？', ['整数', '浮点数', '字符串', '布尔值'], '字符串', 'input()函数总是返回字符串类型。需要数值时要用int()或float()转换。'),
        ('Python中的布尔值True和False分别等价于？', ['1和0', '"1"和"0"', '10和0', '其他'], '1和0', '在Python中，True等价于1，False等价于0。'),
        ('str(123)的作用是什么？', ['转成整数', '转成浮点数', '转成字符串', '转成布尔值'], '转成字符串', 'str()函数将其他类型转换为字符串。'),
        ('以下哪个是正确的注释符号？', ['//', '/* */', '#', '--'], '#', 'Python中使用#符号创建单行注释。')],
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
        ('type()函数可以用来查看变量的数据类型。', True, 'type()是Python内置函数，返回对象的类型信息。')]
    }

# 输出第1章
print(gen_ch(ch1()))
