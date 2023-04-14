"use strict";

var express = require('express');

var path = require('path');

var mongoose = require('mongoose');

var mongodb = require('mongodb');

var session = require('express-session');

var cookieParser = require('cookie-parser');

var passportLocalMongoose = require('passport-local-mongoose');

var logger = require('morgan');

var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function (username, password, done) {
  Account.findOne({
    username: username
  }, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false, {
        message: 'Incorrect username.'
      });
    }

    if (!user.validPassword(password)) {
      return done(null, false, {
        message: 'Incorrect password.'
      });
    }

    return done(null, user);
  });
}));

var ship = require("./models/ship");

require('dotenv').config();

var connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var db = mongoose.connection; //Bind connection to error event

db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

var appRouter = require('./routes/ship'); //var gridbuildRouter = require('./routes/gridbuild');


var selectorRouter = require('./routes/selector');

var resourceRouter = require('./routes/resource');

var app = express(); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ship', appRouter); //app.use('/gridbuild', gridbuildRouter);

app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter); // passport config 
// Use the existing connection 
// The Account model  

var Account = require('./models/account');

passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser()); // We can seed the collection if needed on server start

function recreateDB() {
  var instance1, instance2, instance3;
  return regeneratorRuntime.async(function recreateDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(ship.deleteMany());

        case 2:
          instance1 = new ship({
            Model: "battleship",
            yearofmanufacturing: 2022,
            color: "Red"
          });
          instance1.save().then(function (doc) {
            console.log("First ship details saved");
          })["catch"](function (err) {
            console.error(err);
          });
          instance2 = new ship({
            Model: "cruiser",
            yearofmanufacturing: 2011,
            color: "silver"
          });
          instance2.save().then(function (doc) {
            console.log("Second ship details saved");
          })["catch"](function (err) {
            console.error(err);
          });
          instance3 = new ship({
            Model: " destroyer",
            yearofmanufacturing: 2023,
            color: " Blue"
          });
          instance3.save().then(function (doc) {
            console.log("Third ship details saved");
          })["catch"](function (err) {
            console.error(err);
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

var reseed = true;

if (reseed) {
  recreateDB();
} // catch 404 and forward to error handler


app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
//# sourceMappingURL=app.dev.js.map
