import { mongoose, connect } from 'mongoose';
const libraryDbUri = "mongodb://127.0.0.1:27017/library";

async function connectToDb(){
    try {
        await connect(libraryDbUri);
        console.log('Connected to library DB!')
    }
    catch (error) {
        console.log('Error while connecting to DB')
    }
}
const db = mongoose.connection;
export {connectToDb, db};