const execa = require('execa')

test()

function test() {
 
  const child = execa.command('npm list', {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
    cwd: process.cwd(),
    preferLocal: true
  })
  
}
