const express = require("express");
const app = express();

const mongoose = require("mongoose");
const morgan = require("morgan");

const postRoutes = require("./routes/posts");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(()=> console.log('DB Connected'));

mongoose.connection.on('err', err=>{
    console.log('DB Connection error:${err.message}')
});
// Middleware 
app.use(morgan("dev"));

//app.use(myOwnMiddleware);
 app.use("/", postRoutes);

 app.listen(process.env.PORT || 3000, () => {
     console.log('App listening on port 3000!');
 });