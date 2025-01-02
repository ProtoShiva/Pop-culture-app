import React from "react"
import { logoutUser } from "../apis/auth"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeUser } from "../redux/slices/userSlices"

const LogoutModal = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogout = async () => {
    const response = await logoutUser()
    if (response.success) {
      dispatch(removeUser())
      navigate("/")
    } else {
      console.log(response.message)
    }
  }
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <p className="py-4 text-xl">Are you Sure you want to Log Out ?</p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-3">
            <button className="btn btn-error" onClick={handleLogout}>
              Yes, Log Out
            </button>
            <button className="btn btn-outline btn-success">Cancel</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default LogoutModal
