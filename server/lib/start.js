import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const serverLoginName = process.env.SERVER_LOGIN_NAME;
const serverLoginPassword = process.env.SERVER_LOGIN_PASSWORD;

// Use the values of the variables as needed



export const start = (init, port) => { //will  be async to connect to database
 try {
       // await a connection to the data base
       mongoose.connect(`mongodb+srv://${serverLoginName}:${serverLoginPassword}@tradesafeusers.rfbokb2.mongodb.net/TradesafeUsers?retryWrites=true&w=majority`).then(
          // when connected then start
    init.listen(port, () => console.log({
      message : `Server has started running`,
      port : port,
      serverLink : `http://localhost:${port}`
}))
       )
   
 } catch (error) {
    console.log({errormsg: 'You have an error', err: error})
 }
}
