const fs = require('fs')

const readJson = file => new Promise((resolve, reject) => {
  fs.readFile(file, {encoding: 'UTF-8'}, (err, data) => {
    if (err) {
      reject(err)
    }
    resolve(JSON.parse(data))
  })
})

readJson(`${__dirname}/../file-system/example-config.json`)
  .then(config => console.log(config.projectId))
  .catch(e => console.log('error ', e))

const {projectId, startDate, endDate} = require('./example-config')

console.log(`The ID of the project is: ${projectId}`)
console.log(`The start date of the project is: ${startDate}`)
console.log(`The end date of the project is: ${endDate}`)
