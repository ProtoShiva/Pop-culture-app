import { Link } from "react-router-dom"
import Image from "./Image"

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-12">
      {/* image */}

      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="featured1.jpeg"
          className="rounded-2xl object-cover"
          w="735"
        />
      </div>

      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/test`} className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          quia voluptates accusantium corporis. Ipsam, facilis.
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written by</span>
          <Link className="text-blue-800" to={`/test`}>
            Quentin
          </Link>
          <span>on</span>
          <Link className="text-blue-800">Manga</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          id tenetur dolorem numquam eligendi facere.
        </p>
        <Link to={`/test`} className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default PostListItem
