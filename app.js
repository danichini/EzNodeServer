const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const Controller404 = require('./controllers/404')


app.use(bodyParser.urlencoded({
  extended: false,
}))
app.use(express.static(path.join(__dirname, 'public')));

// app.engine('hbs', expressHbs({
//   layoutsDir: 'views/layouts/',
//   defaultLayout: 'main-layout',
//   extname: 'hbs'
// }));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(Controller404.get404)

app.listen(3000)