import { Expense,insertExpense } from '../models/expense.model'

export const createExpense = (payload:Omit<Expense,"id"| "createdAt"|"updatedAt">)=>{
    return insertExpense(payload);
}