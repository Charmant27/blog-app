'use client'

import { useEffect, useState } from "react"
import BlogList from "@/components/BlogList"

// a component that is handling the blogs posting

const BlogDisplay = ({ data }) => {
  return (
    <div className="mt-16">
      {data.map((blog) => (
        <BlogList
          key={blog._id}
          blog={blog}
        />
      ))}
    </div>
  )
}

const Blogs = () => {
  const [searchFilter, setSearchFilter] = useState('')
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/api/blog')
      const data = await response.json()

      setBlogs(data)
    }

    fetchBlogs()
  }, [])

  return (
    <section
      className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2;"
    >
      <form className="w-full">
        <input
          type="text"
          placeholder="Search blog"
          className="w-full border rounded-md px-6 py-3"
        />
      </form>
      <BlogDisplay data={blogs} />
    </section>
  )
}

export default Blogs