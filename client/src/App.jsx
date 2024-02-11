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
import ScrollToTop from "./Components/ScrollToTop"
import Search from "./pages/Search"

function App() {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/projects" element={<Project/>}/>
            <Route path="/post/:postSlug" element={<PostPage/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route element={<OnlyAdminPrivateRoute/>}>
              <Route path="/create-post" element={<CreatePost/>}/>
              <Route path='/update-post/:postId' element={<UpdatePost />} />
            </Route>   
          </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
