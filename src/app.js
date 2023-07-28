require("dotenv").config();
const express = require("express");

const userRouter=require("./routes/index.js")
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(userRouter);

const PORT = process.env.PORT || 6000;


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
