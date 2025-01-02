import React from "react"
import Image from "./Image"
import LogoutModal from "./LogoutModal"
const Navbar = () => {
  return (
    <div className="navbar flex justify-between">
      <div className="size-12 object-cover">
        <Image src="/default-image.jpg" alt="logo" w={32} h={32} />
      </div>
      <div>
        <ul className="flex gap-8">
          <li>Home</li>
          <li>Trending</li>
          <li>Most Popular</li>
          <li>About</li>
        </ul>
      </div>
      <div className="flex-none">
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
      <LogoutModal />
    </div>
  )
}

export default Navbar
