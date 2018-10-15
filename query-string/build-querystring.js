const queryString = require('querystring')

const apiHost = 'https://jira.my-company.com/rest/latest/search?jql='

const jqlParams = {
  assignee: 'shaun.stone',
  startAt: 2,
  maxResults: 2
}

const apiUrl = `${apiHost}"${queryString.stringify(jqlParams)}"`

console.log(`My JQL api call is: ${apiUrl}`)
