import express from 'express';
import {
    addExpense,
    getExpenses,
    editExpense,
    deleteExpense,
  } from "../controller/expenseController.js";
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add', authMiddleware, addExpense);
router.get('/', authMiddleware, getExpenses);
router.put("/edit/:id", authMiddleware, editExpense); 
router.delete("/delete/:id", authMiddleware, deleteExpense);

export default router;