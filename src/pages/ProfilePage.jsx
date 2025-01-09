import React, { useState } from "react"
import PostCard from "../components/PostCard"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"
import Image from "../components/Image"
import { format } from "timeago.js"
import Upload from "../components/Upload"
import client from "../apis/client"
import { useMutation, useQuery } from "@tanstack/react-query"
import UserData from "../components/UserData"

const ProfilePage = () => {
  const [cover, setCover] = useState("")
  const user = useSelector((store) => store.user.userDetails)

  const mutation = useMutation({
    mutationFn: (newPic) => {
      return client.patch("user/userImage", newPic)
    },
    onSuccess: (res) => {
      toast.success("Image has been updated")
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      img: cover.filePath || "",
    }

    mutation.mutate(data)
  }
  return (
    <div className="h-fit mt-4 px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <div className="bg-white rounded-lg border border-neutral-200 p-8 mb-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={user.img}
            alt="logo"
            w="128"
            h="128"
            className="rounded-full border-4 border-neutral-200 transition-opacity duration-300 opacity-100"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
            <p className="text-neutral-600 mb-2">{user.email}</p>
            <p className="text-neutral-500 text-sm mb-4">
              Member since {format(user.createdAt)}
            </p>
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
              <Upload type="image" setData={setCover}>
                <div className="px-4 py-2 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors">
                  Edit Pic
                </div>
              </Upload>

              <button
                type="submit"
                className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                save
              </button>
            </form>
          </div>
        </div>
      </div>
      <UserData user={user} />
      <div className="w-full">
        <div className="mb-2">
          <h2 className="text-2xl font-bold">Saved Posts</h2>
          <p className="text-neutral-600">
            Your collection of saved articles and posts
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-6 p-6">
          {user.savedPosts ? (
            user.savedPosts.map((post) => {
              return (
                <PostCard
                  key={post.postId}
                  image={post.image}
                  title={post.title}
                  cat={post.cat}
                  slug={post.slug}
                />
              )
            })
          ) : (
            <div>You have not created any posts yet</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
