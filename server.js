const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const express = require('express');

const { notes } = require('./db/db.json');

// Setting Port to be 80 for published 3001 for local host

const PORT = process.env.PORT || 3001;
const app = express();

// Setting up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
// parse incoming JSON data

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// serves the files to the public folder
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('API server now on port ${PORT}!');
});