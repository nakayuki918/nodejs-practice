const port = 3000
const http = require('http')
const fs = require('fs')
const httpStatus = require('http-status-codes')

const getUrl = (url) => {
  return `views${url}.html`
}
http.createServer((req, res) => {
  console.log(req.url)
  fs.readFile(getUrl(req.url),  (error, data) => {
    if (error) {
      res.writeHead(httpStatus.NOT_FOUND)
      res.write('not found')
    } else {
      res.writeHead(httpStatus.OK, {
        'Content-Type': 'text/html'
      })
      res.write(data);
    }
    res.end();
  })

}).listen(port)
