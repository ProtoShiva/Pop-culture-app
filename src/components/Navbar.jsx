import React from "react"
import Image from "./Image"
import LogoutModal from "./LogoutModal"
import appImg from "../asset/icon.png"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
const Navbar = () => {
  const isLoggedIn = useSelector((store) => store.user.userDetails)
  return (
    <div className="navbar flex justify-between items-center px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
      <div className="flex justify-between w-[63%] items-center">
        <Link to="/" className="object-cover cursor-pointer">
          <img src={appImg} alt="" className="size-14" />
          {/* <Image src="/icon.png" alt="logo" w={52} h={52} /> */}
        </Link>
        <div>
          <ul className="flex gap-12">
            <Link to="/" className="cursor-pointer">
              Home
            </Link>
            <Link to="/" className="cursor-pointer">
              Trending
            </Link>
            <Link to="/" className="cursor-pointer">
              Most Popular
            </Link>
            <Link to="/" className="cursor-pointer">
              About
            </Link>
          </ul>
        </div>
      </div>

      {isLoggedIn && (
        <div className="flex-none mr-3">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <LogoutModal />
    </div>
  )
}

export default Navbar
