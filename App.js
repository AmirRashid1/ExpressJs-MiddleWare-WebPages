const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

const welcomeMiddleware = (req, res, next) => {
    console.log("Welcome to my Express.js application!");
    next();
  };
const home = (req, res, next) => {
    res.sendFile(__dirname + '/Home.html');
    next();
}
const Java_Projects = (req, res, next) => {
    res.sendFile(__dirname + '/Java_Projects.html');
    next();
}
const Node_Projects = (req, res, next) => {
    res.sendFile(__dirname + '/Node_Projects.html');
    next();
}
const Python_Projects = (req, res, next) => {
    res.sendFile(__dirname + '/Python_Projects.html');
    next();
}
const Contact_Us = (req, res, next) => {
    res.sendFile(__dirname + '/Contact_Us.html');
    next();
}
const PHP_Projects = (req, res, next) => {
    res.sendFile(__dirname + '/PHP_Projects.html');
    next();
}
app.use('/',welcomeMiddleware);
app.use('/Home.html', home, (req, res) => { console.log('Home page middleware'); });
app.use('/Java_Projects.html', Java_Projects, (req, res) => { console.log('Java Project page middleware'); });
app.use('/Node_Projects.html', Node_Projects, (req, res) => { console.log('Node Project page middleware'); });
app.use('/Python_Projects.html', Python_Projects, (req, res) => { console.log('Pyhton Project page middleware'); });
app.use('/PHP_Projects.html', PHP_Projects, (req, res) => { console.log('PHP Project page middleware'); });
app.use('/Contact_Us.html', Contact_Us, (req, res) => { console.log('Contact Us page middleware'); });

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/Home.html');
});

app.get('/Java_Projects.html', function (req, res) {
    res.sendFile(__dirname + '/Java_Projects.html');
});

app.get('/Node_Projects.html', function (req, res) {
    res.sendFile(__dirname + '/Node_Projects.html');
});

app.get('/Python_Projects.html', function (req, res) {
    res.sendFile(__dirname + '/Python_Projects.html');
});
app.get('/PHP_Projects.html', function (req, res) {
    res.sendFile(__dirname + '/PHP_Projects.html');
});
app.get('/Contact_Us.html', function (req, res) {
    res.sendFile(__dirname + '/Contact_Us.html');
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})