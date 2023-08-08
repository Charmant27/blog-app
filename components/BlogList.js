
import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

const BlogList = ({ blog }) => {
    const { data: session } = useSession()
    const router = useRouter()
    return (
        <section className="w-full">
            <div>
                <div>
                    <div>
                        <Image
                            src={blog.author.image}
                            width={40}
                            height={40}
                            className="rounded-full"
                            alt="author"
                        />
                    </div>
                    <Image
                    src={`https://l3.unsplash.com/${blog.image}`}
                    width={90}
                    height={100}
                    alt={blog.title}
                     />
                    <h1>{blog.author.email}</h1>
                    <h2>{blog.title}</h2>
                </div>
            </div>
        </section>
    )
}

export default BlogList