const os = require('os')

const homeDirectory = os.homedir()
console.log(`Your home directory is: ${homeDirectory}`)

const osPlataform = os.platform()
console.log(`the Os paltform is: ${osPlataform}`)

const cpuCores = os.cpus()
const coreCount = cpuCores.length
const cpuModel = cpuCores[0].model

console.log(`I can see your ${cpuModel} has ${coreCount} cores`)
