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
  let uri = process.env.MONGODB_URI as string;
  const db = await mongoose.connect(uri)

  //connection.isConnected = db.connections[0].readyState
}

export default dbConnect
