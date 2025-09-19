import {Router, type Router as RouterType} from 'express';
import {deleteExpenseById, getExpenseById, getExpenses, postExpense, updateExpenseById} from '../controllers/expense.controller'

import {validate} from '../middlewares/validate'
import {createExpenseSchema,expenseIdSchema,updateExpenseSchema} from '../validations/expense.validation'

const router:RouterType = Router();
router.post('/',validate({body:createExpenseSchema}),postExpense);
router.get('/',getExpenses)
router.get('/:id',validate({params : expenseIdSchema}),getExpenseById)
router.put('/:id',validate({params : expenseIdSchema, body : updateExpenseSchema}),updateExpenseById)
router.delete('/:id',validate({params:expenseIdSchema}),deleteExpenseById)

export default router;