import { useQuery } from "@tanstack/react-query"
import React from "react"
import client from "../apis/client"
import Shimmer from "./Shimmer"

const fetchPost = async (uid) => {
  const res = await client.get(`posts/count?userId=${uid}`)
  return res.data
}

const UserData = ({ user }) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["post"],
    queryFn: () => fetchPost(user._id),
  })

  if (isPending) return <Shimmer />
  if (error) return "Something went wrong!" + error.message
  if (!data) return "Post not found!"

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <h3 className="text-lg font-semibold mb-2">Posts</h3>
        <p className="text-3xl font-bold">{data.post}</p>
      </div>
      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <h3 className="text-lg font-semibold mb-2">Saved</h3>
        <p className="text-3xl font-bold">{user.savedPosts.length}</p>
      </div>
      <div className="bg-white rounded-lg border border-neutral-200 p-6">
        <h3 className="text-lg font-semibold mb-2">Comments</h3>
        <p className="text-3xl font-bold">{data.comment}</p>
      </div>
    </div>
  )
}

export default UserData
