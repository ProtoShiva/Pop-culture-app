import React, { useEffect, useState } from "react"
import "react-quill-new/dist/quill.snow.css"
import ReactQuill from "react-quill-new"
import { useMutation } from "@tanstack/react-query"
import client from "../apis/client"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import Upload from "../components/Upload"
import Image from "../components/Image"

const Write = () => {
  const [value, setValue] = useState("")
  const [cover, setCover] = useState("")
  const [loading, setLoading] = useState(false)
  const [img, setImg] = useState("")
  const [video, setVideo] = useState("")
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    img && setValue((prev) => prev + `<p><image src="${img.url}"/></p>`)
  }, [img])

  useEffect(() => {
    video &&
      setValue(
        (prev) => prev + `<p><iframe class="ql-video" src="${video.url}"/></p>`
      )
  }, [video])

  const mutation = useMutation({
    mutationFn: (newPost) => {
      return client.post("posts", newPost)
    },
    onSuccess: (res) => {
      toast.success("Post has been created")
      navigate(`/${res.data.slug}`)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    }

    mutation.mutate(data)
  }

  return (
    <div className="h-screen md:h-screen flex flex-col gap-6 px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <h1 className="text-cl font-bold">Create a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        <div className="flex items-center gap-3">
          <Upload
            type="image"
            setProgress={setProgress}
            setData={setCover}
            setLoading={setLoading}
          >
            <div className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white">
              Add a cover image
            </div>
          </Upload>
          {loading && (
            <span className="loading loading-spinner text-warning"></span>
          )}
          {cover && (
            <Image
              src={cover.filePath}
              className="rounded-3xl object-cover"
              w="45"
              h="45"
            />
          )}
        </div>
        <input
          className="text-4xl p-2 font-semibold bg-transparent outline-none"
          type="text"
          placeholder="Add Title Here"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 rounded-xl bg-white shadow-md"
          >
            <option value="Films">Film</option>
            <option value="Anime">Anime</option>
            <option value="TV">TV</option>
            <option value="Gaming">Gaming</option>
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="desc"
          placeholder="A Short Description"
        />
        <div className="flex flex-1 ">
          <div className="flex flex-col gap-2 mr-2">
            <Upload type="image" setProgress={setProgress} setData={setImg}>
              🌆
            </Upload>
            <Upload type="video" setProgress={setProgress} setData={setVideo}>
              ▶️
            </Upload>
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 h-[190px] md:h-[200px] xl:h-[280px] overflow-auto rounded-xl bg-white shadow-md"
            value={value}
            onChange={setValue}
            readOnly={0 < progress && progress < 100}
          />
        </div>
        <button
          type="submit"
          disabled={mutation.isPending || loading}
          className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36 disabled:bg-blue-400 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? "Loading..." : "Send"}
        </button>
      </form>
    </div>
  )
}

export default Write
