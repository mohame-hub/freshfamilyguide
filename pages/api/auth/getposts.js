// api/posts/index.js

import { connectDB } from "@/utils/connectDB";
import Post from "@/libs/models/Post";

export default async function GET(req, res) {
    await connectDB();
    try {
        const posts = await Post.find({});
        res.status(200).json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
}