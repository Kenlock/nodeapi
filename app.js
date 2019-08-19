const express = require("express");
const app = express();

const morgan = require("morgan");

const postRoutes = require("./routes/posts");


// Middleware 
app.use(morgan("dev"));

//app.use(myOwnMiddleware);
 app.use("/", postRoutes);

 app.listen(3000, () => {
     console.log('App listening on port 3000!');
 });