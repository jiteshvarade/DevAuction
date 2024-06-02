import mongoose from "mongoose"
import {MONGODB_URL, DB_NAME} from "../../constants.mjs"

const ConnectDB = async ()=> {
    try{
        const connectionInstance = await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`)
        console.log("MongoDB connection established!", connectionInstance.connection.host)
    }catch(error){
        console.log("Error : ",error)
        process.exit(1)
    }
}

export default ConnectDB