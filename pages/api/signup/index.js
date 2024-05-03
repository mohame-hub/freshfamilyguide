import React from "react";
import { connectDB } from "@/utils/connectDB";
import User from "@/libs/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
    res.setHeader('Content-Type', 'application/json');
    try {
        if (req.method !== "POST") {
            return res.status(404).json({ error: "Method Not Allowed" });
        }

        await connectDB();
        const { firstname, lastname, email, password } = req.body;
        console.log("Data received: " + req.body);

        const hash_pw = await bcrypt.hash(password, 10);
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: hash_pw
        });

        if (user) {
            console.log("SUCCESS");
            /* 
            const user_Id = user._id.toString();
            const payload = {
                user_Id,
                firstName,
                surname,
                email,
                role,
                medications,
                receivedMessages,
                newsletter,
                password: hash_pw,
                isVerfied: true,
            }
            const options = {
                expiresIn: "60d"
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET, options);
            console.log("Success...");
            return res.status(201).json({ token })
            */
        }
    } catch (err) {
        console.error(err);
        return res.status(400).json({ error: "Bad Request: " + err.message });
    }
}
