const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://danichini:7416@cluster0-1lz2a.mongodb.net/test?retryWrites=true&w=majority')
    .then(client => {
      console.log('connected')
      callback(client)
    })
    .catch(err => console.log(err))
}

module.exports = mongoConnect