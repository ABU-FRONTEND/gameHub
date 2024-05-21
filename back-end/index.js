import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { register, login } from "./controllers.js";
import { registerValidators, loginValidators } from "./validators.js";
import { handleValidationErrors } from "./utils/handleValidationErrors.js";

mongoose.connect('mongodb+srv://admin:ajcuzU0RBWuMK6ke@cluster0.cnvcwtj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => {
   console.log('sucsess')
}).catch((e) => {
   console.log(e);
})

const app = express();
app.use(express.json())
app.use(cors());

app.listen(1111, () => {
    console.log("Server started on http://localhost:1111");
})

app.post("/register", registerValidators, handleValidationErrors, register)
app.post("/login", loginValidators, handleValidationErrors, login)