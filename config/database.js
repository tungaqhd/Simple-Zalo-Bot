const mongoose = require('mongoose');
const uri = 'mongodb://tungaqhd:HiD0ihIuVi6481fR@cluster0-shard-00-00-cmjkf.mongodb.net:27017,cluster0-shard-00-01-cmjkf.mongodb.net:27017,cluster0-shard-00-02-cmjkf.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(uri, {
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});