import {Router, type Router as RouterType} from 'express';
import {getExpenseById, getExpenses, postExpense} from '../controllers/expense.controller'

const router:RouterType = Router();


router.post('/',postExpense);
router.get('/',getExpenses)
router.get('/:id',getExpenseById)
export default router;