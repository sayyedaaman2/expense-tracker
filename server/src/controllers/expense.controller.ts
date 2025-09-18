import {Request, Response, NextFunction} from 'express'
import * as ExpenseService from '../services/expense.service';


export const postExpense = (req:Request,res:Response,next:NextFunction)=>{
        try{
            let payload = req.body
            let data = ExpenseService.createExpense(payload);
            res.status(201).send({
                success : true,
                message : "Expense added successfully.",
                data
            })
        }catch(error){
            if(error instanceof Error) { next(error)}
        }
}
