import Blog from "@/models/blog";
import { connectDB } from "@/utils/database";

// getting a single blog 
export const GET = async (request, { params }) => {
    try {
        await connectDB()

        if (!params.id) {
            return new Response("Invalid blog ID", { status: 404 })
        }

        const blog = await Blog.findById(params.id).populate("author")

        if (!blog) {
            return new Response("Blog cannot be found", { status: 404 })
        }
        else {
            return new Response(JSON.stringify(blog), { status: 200 })
        }
    } catch (error) {
        return new Response("Failed to get blog", { status: 500 })
    }
}