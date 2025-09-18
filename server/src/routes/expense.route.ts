import {Router, type Router as RouterType} from 'express';
import {postExpense} from '../controllers/expense.controller'

const router:RouterType = Router();


router.post('/',postExpense);


export default router;