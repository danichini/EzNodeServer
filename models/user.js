const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const ObjectId = mongodb.ObjectID
class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
    this._id = id ? mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      dbOp = db.collection("User").updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection("User").insertOne(this);
    }
    return dbOp
      .then(result => {
        console.log("created");
      })
      .catch(err => console.log(err));
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new mongodb.ObjectId(userId) })
      .then(result => {
        return result;
      })
      .catch(err => console.log());
  }
}

module.exports = User;
