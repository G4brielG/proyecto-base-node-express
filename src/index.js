const express = require('express')
const app = express()
const morgan = require('morgan')

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

// Settings
app.set('port', process.env.PORT || 4000);

// Routes
app.use('/', require('./routes/main.routes'));

// Run server
app.listen(app.get('port'), () => {
    console.log('app running successfully!!');
    console.log(`http://localhost:${app.get('port')}`);
  });
