const dotenv = require('dotenv');
dotenv.config();
const cors = require("cors");
const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
require("./Config/db.js");
const { apiRouter } = require("./Api/V1/routes.js");

app.use(cors(
    {
        origin: "http://localhost:5173",
        credentials: true,
    }
));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
    console.log("-----------------");
    console.log(new Date(), req.method, req.url);
    console.log("-----------------");
    next();
});

app.use("/api/v1", apiRouter);

app.listen(2900, () => {
    console.log("Server is running on port 2900");
});
