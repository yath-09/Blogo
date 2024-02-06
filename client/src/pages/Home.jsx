import { useSelector } from "react-redux"
import {Navigate } from "react-router-dom"

const Home = () => {
const currentUser=useSelector(state=>state.user)
  return (
     currentUser? ( 
         <div>Home</div>
     )
    : (<Navigate to='/sign-in'/>)
   
  )
}

export default Home