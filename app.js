const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());
app.get("/",(reg,res) => {
    res.json({message: "Welcom to conatct book application."});
});

module.exports = app;