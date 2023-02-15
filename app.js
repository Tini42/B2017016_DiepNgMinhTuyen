const express = require("express");
const cors = require("cors")

const ApiError = require("./app/api-error");

const app = express();
const contactsRouter = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());
app.get("/",(reg,res) => {
    res.json({message: "Welcom to conatct book application."});
});
app.use("/api/contacts", contactsRouter);
//handle response 
app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"));
});
app.use((err, req, res, next) => {
    return res.status(error.statusCode || 5).json({
        message: error.message || "Internal Server Error",
    });
});
module.exports = app;