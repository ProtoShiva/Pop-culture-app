import React from "react"
import PostListItem from "./PostListItem"
import client from "../apis/client"
import { useQuery } from "@tanstack/react-query"

const fetchPosts = async () => {
  const res = await client.get("posts")
  return res.data
}

const PostList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => fetchPosts(),
  })

  if (isPending) return "Loading..."

  if (error) return "An error has occured" + error.message

  console.log(data)
  return (
    <div className="flex flex-col gap-12 mb-8">
      <PostListItem />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </div>
  )
}

export default PostList
