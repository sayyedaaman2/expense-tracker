import {Router, type Router as RouterType} from 'express';
import {deleteExpenseById, getExpenseById, getExpenses, postExpense, updateExpenseById} from '../controllers/expense.controller'



const router:RouterType = Router();
router.post('/',postExpense);
router.get('/',getExpenses)
router.get('/:id',getExpenseById)
router.put('/:id',updateExpenseById)
router.delete('/:id',deleteExpenseById)

export default router;