import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Project from "./pages/Project"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import PrivateRoute from "./Components/PrivateRoute"
import OnlyAdminPrivateRoute from "./Components/OnlyAdminPrivateRoute"
import CreatePost from "./pages/CreatePost"
import UpdatePost from "./pages/UpdatePost"
import PostPage from "./pages/PostPage"

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<Signin/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/post/:postSlug" element={<PostPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
