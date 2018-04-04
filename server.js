const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.set('port', process.env.PORT || 3000);

app.locals.title = 'eSpeak db';

app.use(bodyParser.json());



app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is listening at ${app.get('port')}`);
});


module.exports = app;