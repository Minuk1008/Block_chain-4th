const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const session = require("express-session");  //연결점
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();

const host = '127.0.0.1';
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(upload.array());
app.use(cookieParser()); //아까 안했다고?
app.use(session({
    secure: true,
    name: 'codeil',
    secret: process.env.SECRET, 
    resave : false,
    saveUninitialized: true,
    cookie : {
        maxAge:(1000 * 60 * 100)
    }
}));

var Users = [];
app.get('/signup', (req, res) => {
    res.render('signup', {
        message: "User !"
    });
});

app.post('/signup', (req, res) => {
    if(!req.body.id || !req.body.password) { //만약 안썻다면
        res.status("404");
        res.send("Invalid details");
    } else {
        Users.filter(function(user) {
            if(user.id === req.body.id) {
                res.render("signup", {
                    message: "User Alread Exists! Login or choose another user id"
                });
            };
        });

        let newUser = {id: req.body.id, password: req.body.password};
        Users.push(newUser);
        req.session.user = newUser;
        res.redirect('/protected_page');
    };
});

app.get('/protected_page', (req, res) => {
    res.render("protected_page"), {
        message: "Protected_page"
    }
});

app.listen(port, host, () => {
    console.log(`http://${host}:${port}/`);
});