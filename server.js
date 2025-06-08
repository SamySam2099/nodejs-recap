import http from 'http'
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
  // Content - Type header tells which type of data is being sent in the response
  // It tells the client how to interpret the data
  //  res.setHeader('Content-Type', 'text/html')

  // Unlike express, node.js would just run the command for any
  // endpoint like /, /about, /anything
  console.log(req.url)
  console.log(req.method)

  //res.write('Hello world')

  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify({ message: 'Hello' }))
})

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
