// import mysql from "mysql";
import mongoose from 'mongoose';

// const connectionString = process.env.DATABASE_URL || ""
// const connection = mysql.createConnection(connectionString)
// connection.connect()
const db = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tog');
    console.log("Database Connection Successfully")
  } catch (e) {
    console.log(e);
  }
};

db()