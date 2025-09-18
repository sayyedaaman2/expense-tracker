import 'dotenv/config'
import app from './app'
import {serverConfig} from './config'
const startServer = async ()=>{
    try{
        app.listen(serverConfig.app.port,()=>{
            console.log(
                `
                🚀 Server is running on port : ${serverConfig.app.port} and environment : ${serverConfig.app.env}`
            )
        })
    }catch(error){
        console.error("❌ Unable to start the server : ", error);
        process.exit(1);
    }
}

startServer();