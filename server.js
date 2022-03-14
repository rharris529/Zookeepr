const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// 'static' method sets a 'default' dir to static files
app.use(express.static('public'));
// parse incoming string or array data IMPORTANT 
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data IMPORTANT
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});

