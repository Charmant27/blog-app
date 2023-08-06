import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { connectDB } from "@/utils/database";
import User from "@/models/user";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET
        })
    ],

    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })
            session.user.id = sessionUser._id.toString()

            return session
        },


        async signIn({ profile }) {
            try {
                await connectDB()

                // check if the user already exists
                const userExists = await User.findOne({ email: profile.email })
                // create a new user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        image: profile.picture
                    })
                }
                return true
            } catch (error) {
                console.log(error.message)
                return false
            }
        }
    }
})

export { handler as GET, handler as POST }