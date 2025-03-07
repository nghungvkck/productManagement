const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.port;
const route = require("./routes/client/index.route")

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static("public"));

// routes
route(app)
//End routes

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});