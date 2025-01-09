import React from "react"
import PostListItem from "./PostListItem"
import { useInfiniteQuery } from "@tanstack/react-query"
import client from "../apis/client"
import InfiniteScroll from "react-infinite-scroll-component"
import { useSearchParams } from "react-router-dom"
import Shimmer from "./Shimmer"

const fetchPosts = async (pageParam, searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams])

  const res = await client.get("posts", {
    params: { page: pageParam, limit: 5, ...searchParamsObj },
  })
  return res.data
}

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam, searchParams),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.hasMore ? pages.length + 1 : undefined,
  })

  if (status === "loading") return <Shimmer />
  // if (isFetching) return "Loading bhai..."

  if (status === "error") return "Something went wrong!"
  // if (error) return "Something went wrong!"

  const allPosts = data?.pages?.flatMap((page) => page.posts) || []

  return (
    <InfiniteScroll
      dataLength={allPosts?.length}
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<Shimmer />}
      endMessage={
        <p>
          <b>All posts loaded!</b>
        </p>
      }
    >
      {allPosts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </InfiniteScroll>
  )
}

export default PostList
