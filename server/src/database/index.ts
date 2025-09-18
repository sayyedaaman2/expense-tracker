import {dbConfig} from '../config'




const db = new dbConfig.driver(dbConfig.filePath);


export default db;