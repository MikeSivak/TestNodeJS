import express from "express";
import cors from "cors";
import helmet from "helmet";
import usersRouter from "./routes/users.routes";
import dbInit from "./dbconfig/db.init";
import bodyParser from "body-parser";

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true})); 
dbInit();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/healthcheck', (req, res) => { res.send('No problem.') });
app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});