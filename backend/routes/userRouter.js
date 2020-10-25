import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

router.post('/register', userController.create);
router.post('/login', userController.authenticate);

module.exports = router;
