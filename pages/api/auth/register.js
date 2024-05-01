import { hash } from "bcrypt";
import User from "@/libs/models/User"; // Assuming the path is correct
import { connectDB } from "@/utils/connectDB";

export default async function POST(req, res){
    await connectDB();
    try {
        // Parse JSON payload from request body
        const { firstname, lastname, email, password } = req.body;

        // Check if required fields are present
        if (!firstname || !lastname || !email || !password) {
            throw new Error('Missing required fields');
        }
        
        // Hash the password
        const hashedPassword = await hash(password, 10);
        
        // Create a new user instance
        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword
        });
        
        // Save the new user to the database
        await newUser.save();

        console.log('User registered successfully:', newUser);
        res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Failed to register user' });
    }
}
