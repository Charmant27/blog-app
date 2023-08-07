import Blog from "@/models/blog";
import { connectDB } from "@/utils/database";

export const POST = async ({ request }) => {
    const { userID, title, description, image } = await request.json();

    try {
        await connectDB()

        const newBlog = new Blog({
            author: userID,
            title,
            description,
            image
        })

        await newBlog.save()
        
    } catch (error) {
        return new Response("Failed to upload the blog", { status: 500 })
    }
}