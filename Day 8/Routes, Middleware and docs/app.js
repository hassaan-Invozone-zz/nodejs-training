// "use strict";
// const express = require("express");
// const app = express();
// const port = process.env.port || 4444;
//
// app.get("/", (req, res) => {
//     res.send("hello hassaan");
// });
//
// app.listen(port, err => {
//     if (err) {
//         return console.log("ERROR", err);
//     }
//     console.log(`Listening on port ${port}`);
// });
"use strict";
const express = require("express");
const app = express();
const port = process.env.port || 4444;
const things = require("./routes/test");
const test = require("./routes/testRoutes");

app.use(express.json());
app.use("/things", things);
//use the things.js file to handle
//endpoints that start with /things

app.get("/", (req, res) => {
    //handle root
    res.send("hello root");
});
// app.get("/abc", (req, res) => {
//     //handle root
//     res.send("hello abc");
// });
app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log(`Listening on port ${port}`);
});