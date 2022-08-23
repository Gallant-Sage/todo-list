const express = require("express");
const bodyParser = require("body-parser");

// requiring my own module.
// this is how local module is required in Js.
const date = require(__dirname + "/date.js");
console.log(date);

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

// we can write it anywhere below the app.
app.use(bodyParser.urlencoded(
    {
    extended: true
    }
    ));

app.use(express.static("public"));  

    app.get("/", (req, res) => {
    
        // render function --> renders the .ejs file in browser
        // javascript objects are key: value pairs that are inside { }
        // { key: value }
        // { kindOfDay: day, newListItems: items } --> Js objects
        res.render("list", { kindOfDay: day, newListItems: items });

});

    app.post("/", (req, res) => {
        let item = req.body.newItem;

        items.push(item);

        res.redirect("/");
    });

app.listen(3000, (req, res) => {
    console.log("Server started on port 3000");
});