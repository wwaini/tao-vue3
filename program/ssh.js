// ssh2-sftp-client连接远程服务器的npm包。
// const Client = require('ssh2-sftp-client');
import Client from 'ssh2-sftp-client';
// ora依赖包的作用就是用于node的控制台进度美化。
// const ora = require('ora');
import ora from 'ora';
// 远程服务器
const config = {
  host: '101.35.147.112',
  port: '22',
  username: 'Administrator',
  password: 'Aa@qwer12345#'
};
async function uploadDist(localPath, remotePath) {
  const sftp = new Client();
  const spinner = ora('Loading unicorns').start();

  try {
    spinner.text = '连接服务器...'
    await sftp.connect(config) // 连接
    spinner.text = '服务器连接成功...'
    spinner.text = '删除文件中...'
    await sftp.rmdir(remotePath, true) // 删除
    spinner.text = '文件删除成功...'
    spinner.text = '文件上传中...'
    await sftp.uploadDir(localPath, remotePath) // 上传
    spinner.text = '文件上传成功...'
  } catch (err) {
  } finally {
    await sftp.end()
    spinner.text = '脚本执行完毕...'
  }
}
// 调用方法传入 要上传的包和上传到服务器哪个文件夹
uploadDist('../dist', 'C:/test/dist')