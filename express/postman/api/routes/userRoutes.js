import express from 'express';
import { getUsers, createUser, editUser, removeUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getUsers);       // GET all
router.post('/', createUser);    // POST new
router.put('/:id', editUser);    // PUT update
router.delete('/:id', removeUser); // DELETE

export default router;
