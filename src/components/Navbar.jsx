import { useState } from "react"
import Image from "./Image"
import appImg from "../asset/icon.png"
import LogoutModal from "./LogoutModal"
import { Link, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const isLoggedIn = useSelector((store) => store.user.userDetails)
  const location = useLocation()
  const myPath = location.pathname

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-around">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <img src={appImg} alt="" className="size-14" />
      </Link>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {/* Change Hamburger Icon */}
          {/* {open ? "X" : "☰"} */}
          <div className="flex flex-col gap-[5.4px]">
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && "rotate-45"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black transition-all ease-in-out ${
                open && "opacity-0"
              }`}
            ></div>
            <div
              className={`h-[3px] rounded-md w-6 bg-black origin-left transition-all ease-in-out ${
                open && "-rotate-45"
              }`}
            ></div>
          </div>
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>
            Trending
          </Link>
          <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>
            Most Popular
          </Link>
          <Link to="/about" onClick={() => setOpen(false)}>
            About
          </Link>
          {isLoggedIn ? (
            <div className="flex gap-4 items-center">
              <button
                className="btn btn-outline btn-error"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
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
              <Link to={"/login"} onClick={() => setOpen(false)}>
                <button className="btn btn-outline btn-success">Login</button>
              </Link>
            )
          )}
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Home</Link>
        <Link to="/posts?sort=trending">Trending</Link>
        <Link to="/posts?sort=popular">Most Popular</Link>
        <Link to="/">About</Link>
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
            <Link to={"/login"} onClick={() => setOpen(false)}>
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
