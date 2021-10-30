const express = require('express');
const app = express();
const cors = require('cors');
const routers = require('./routes');

//body-parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routers);

// app.listen(PORT, () => {
//     console.log(`My app listening at http://localhost:${PORT}`)
// })

module.exports = app;