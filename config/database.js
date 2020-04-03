const mongoose = require('mongoose');
const uri = 'mongodb+srv://tungaqhd:Wf6yXmFgFDGSyubo@zalo-bot-jpdty.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});