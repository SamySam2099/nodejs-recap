import http from 'http'
const PORT = process.env.PORT

const ROUTE_TO_HTML = {
  HOMEPAGE: '<h1>Homepage</h1>',
  ABOUT: '<h1>About</h1>',
  NOT_FOUND: '<h1>Not Found</h1>',
}

const server = http.createServer((req, res) => {
  // Content - Type header tells which type of data is being sent in the response
  // It tells the client how to interpret the data
  //  res.setHeader('Content-Type', 'text/html')

  // Unlike express, node.js would just run the command for any
  // endpoint like /, /about, /anything
  //console.log(req.url)
  //console.log(req.method)

  //res.write('Hello world')

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(ROUTE_TO_HTML.HOMEPAGE)
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(ROUTE_TO_HTML.ABOUT)
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.end(ROUTE_TO_HTML.NOT_FOUND)
  }
})

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
