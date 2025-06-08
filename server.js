import http from 'http'
const PORT = 8000

const server = http.createServer((req, res) => {
  // Content - Type header tells which type of data is being sent in the response
  // It tells the client how to interpret the data
  res.setHeader('Content-Type', 'text/html')

  //res.write('Hello world')

  res.end(`<h1>Hello world!</h1>`)
})

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
