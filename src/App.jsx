import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import ProtectedRoute from "./components/ProtectedRoute"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import PostListPage from "./pages/PostListPage"
import SinglePostPage from "./pages/SinglePostPage"
import Write from "./pages/Write"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { getUserDetails } from "./apis/auth"
import { addUser } from "./redux/slices/userSlices"
import AboutPage from "./pages/AboutPage"
import ProfilePage from "./pages/ProfilePage"

const App = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  async function getUser() {
    const res = await getUserDetails()
    dispatch(addUser(res.user))
    setLoading(false)
  }
  const isLoggedIn = useSelector((store) => store.user.userDetails)

  useEffect(() => {
    getUser()
  }, [])

  if (loading) return <div>loading...</div>
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {!isLoggedIn && (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<AboutPage />} />
          </>
        )}
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/register" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<SinglePostPage />} />
          <Route path="/write" element={<Write />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
