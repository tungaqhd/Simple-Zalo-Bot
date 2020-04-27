const mongoose = require('mongoose');
const uri = '';
mongoose.connect(uri, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});