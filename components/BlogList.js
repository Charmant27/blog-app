
import Image from "next/image"

const BlogList = ({ blog }) => {

    return (
        <section className="w-full">
            <div>
                <div
                    className="mb-10 bg-slate-200 px-3 py-4 flex flex-col gap-2"
                >
                    <div
                        className="flex items-center gap-3">
                        <Image
                            src={blog.author.image}
                            alt="author"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <h1 className="text-gray-700">{blog.author.email}</h1>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-gradient">{blog.title}</h2>
                        <p className="text-sm">{blog.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogList