import React from "react"
import Image from "./Image"
import { Link } from "react-router-dom"

const PostCard = ({ image, title, cat, slug }) => {
  return (
    <div className="card card-compact bg-base-100 w-72 h-80 shadow-xl">
      <figure>
        <Image src={image} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cat}</h2>
        <p>{title}</p>
        <Link to={`/${slug}`} className="card-actions justify-end">
          <button className="btn btn-primary">Read More</button>
        </Link>
      </div>
    </div>
  )
}

export default PostCard
