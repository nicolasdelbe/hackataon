const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const sqlite = require('sqlite')

const db = require('./db')
const characters = require('./characters')
const filldb = require('./filldb')

const app = express()
const port = process.env.PORT || 2222;
const dbPromise = sqlite.open('./database.sqlite', { Promise });

app.use(express.static('public'))
app.use(methodOverride('__method'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const html = `
<!doctype html>
<html class='no-js' lang=''>
  <head>
    <meta charset='utf-8'>
    <title>Adopte un wookie</title>
    <link rel='stylesheet' href='CSS/bootstrap.min.css'>
    <link rel='stylesheet' href='CSS/style.css'>
  </head>
  <body>
    <div class='container-fluid'>
      <div class='row justify-content-center'>
        <div class='col-12'>
          <img id='mainImage' src='https://media.giphy.com/media/oeGgcmHVHLVCg/giphy.gif' />
        </div>
      </div>
    </div>
    <div id='main'></div>
    <script src='/app.js'></script>
    <script src='JS/bootstrap.min.js'></script>
  </body>
</html>
`

app.get('/', (req, res) => {
  res.send(html)
  res.end()
})

module.exports = app

app.listen(2222)
