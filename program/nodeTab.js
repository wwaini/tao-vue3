import fs from 'fs';
// inquirer这个库来创建交互式的命令行界面
import inquirer from 'inquirer';

// 命令行可选后端接口范围
const targetList = [
  {
    name: '张三',
    value: "\t\t\t\ttarget: 'http://33.33.33.33:3333',",
  },
  {
    name: '李四',
    value: "\t\t\t\ttarget: 'http://44.44.44.44:4444',",
  },
  {
    name: '王二',
    value: "\t\t\t\ttarget: 'http://22.22.22.22:2222',",
  },
  {
    name: '麻子',
    value: "\t\t\t\ttarget: 'http://55.55.55.55:5555',",
  },
]
// 去找到target这一行代码
function findTarget(file) {
  let arr = file.split('\n')
  let targetStr = ''
  for (let i = 0; i < arr.length; i++) { // 通过循环找到对应行
    if (arr[i].includes('target:')) {
      targetStr = arr[i] // 赋值一下，找到了
      break
    }
  }
  return targetStr
}
// 选择方法
async function selectServe() {
  try {
    // 在命令行进行选择
    const choose = await inquirer.prompt([
      {
        type: 'list',
        name: 'serve',
        message: '请选择开发环境下需要连接的后端服务',
        choices: targetList,
        default: targetList[0].value
      }
    ])
    // 读取了文件vite.config.js为string格式
    let file = fs.readFileSync('./vite.config.js', 'utf-8')
    // 找到target这一行
    let proxyTarget = findTarget(file)
    // 替换我们新选的后端服务地址
    const newFile = file.replace(proxyTarget, choose.serve)
    // 重新写入vite.config.js
    fs.writeFileSync('./vite.config.js', newFile)
  } catch (error) {
    throw error
  }
}

selectServe()