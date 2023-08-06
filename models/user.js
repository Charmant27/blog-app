import { models, model, Schema } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'This user already exists'],
    },

    image: {
        type: String,
    }
})

const User = models.User || model("User", UserSchema)

export default User