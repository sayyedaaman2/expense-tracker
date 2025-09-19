import {Router, type Router as RouterType} from 'express';
import {getExpenseById, getExpenses, postExpense, updateExpenseById} from '../controllers/expense.controller'

const router:RouterType = Router();


router.post('/',postExpense);
router.get('/',getExpenses)
router.get('/:id',getExpenseById)
router.put('/:id',updateExpenseById)

export default router;