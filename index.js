//require express framework
const express = require('express');
//express function
const app = express();
//Deprecation of res.sendfile is invalid, "sendFile" is currently not working, so ignore the console log, as it's not true.

// GET / file/index landing
app.get('/', (req, res) => {
  res.sendfile('src/views/pages/landing.htm')
});
// GET/SEND file
app.get('/portfolio', (req, res) => {
  res.sendfile('src/views/pages/portfolio.html')
});

// GET/SEND file
app.get('/license', (req, res) => {
  res.sendfile('src/views/pages/license.htm')
});

app.get('/standwithukraine', (req, res) => {
  res.sendfile('src/views/blog/ukraine.html')
});


// Call Public Static
app.use('/public', express.static(process.cwd() + '/public'));
// Call Public Static
app.use('/src/cdn', express.static(process.cwd() + '/src/cdn'));

// Handle 404
app.use(function(req, res) {
  res.sendfile('src/errorshandlers/404.htm', 404);
});

// Handle 500
app.use(function(error, req, res, next) {
  res.sendfile('src/errors/404.htm', 500);
});
//listen on ports and give serverstart and serverready
app.listen(3000, () => {
  console.log('Server Ready');
  console.log('Server Start');
  console.log('Ignore deprecation messages below this one');
  
});
