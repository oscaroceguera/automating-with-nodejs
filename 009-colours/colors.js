const log = require('./log')
const {ERROR, WARNING, SUCCESS} = require('./message-types')

log('This is a success message', SUCCESS)
log('This is a warning message', WARNING)
log('This is a error message', ERROR)
log('This is an info message')
