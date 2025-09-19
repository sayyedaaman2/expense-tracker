import { Request, Response, NextFunction } from 'express'
import * as ExpenseService from '../services/expense.service';


export const postExpense = (req: Request, res: Response, next: NextFunction) => {
    try {
        let payload = req.body
        let data = ExpenseService.createExpense(payload);
        res.status(201).send({
            success: true,
            message: "Expense added successfully.",
            data
        })
    } catch (error) {
        if (error instanceof Error) { next(error) }
    }
}

export const getExpenses = (req: Request, res: Response, next: NextFunction) => {
    try {
        let data = ExpenseService.fetchExpense();
        res.status(200).send({
            success: true,
            message: "Expenses fetched successfully.",
            data
        })
    } catch (error) {
        if (error instanceof Error) { next(error) }
    }
}

export const getExpenseById = (req: Request, res: Response, next: NextFunction) => {
    try {
        let id = Number(req.params.id)
        let data = ExpenseService.fetchExpenseById(id);
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "Expense not found"
            })
        }
        res.status(200).send({
            success: true,
            message: "Expense fetched successfully.",
            data
        })
    } catch (error) {
        if (error instanceof Error) { next(error) }
    }
}

export const updateExpenseById = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const payload = req.body;

        const result = ExpenseService.updateExpense(id, payload);

        if (result.changes === 0) {
            return res.status(404).json({
                success: false,
                message: `Expense with id ${id} not found.`,
            });
        }

        res.status(200).json({
            success: true,
            message: "Expense updated successfully.",
            data: { id, ...payload },
        });
    } catch (error) {
        if (error instanceof Error) {
            next(error);
        }
    }
};

export const deleteExpenseById = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = Number(req.params.id);
    const deleted = ExpenseService.deleteExpense(id);

    if (deleted.changes == 0) {
      return res.status(404).send({
        success: false,
        message: "Expense not found or already deleted.",
      });
    }
    
    res.status(200).send({
      success: true,
      message: "Expense deleted successfully.",
    });
  } catch (error) {
    if (error instanceof Error) {
      next(error);
    }
  }
};