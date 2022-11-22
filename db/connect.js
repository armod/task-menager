const mongoose = require('mongoose')

const connectionString =
  'mongodb+srv://armod:armod123@nodeexpressprojects.bpaevnm.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority'

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

// .then(() => console.log('CONNECTED TO THE DB...'))
// .catch((err) => console.log(err))

module.exports = connectDB
