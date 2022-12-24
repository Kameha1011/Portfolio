if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate');
const session = require('express-session');
const flash = require('connect-flash');

app.listen(8080, () =>{
    console.log("listening on 8080!!")
});


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, './views')); 

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

const sessionConfig = {
    secret: 'thisshouldbeabettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(session(sessionConfig));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    next();
})

app.get('/', (req,res) => {  
    
    res.render("routes/homeEng");
});

