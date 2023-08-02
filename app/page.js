import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <div className="flex-column gap-10">
      <div>
        <h1 className="head-text">
          Discover and share daily insightful thoughts
        </h1>
      </div>

      <div className="flex items-start gap-20">
        <Image src="/assets/images/basket.avif" width={300} height={500} />
        {/* text */}
        <div className="flex flex-col gap-6">
          <ul className="flex gap-6 text-gradient desc font-bold">
            <li>Sports</li>
            <li>Gaming</li>
            <li>Health</li>
          </ul>
          <h2 className="font-extrabold text-5xl">Sports and blogging insightful thoughts</h2>
          <p className="text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
          <Link
            href="/blogs"
            className="bg-orange-500 w-40 text-center px-6 py-3 border-radius text-white"
          >
            View our blogs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home


