import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import client from "../apis/client"
import { toast } from "react-toastify"
import Comment from "./Comment"
import { useSelector } from "react-redux"

const fetchComments = async (postId) => {
  const res = await client.get(`comments/${postId}`)
  return res.data
}

const Comments = ({ postId }) => {
  const user = useSelector((store) => store.user.userDetails)
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => fetchComments(postId),
  })

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (newComment) => {
      return client.post(`comments/${postId}`, newComment)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", postId] })
    },
    onError: (error) => {
      toast.error(error.response.data)
    },
  })

  const handleSubmit = (e) => {
    console.log("data")
    e.preventDefault()
    const formData = new FormData(e.target)

    const data = {
      desc: formData.get("desc"),
    }

    mutation.mutate(data)
  }

  return (
    <div className="flex flex-col gap-8 lg:w-3/5 mb-12">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between gap-8 w-full"
      >
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button
          type="submit"
          className="bg-blue-800 px-4 py-3 text-white font-medium rounded-xl"
        >
          Send
        </button>
      </form>
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Error loading comments!"
      ) : (
        <>
          {mutation.isPending && (
            <Comment
              comment={{
                desc: `${mutation.variables.desc} (Sending...)`,
                createdAt: new Date(),
                user: {
                  img: user.imageUrl,
                  username: user.name,
                },
              }}
            />
          )}

          {data.map((comment) => (
            <Comment key={comment._id} comment={comment} postId={postId} />
          ))}
        </>
      )}
    </div>
  )
}

export default Comments
