const execa = require('execa')

test()
console.log('test done')

function test() {
  const child = execa.command('jest --passWithNoTests ./test', {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    shell: true,
    cwd: process.cwd(),
    preferLocal: true
  })
}
