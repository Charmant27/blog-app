import { model, models, Schema } from "mongoose";

const BlogSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    title: {
        type: String,
        required: [true, 'The blog title field cannot be empty']
    },

    description: {
        type: String,
        required: [true, 'The blog description field cannot be empty']
    },

    image: {
        type: String,
        required: [true, 'Please select an image for the blog']
    }
})

const Blog = models.Blog || model('Blog', BlogSchema)

export default Blog