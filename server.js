const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const route = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helper');

const PORT = process.env.PORT || 3001;
const app = express();

const sess = {
  secret: 'Shush secret secret',
  cookie: {},
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`))
});