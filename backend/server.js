import dotenv from 'dotenv';
import express from "express";
import connectDB from "./database/db.js";
import expenseRoutes from './routes/expenseRoutes.js';
import userRoutes from './routes/UserRoutes.js';
import bodyParser from "body-parser";

dotenv.config();
const app = express();
const port = 4000;

connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/expenses", expenseRoutes);
app.use("/api/auth", userRoutes)

app.get("/", (req, res) => {
    res.send("FinManager Server is working");
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong!');
});

app.listen(port, ()=>{
    console.log(`Server is Listening on Port http://localhost:${port}`);
});