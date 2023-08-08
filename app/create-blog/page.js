"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Form from "@/components/Form"

const CreateBlog = () => {
    const [uploading, setUploading] = useState(false)
    const [blogPost, setBlogPost] = useState({
        title: " ",
        description: " ",
        image: ""
    })

    const router = useRouter()
    const { data: session } = useSession()

    // uploading a blog
    const uploadBlog = async (e) => {
        e.preventDefault()
        setUploading(true)

        try {
            const response = await fetch("/api/blog/new", {
                method: "POST",
                body: JSON.stringify({
                    title: blogPost.title,
                    userID: session?.user.id,
                    description: blogPost.description,
                    image: blogPost.image
                })
            })
            if(response.ok) {
                router.push('/blogs')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setUploading(false)
        }
    }


    return (
        <Form
            type="Upload"
            blogPost={blogPost}
            setBlogPost={setBlogPost}
            uploading={uploading}
            handleSubmit={uploadBlog}
        />
    )
}

export default CreateBlog