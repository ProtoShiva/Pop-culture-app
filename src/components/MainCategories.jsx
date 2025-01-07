import React from "react"
import { Link } from "react-router-dom"
import Search from "./Search"

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* links */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-4 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=Films"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Film
        </Link>
        <Link
          to="/posts?cat=TV"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          TV
        </Link>
        <Link
          to="/posts?cat=Anime"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Anime
        </Link>
        <Link
          to="/posts?cat=Gaming"
          className="hover:bg-blue-50 rounded-full px-4 py-2"
        >
          Gaming
        </Link>
      </div>
      <span className="text-xl font-medium">|</span>
      {/* search */}
      <Search />
    </div>
  )
}

export default MainCategories
