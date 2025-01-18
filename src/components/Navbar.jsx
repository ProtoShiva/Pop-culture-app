import React from "react"
import Image from "./Image"
import LogoutModal from "./LogoutModal"
import appImg from "../asset/icon.png"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
const Navbar = () => {
  const isLoggedIn = useSelector((store) => store.user.userDetails)
  const location = useLocation()
  const myPath = location.pathname

  return (
    <div className="navbar flex justify-between items-center px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <div className="flex justify-between w-full items-center">
        <Link to="/" className="object-cover cursor-pointer">
          <img src={appImg} alt="" className="size-14" />
        </Link>
        <div>
          <ul className="flex gap-12">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <Link to="/posts?sort=trending" className="cursor-pointer">
              Trending
            </Link>
            <Link to="/posts?sort=popular" className="cursor-pointer">
              Most Popular
            </Link>
            <Link to="/about" className="cursor-pointer">
              About
            </Link>
          </ul>
        </div>
        {isLoggedIn ? (
          <div className="flex gap-4 items-center">
            <button
              className="btn btn-outline btn-error"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Logout
            </button>
            <Link to={"/profile"} className="w-10 cursor-pointer">
              <Image
                src={isLoggedIn.img}
                alt="logo"
                w="52"
                h="52"
                className="rounded-full object-cover"
              />
            </Link>
          </div>
        ) : (
          myPath !== "/login" && (
            <Link to={"/login"}>
              <button className="btn btn-outline btn-success">Login</button>
            </Link>
          )
        )}
      </div>
      <LogoutModal />
    </div>
  )
}

export default Navbar
