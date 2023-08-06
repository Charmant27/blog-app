import Link from "next/link"

const About = () => {
  return (
    <div className="pt-8 flex flex-col gap-3">
      <div className="pb-10">
        <h1 className="text-gradient uppercase font-extrabold text-5xl text-center">Charm Blogging</h1>
      </div>
      {/* blog section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl capitalize font-semibold">What is Charm blogging</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl capitalize font-semibold">Why blog with us ?</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="capitalize font-semibold text-xl">Want to post or view our blogs</h2>
          <div className="flex items-center gap-4">
            <Link
              href="/post-blog"
              className="btn"
            >
              Post blog
            </Link>
            <Link
              href="/blogs"
              className="btn-hover"
            >
              View our current blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About