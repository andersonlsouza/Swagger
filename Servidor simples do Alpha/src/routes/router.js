import { Router } from 'express';
import { listUsers } from '../controllers/listUses.js';
import { user } from '../controllers/user.js';
import { addUser } from '../controllers/addUser.js';
import { editUser } from '../controllers/editUser.js';
import { deleteUser } from '../controllers/deleteUser.js';

const router = Router();

router.get("/user", listUsers);
router.get("/user/:id", user);
router.post("/user", addUser);
router.patch("/user/:id", editUser);
router.delete("/user/:id", deleteUser);

export { router };