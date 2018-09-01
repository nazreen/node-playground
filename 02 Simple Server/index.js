const server = require('http').createServer()
const fs = require('fs')

server.on('request', (req,res) => {
  switch (req.url) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.end(fs.readFileSync('./home.html'))
      break
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.end(fs.readFileSync('./about.html'))
      break
    default:
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.end(`You visited ${req.url}`)
  }

})

server.listen(8000, () => { console.log('Server is now running on port 8000') })