const path = require('path');
const express = require('express');
const session = require('express-session');
const ehanldebars = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequleize = require('./config/Connection');
const seqStore = require('connect-session-sequelize')(session.Store);

const sesh = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new seqStore({
        db: sequleize
    }),
};

app.use(session(sesh));

const helpers = require('./utils/helpers');

const hb = ehanldebars.create({ helpers });

app.engine('handlebars', hb.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
});



