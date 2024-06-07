const express = require('express')
const cors = require('cors')
const https = require('https');
const path = require('node:path');
const fs = require("node:fs")
const http = require('http')


// const options = {
//     key: fs.readFileSync(path.join(__dirname, "sslcert", "localhost-key.pem")),
//     cert: fs.readFileSync(path.join(__dirname, "sslcert", "localhost.pem")),
// };

const app = express()

app.use(cors({
    origin: '*'
}))

// view engine setup
app.engine('.html', require('ejs').__express);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(express.json())
app.use(express.static(path.join(__dirname, "public")))

// Define a route to render your HTML file
app.get('/', function(req, res){
    res.render('index', { });
  });

  var httpServer = http.createServer(app);

// var httpsServer = https.createServer(options, app);

const port = 8000
httpServer.listen(port, () => {
    console.log(`Start server at port http://localhost:${port}/`)
})