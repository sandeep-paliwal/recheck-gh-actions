const execa = require('execa')
console.log('about to run test')
test()
console.log('completed test')

function test() {
  const child = execa.command('npm list', {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    cwd: process.cwd(),
    preferLocal: true
  })
  
  const child = execa.command('jest --passWithNoTests ./test', {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    cwd: process.cwd(),
    preferLocal: true
  })
  
}
