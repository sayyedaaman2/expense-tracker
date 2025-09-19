import {Router, type Router as RouterType} from 'express';
import {getExpenses, postExpense} from '../controllers/expense.controller'

const router:RouterType = Router();


router.post('/',postExpense);
router.get('/',getExpenses)

export default router;