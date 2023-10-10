const express = require("express");
const chalk = require("chalk");
var cors = require("cors");
const userRouter = require("./controller/userRouter");
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// 01:01:44

app.get("/", userRouter);

app.listen(3000, () => {
  console.log(chalk.red("Hello world! chalk"));
});

// get
// set/update
// post
// delete
//
