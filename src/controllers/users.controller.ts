import { RequestHandler } from 'express';
import * as usersService from '../services/users.service';
import { UserInput, UserOutput } from '../models/user.model';

export const findAllUsers: RequestHandler = async (req, res): Promise<void> => {
    const users = await usersService.findAllUsers();
    res.send(users);
}

export const findUserById: RequestHandler = async (req, res): Promise<void> => {
    const userId: number = parseInt(req.params.id);
    const user = await usersService.findUserById(userId);

    res.send(user);
}

export const createUser: RequestHandler = async (req, res): Promise<void> => {
    const user: UserInput = {
        email: req.body?.email,
        firstName: req.body?.firstName,
        lastName: req.body?.lastName,
        image: req.file?.path,
    }
    const createdUser = await usersService.createUser(user);
    res.send(createdUser);
}

export const updateUser: RequestHandler = async (req, res): Promise<void> => {
    const user: UserInput = {
        id: req.body?.id,
        email: req.body?.email,
        firstName: req.body?.firstName,
        lastName: req.body?.lastName,
        image: req.file?.path,
    }
    await usersService.updateUser(user);
    const updatedUser = await usersService.findUserById(req.body?.id);
    res.send({ updatedUser });
}

export const deleteUserById: RequestHandler = async (req, res): Promise<void> => {
    const userId: number = parseInt(req.params.id);
    const result = await usersService.deleteUserById(userId);
    res.send(result);
}