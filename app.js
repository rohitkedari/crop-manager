const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure api routes
app.use('/api/v1', require('./api/v1'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  const { stack, name, ...rest } = err;
  const error =
    req.app.get('env') === 'development'
      ? { ...rest, name, stack }
      : { ...rest };

  // render the error page
  res.status(err.status || 500);
  res.json(error);
});

module.exports = app;
