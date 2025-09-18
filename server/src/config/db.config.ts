import {DatabaseSync} from 'node:sqlite'

import path from 'path';
interface IDatabaseConfig {
    filePath : string;
    driver :  typeof DatabaseSync;
}


const dbConfig:IDatabaseConfig ={
    filePath : process.env.DB_PATH || path.resolve(__dirname,"../data/expenses.sqlite"),
    driver : DatabaseSync
}




export default dbConfig;