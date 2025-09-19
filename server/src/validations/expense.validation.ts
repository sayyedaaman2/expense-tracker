import { z } from 'zod';

export const createExpenseSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    amount: z.number().positive("Amount must be a positive number"),
    category: z.string(), 
});

export const updateExpenseSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters").optional(),
    amount: z.number().positive("Amount must be a positive number").optional(),
    category: z.string().optional(), 
});

export const expenseIdSchema = z.object({
    id: z.coerce.number().int().positive("ID must be a positive integer"),
});