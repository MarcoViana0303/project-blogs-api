const express = require('express');
const routerLogin = require('./routes/routeLogin');
const routerUser = require('./routes/routeUser');
const errorMiddleware = require('./middlewares/error');
// ...

const app = express();

app.use(express.json());

app.use('/login', routerLogin);
app.use('/user', routerUser);

app.use(errorMiddleware);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
