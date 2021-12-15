const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user")
const mongoose = require("mongoose");
const app = express();
//const cookieParser = require("cookie-parser");
//const cors = require("cors");
// PORT
const PORT = 3000;
mongoose.connect('mongodb://localhost:27017/newassign');
// Middleware
app.use(bodyParser.json());


//middleware 
//app.use(cookieParser());
//app.use(cors());
app.get("/", (req, res) => {
   res.send("hello index")
});
//routes
app.use("/api", user)

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
