import { hash } from "bcrypt";
import { connectDB } from "@/utils/connectDB";
import Post from "@/libs/models/Post";

export default async function POST(req, res){
    await connectDB();
    try {
        // Parse JSON payload from request body
        const { category, name, title, description, text, imageLink } = req.body;

        // Check if required fields are present
        if (!title || !description || !text || !imageLink || !imageLink) {
            throw new Error('Missing required fields');
        }
        
        // Create a new user instance
        const newPost = new Post({
            category,
            title,
            description,
            text,
            imageLink
        });
        
        // Save the new user to the database
        await newPost.save();

        console.log('Post registered successfully:');
        res.status(201).json({ message: "Post uploaded successfully" });
    } catch (error) {
        console.error('Error uploading post:', error);
        res.status(500).json({ error: 'Failed to upload post' });
    }
}


