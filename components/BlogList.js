
import Image from "next/image"

const BlogList = ({ blog }) => {
    console.log(blog.image)
    return (
        <section className="w-full">
            <div>
                <div>
                    <div>
                        <Image
                            src={blog.author.image}
                            alt="author"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                    </div>
                    {/* <Image
                    src={blog.image}
                    width={90}
                    height={100}
                    alt={blog.title}
                     /> */}
                    <h1>{blog.author.email}</h1>
                    <h2>{blog.title}</h2>
                </div>
            </div>
        </section>
    )
}

export default BlogList