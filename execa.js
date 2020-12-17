const execa = require('execa')

test()
console.log('about to run jest --passWithNoTests ./test')

function test() {
  const child = execa.command('jest --passWithNoTests ./test', {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    cwd: process.cwd(),
    preferLocal: true
  })
}
