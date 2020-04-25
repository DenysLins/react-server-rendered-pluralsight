const Express = require('express')

const app = new Express()

app.get('/', (req, res) => {
  res.send(
    '<h1>Hello World</h1>'
  )
})

app.listen(7777)
console.info('Server is listening in port 7777')
