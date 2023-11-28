const { engine } = require('express-handlebars');
const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const morgan = require('morgan');
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

app.use(morgan('combined'));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.hbs', engine({ extname: '.hbs' , helpers: {increaseIndex : (a) => a + 1}}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Connect to DB
db.connect();
// Route 
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
