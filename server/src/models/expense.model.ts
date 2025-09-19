import db from '../database';

export interface Expense {
    id: number;
    title: string;
    amount: number;
    category: string;
    createdAt: Date;
    updatedAt: Date;
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

export const insertExpense = (data: Omit<Expense, "id" | "createdAt" | "updatedAt">) => {

    const insert = db.prepare(`INSERT INTO expenses (title,amount,category) VALUES (?,?,?)`)
    const {
        title,
        amount,
        category
    } = data;
    return insert.run(title, amount, category);
}

export const selectExpense = () => {

    const select = db.prepare(`SELECT * FROM expenses`);

    return select.all();
}


export const selectExpenseById = (id: number) => {
    const selectById = db.prepare(`SELECT * FROM expenses WHERE id=${id}`)
    return selectById.get();
}

export const updateExpenseById = (id: number, payload: Omit<Expense, 'id' | 'createdAt' | 'updatedAt'>) => {
    const fields: string[] = [];
    const values: any[] = [];

    if (payload.title !== undefined) {
        fields.push("title = ?");
        values.push(payload.title);
    }
    if (payload.amount !== undefined) {
        fields.push("amount = ?");
        values.push(payload.amount);
    }
    if (payload.category !== undefined) {
        fields.push("category = ?");
        values.push(payload.category);
    }

    if (fields.length === 0) {
        throw new Error("No valid fields provided for update.");
    }

    // Always update updatedAt
    fields.push("updatedAt = CURRENT_TIMESTAMP");

    const updateById = db.prepare(`
    UPDATE expenses
    SET ${fields.join(", ")}
    WHERE id = ?
  `);

    values.push(id);

    return updateById.run(...values);
}

export const deleteExpenseById = (id: number) => {
    const deleteStmt = db.prepare(`DELETE FROM expenses WHERE id = ?`);
    return deleteStmt.run(id);
};