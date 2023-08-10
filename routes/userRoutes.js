import express from 'express';
import {registerUser, authUser, getUsers, getUserById, deleteUser, updateUser} from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(registerUser).get(getUsers);
router.route('/login').post(authUser);
router.route('/:id').get(getUserById).delete(deleteUser).put(updateUser);

export default router;