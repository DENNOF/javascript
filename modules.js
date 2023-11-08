const os = require('os')


//information about the current user
const user = os.userInfo()

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem:  os.totalmem(),
    freeMem: os.freemem()
}
function Memingb(){
    const cov = 1048576
    const gb1 = currentOS.freeMem/cov
    console.log(gb1)
}

Memingb()
console.log(currentOS)
console.log(user)


const {readFileSync, writeFileSync} = require('fs')

const one = readFileSync('./myfile.txt', 'utf-8')
console.log(one)






