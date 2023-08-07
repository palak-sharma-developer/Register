const express = require("express");
const app = express();
const port = process.env.PORT || 8001;
require("./db/connect");
const hbs = require('hbs');
const register = require("./models/register")
const path = require("path");


// Define paths for views and partials
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
//
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Set up template engine
app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path);

// Define routes and middleware
app.get('/', (req, res) => {
    res.render('index'); // Assuming you have an "index.hbs" file in the "views" directory
});

app.get("/register", (req, res) => {
    res.render("register")
})

app.post("/register", async (req, res) => {
    try {
        const password = req.body.Password;
        const confirmPassword = req.body.Confirm_Password;

        if (password === confirmPassword) {
            const registerEmployee = new register({
                firstname: req.body.firstname,
                Email: req.body.email,
                Password: req.body.password,
                Confirm_Password: req.body.confirmPassword
            });

            const registersavedata = await registerEmployee.save();
            res.status(201).render('index')
            // res.send("Employee registered successfully");
        } else {
            res.send("Password not matching");
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get("/login", (req, res) => {
    res.render("login")
})

// Start the server
app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});

