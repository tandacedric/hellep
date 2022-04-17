/* This is a database connection function*/
import mongoose from 'mongoose'
import * as dotenv from 'dotenv';
dotenv.config();

const connection = {} /* creating connection object*/

async function dbConnect() {
  /* check if we have connection to our databse*/
  /*if (connection.isConnected) {
    return
  }*/

  /* connecting to our database */
  console.log(process.env.MONGODB_URI);
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
  })

  //connection.isConnected = db.connections[0].readyState
}

export default dbConnect
