require("dotenv/config");
const express = require('express');

const app = express();

app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");

app.use(express.static(`${__dirname}/public`));

require('./config/hbs.config');

const routes = require("./config/routes.config");
app.use("/", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Estoy levantado en el puerto ${PORT}`))