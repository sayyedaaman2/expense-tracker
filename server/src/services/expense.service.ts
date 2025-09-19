import { deleteExpenseById, Expense,insertExpense, selectExpense, selectExpenseById, updateExpenseById } from '../models/expense.model'

export const createExpense = (payload:Omit<Expense,"id"| "createdAt"|"updatedAt">)=>{
    return insertExpense(payload);
}

export const fetchExpense = ()=>{
    return selectExpense();
}

export const fetchExpenseById = (id:number)=>{
    return selectExpenseById(id);
}

export const updateExpense = (id:number,payload:Omit<Expense,"id"| "createdAt"|"updatedAt">)=>{
    return updateExpenseById(id,payload)
}

export const deleteExpense = (id:number)=>{
    return deleteExpenseById(id)
}