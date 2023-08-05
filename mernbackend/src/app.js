const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
require("./db/connect");
const hbs = require('hbs');
const register = require("./models/register")
const path = require("path");

// Define paths for views and partials
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Set up template engine
app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// Define routes and middleware
app.get('/', (req, res) => {
    res.render('index'); // Assuming you have an "index.hbs" file in the "views" directory
});

app.get("/register" ,(req,res)=>{
    res.render("register")
})

app.post("/register" ,async (req,res)=>{
   try {
       console.log(res.body.firstname)
res.send(res.body.firstname)

   }catch (e) {
       res.status(400).send(e)
   }
})

app.get("/login" ,(req,res)=>{
    res.render("login")
})

// Start the server
app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});
