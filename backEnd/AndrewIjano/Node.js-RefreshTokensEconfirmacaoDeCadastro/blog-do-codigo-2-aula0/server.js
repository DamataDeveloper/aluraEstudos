require('dotenv').config()

const app = require('./app');
const port = 3000;
require('./database');
require('./redis/blocklist');

const routes = require('./rotas');
routes(app);

app.listen(port, console.log(`rodando na porta ${port}`));
