var path = require('path');
var express = require('express');

var app = express();

const dir = path.join(__dirname, 'build');
const htmlFile = path.join(dir, 'index.html');

app.use(express.static(dir));
app.set('port', process.env.PORT || 8080);

app.get('*', (req, res) => {
  res.sendFile(htmlFile);
});

var server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});
