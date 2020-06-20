const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/noderest",
{   useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true});

module.exports = mongoose;