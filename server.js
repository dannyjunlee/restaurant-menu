const express = require('express');
const routes = require('./controllers')
// const helpers = require('./utils/helper')

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);






app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });