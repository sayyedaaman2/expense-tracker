import {Router, type Router as RouterType} from 'express';
import expenseRoute from './expense.route';

const router:RouterType = Router();

router.use("/expense",expenseRoute)


export default router;