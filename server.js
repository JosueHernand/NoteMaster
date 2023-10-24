const express = require("express")
const app = express()

const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

require("./routes/apiRoutes/api")(app);
require("./routes/htmlRoutes/html")(app);
