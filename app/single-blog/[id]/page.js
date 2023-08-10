"use client"
import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

const SingleBlog = () => {
  const searchParams = useSearchParams()
  const [blogId, setBlogId] = useState(null)

  useEffect(() => {
    const idParams = searchParams.get('id')
    if (idParams) {
      setBlogId(idParams)
    }
  }, [searchParams])


  useEffect(() => {
    if (blogId !== null) {
      const getBlog = async () => {
        const response = await fetch(`/api/blog/${blogId}`);
        const data = await response.json();
        console.log(data);
      };
      getBlog();
    }
  }, [blogId]);

  return (
    <div>
      single blog
    </div>
  )
}

export default SingleBlog