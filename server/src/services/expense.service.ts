import { Expense,insertExpense, selectExpense, selectExpenseById } from '../models/expense.model'

export const createExpense = (payload:Omit<Expense,"id"| "createdAt"|"updatedAt">)=>{
    return insertExpense(payload);
}

export const fetchExpense = ()=>{
    return selectExpense();
}

export const fetchExpenseById = (id:number)=>{
    return selectExpenseById(id);
}