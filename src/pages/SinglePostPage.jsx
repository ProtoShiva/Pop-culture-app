import React from "react"
import Image from "../components/Image"
import PostMenuActions from "../components/PostMenuActions"
import Search from "../components/Search"
import Comments from "../components/Comments"
import { Link, useParams } from "react-router-dom"
import client from "../apis/client"
import { useQuery } from "@tanstack/react-query"
import { format } from "timeago.js"

const fetchPost = async (slug) => {
  const res = await client.get(`posts/${slug}`)
  return res.data
}

const SinglePostPage = () => {
  const { slug } = useParams()

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  })

  if (isPending) return "loading..."
  if (error) return "Something went wrong!" + error.message
  if (!data) return "Post not found!"

  return (
    <div className="flex mt-8 flex-col gap-8 px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            {data.title}
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link
              to={`/posts?author=${data.user.name}`}
              className="text-blue-800"
            >
              {data.user.name}
            </Link>
            <span>on</span>
            <Link to={`/posts?cat=${data.category}`} className="text-blue-800">
              {data.category}
            </Link>
            <span>{format(data.createdAt)}</span>
          </div>
        </div>
        {data.img && (
          <div className="hidden lg:block w-2/5">
            <Image src={data.img} w="600" className="rounded-2xl" />
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-12 justify-between">
        {/* text */}
        <div className="lg:text-lg my-content flex flex-col gap-6 text-justify">
          <div
            className="text-green-500"
            dangerouslySetInnerHTML={{ __html: data.content }}
          ></div>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              {data.user.img && (
                <Image
                  src={data.user.img}
                  className="w-12 h-12 rounded-full object-cover"
                  w="48"
                  h="48"
                />
              )}
              <Link
                to={`/posts?author=${data.user.name}`}
                className="text-blue-800"
              >
                {data.user.name}
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions post={data} />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/posts?cat=general" className="underline">
              All
            </Link>
            <Link to="/posts?cat=Films" className="underline">
              Film
            </Link>
            <Link className="underline" to="/posts?cat=TV">
              TV
            </Link>
            <Link className="underline" to="/posts?cat=Anime">
              Anime
            </Link>
            <Link className="underline" to="/posts?cat=Gaming">
              Gaming
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments postId={data._id} />
    </div>
  )
}

export default SinglePostPage
