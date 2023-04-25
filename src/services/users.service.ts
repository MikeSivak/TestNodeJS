import { generatePdf } from "../helpers/pdfFilesGenerator";
import User, { UserInput, UserOutput } from "../models/user.model"

export const findAllUsers = async (): Promise<UserOutput[] | string> => {
    const users = await User.findAll();
    if (!users.length) {
        return `User list is empty`;
    }
    return users;
}

export const findUserById = async (id: number): Promise<UserOutput | string> => {
    const user = await User.findOne({ where: { id: id } });
    if (!user) {
        return `User with id = ${id} Not Found`;
    }
    return user;
}

export const createUser = async (user: UserInput): Promise<UserOutput> => {
    return await User.create(user);
}

export const updateUser = async (user: UserInput): Promise<void> => {
    await User.update(
        {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            image: user.image
        },
        { where: { id: user.id } }
    );
}

export const deleteUserById = async (id: number): Promise<string> => {
    const deletedUser = await User.destroy({ where: { id: id } });
    return deletedUser
        ? `User with id = ${id} Deleted Successfully`
        : `User with id = ${id} Not Found`;
}

export const createPdf = async (email: string): Promise<Buffer | string | Boolean> => {
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
        return `User with email = ${email} Not Found`;
    }
    const pdf = await generatePdf(user);
    if (!pdf) {
        await User.update(
            { pdf: pdf },
            { where: { email: email } }
        );
    }
    return pdf;
}