"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

const singleBlog = () => {
  const searchParams = useSearchParams()
  const [blogId, setBlogId] = useState(null)
  const [blog, setBlog] = useState({})

  useEffect(() => {
    const idParams = searchParams.get('id')
    if (idParams) {
      setBlogId(idParams)
    }
  }, [searchParams])


  useEffect(() => {
    console.log('fetching blog')
    const getBlog = async () => {
      const response = await fetch(`/api/blog/${blogId}`);
      const data = await response.json();
      console.log(response)
      console.log(data);
      setBlog(data)
    };

    getBlog();
  }, [blogId]);

  return (
    <div>
      {Object.keys(blog).length > 0 ? (
        <div>
          <h1>{blog.title}</h1>
          <p>Author: {blog.author.name}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

    </div>
  )
}

export default singleBlog