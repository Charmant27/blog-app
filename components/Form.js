import Link from "next/link"

const Form = ({ type, blogPost, setBlogPost, uploading, handleSubmit, imageFile }) => {
  return (
    <section className='pt-12'>
      <div className='flex flex-col gap-5'>
        <h1 className='head-text uppercase'>Upload a blog</h1>
      </div>
      <form
        className='pt-8 w-full max-w-2xl'
        onSubmit={handleSubmit}
      >
        <label
          className='font-satoshi font-semibold text-base text-gray-700'
        >
          Blog title
        </label>
        <input
          type='text'
          className='w-full border rounded-md px-6 py-3 mb-5'
          value={blogPost.title}
          onChange={(e) => setBlogPost({ ...blogPost, title: e.target.value })}
        />
        <label
          className='font-satoshi font-semibold text-base text-gray-700'
        >
          Description
        </label>
        <textarea
          className='w-full h-40 border rounded-md resize-none mb-5 px-6 py-3'
          value={blogPost.description}
          onChange={(e) => setBlogPost({ ...blogPost, description: e.target.value })}
        />
        <label
          className='font-satoshi font-semibold text-base text-gray-700'
        >
          Upload the blog picture
        </label>
        <input
          type='file'
          accept='image/*'
          value={imageFile}
          onChange={(e) => setBlogPost({ ...blogPost, image: e.target.value })}
          className='w-full border rounded-md px-6 py-3 bg-white mb-5'
        />
        <div className="flex items-center gap-5 pt-8">
          <Link href="/blogs">Cancel</Link>
          <button
            type="submit"
            disabled={uploading}
            className="btn"
          >
            {uploading ? `${type}ing` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form