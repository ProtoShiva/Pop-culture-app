import { useState } from "react"
import PostList from "../components/PostList"
import SideMenu from "../components/SideMenu"
import { useSearchParams } from "react-router-dom"

const PostListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get("cat")
  const writer = searchParams.get("author")
  const [open, setOpen] = useState(false)
  return (
    <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <h1 className="mb-8 mt-2 text-2xl font-bold">
        {category || writer} Blogs
      </h1>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden"
      >
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className="flex flex-col-reverse gap-8 md:flex-row justify-between">
        <div className="">
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
  )
}

export default PostListPage
