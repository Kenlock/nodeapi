const express = require('express');
const app = express();

const morgan = require('morgan');

const postRoutes = require('./routes/posts');

const myOwnMiddleware = (req,res,next) => {
    console.log('Middleware Applied');
    next();
}


// Middleware 
app.use(morgan('dev'));

app.use(myOwnMiddleware);
 app.get('/', getPosts);

 app.listen(3000, () => {
     console.log('App listening on port 3000!');
 });