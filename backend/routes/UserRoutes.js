
import express from 'express';
import { signup, login } from '../controller/userController.js';
import { Router } from 'express';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

export default router;


