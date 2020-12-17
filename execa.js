const execa = require('execa')
console.log('about to run test')
test()
console.log('completed test')

function test() {
  const child1 = execa.command('npm list', {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    cwd: process.cwd(),
    preferLocal: true
  })
  
  const child2 = execa.command('jest --passWithNoTests ./test', {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    cwd: process.cwd(),
    preferLocal: true
  })
  
}
