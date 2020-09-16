
const express = require("express"),
      cors = require('cors'),
      cookieParser = require('cookie-parser'),
      logger = require('morgan'),
      path = require('path'),
      createError = require('http-errors');


function setNoCache(res= express.Response) {
    const date = new Date();
    date.setFullYear(date.getFullYear() - 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Cache-Control", "public, no-cache");
}

function setLongTermCache(res= express.Response) {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    res.setHeader("Expires", date.toUTCString());
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
}      

const compression = require('compression');

const dotenv = require("dotenv");
      dotenv.config();   

let mongoose = require('mongoose');      

// CONNECT TO DATABASE
const MongoDBUri = `mongodb+srv://hajarnasr:artisticahd@cluster0.jssyi.mongodb.net/cluster0?retryWrites=true&w=majority
JWT=artistizoneJWT`;
mongoose.connect(MongoDBUri,{ useNewUrlParser: true , useUnifiedTopology: true},
    (err)=>{
        err?
        console.log(err)
        :
        console.log("database connected")
});
 
let app = express();
    app.use(cors());
    app.use(logger('dev'));
    app.use(cookieParser());
    app.use(compression());

  /*   app.use(function(req, res, next) {
      next(createError(404));
    }); */

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
// default port in .env file or 5000
app.set('port', process.env.PORT || 5000);

// set the location of the views
app.set('views', __dirname + '/views')

// add users routes
app.use("/api/users", require('./routes/usersRoutes'));
app.use("/api/items", require('./routes/ItemsRoutes'));


if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(
    express.static('client/build', {
      extensions: ["html"],
      setHeaders(res, path) {
        if (path.match(/(\.html|\/sw\.js)$/)) {
          setNoCache(res);
          return;
        }
  
        if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|json)$/)) {
          setLongTermCache(res);
        }
      },
    }),
  );


  app.get('*', (req, res) => {
    setNoCache(res);
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });


module.exports = app;