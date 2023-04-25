import { RequestHandler } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const auth: RequestHandler = (req, res, next) => {
    let token = req.headers['x-access-token'];
    const mockToken: string | undefined = process.env.MOCK_TOKEN;

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    if (token !== mockToken) {
        return res.status(401).send({
            message: "Unauthorized!"
        });
    }

    next();
}

export default auth;