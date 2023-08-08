import Blog from "@/models/blog";
import { connectDB } from "@/utils/database";

export const GET = async (request) => {
    try {
        await connectDB()

        const blogs = await Blog.find({}).populate('author')
        return new Response(JSON.stringify(blogs), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch blogs", { status: 500 })
    }
}