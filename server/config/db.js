const mongoose = require('mongoose')

const connectDB=async()=> {
    const connection = await mongoose.connect(process.env.DATA_BASE_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`DB connected: ${connection.connection.host}`);
}
module.exports = connectDB