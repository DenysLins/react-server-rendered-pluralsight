const Express = require('express')

const app = new Express()

app.get('/', (req, res) => {
  res.send(
    '<h1>React server rendered</h1>'
  )
})

const port = process.env.PORT ? process.env.PORT : 7777
app.listen(port)
console.info(`Server is listening in port ${port}`)
