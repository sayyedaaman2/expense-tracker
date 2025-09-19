import db from '../database';

export interface Expense {
    id : number;
    title : string;
    amount : number;
    category : string;
    createdAt : Date;
    updatedAt : Date;
}

db.exec(`
    CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    amount REAL NOT NULL,
    category TEXT NOT NULL,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
    updatedAt TEXT DEFAULT CURRENT_TIMESTAMP
    );
`)

export const insertExpense =(data:Omit<Expense, "id" |"createdAt"| "updatedAt">) =>{

    const insert = db.prepare(`INSERT INTO expenses (title,amount,category) VALUES (?,?,?)`)
    const {
        title,
        amount,
        category
    } = data;
    return insert.run(title,amount,category);
}

export const selectExpense = ()=>{
    
    const select = db.prepare(`SELECT * FROM expenses`);

    return select.all();
}