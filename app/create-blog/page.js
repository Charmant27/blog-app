"use client"

import { useState, useEffect } from "react"
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


    return (
        <Form
            type="Upload"
            blogPost={blogPost}
            setBlogPost={setBlogPost}
            uploading={uploading}
            handleSubmit={() => { }}
        />
    )
}

export default CreateBlog