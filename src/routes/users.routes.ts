import { Router } from "express";
const usersRouter = Router();
import * as usersController from '../controllers/users.controller';
import upload from "../helpers/upload.files";

usersRouter.get('/', usersController.findAllUsers);
usersRouter.get('/:id', usersController.findUserById);
usersRouter.post('/', upload.single('image'), usersController.createUser);
usersRouter.put('/', upload.single('image'), usersController.updateUser);
usersRouter.delete('/:id', usersController.deleteUserById);
usersRouter.post('/generatePdf', usersController.createPdf);

export default usersRouter;