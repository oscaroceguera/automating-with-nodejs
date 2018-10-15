const args = process.argv.slice(2)
const [name] = args

if (name === undefined) {
  console.error('Pease pass a name, e.g. node hello.js Oscar')
  process.exit(0)
}

console.log(`Good day to you ${name}`)
