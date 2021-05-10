import express from 'express';
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
} from '../controllers/users.controller';
import { validateUser } from "../middleware";

const router = express.Router();

/* GET users listing. */
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', validateUser, addUser);
router.put('/:id', validateUser, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
