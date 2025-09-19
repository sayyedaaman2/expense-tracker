import { Expense,insertExpense, selectExpense } from '../models/expense.model'

export const createExpense = (payload:Omit<Expense,"id"| "createdAt"|"updatedAt">)=>{
    return insertExpense(payload);
}

export const fetchExpense = ()=>{
    return selectExpense();
}