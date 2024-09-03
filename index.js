const express = require("express");
const app = express();
const cors = require("cors"); 
app.use(cors());

app.use(express.json())
require("dotenv").config();


const authRoutes = require("./routes/authRoutes")
app.use("/auth", authRoutes)





const connection = require("./config/db.config")



app.listen(process.env.PORT, (err) => {
    if (err) throw err;
    console.log("Server is listining on port: ", process.env.PORT)

})