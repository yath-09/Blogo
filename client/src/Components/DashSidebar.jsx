import {HiArrowSmRight, HiUser} from 'react-icons/hi'
import {Sidebar} from 'flowbite-react'
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
const DashSidebar = () => {
    const location=useLocation();
    const [tab,setTab]=useState('')
    useEffect(()=>{
      const urlParams=new URLSearchParams(location.search)
      const tabFromUrl=urlParams.get('tab')
      if(tabFromUrl){
        setTab(tabFromUrl)
      }
    },[location.search])
    const dispatch=useDispatch();
    const handleSignout = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/user/signout', {
          method: 'POST',
        });
        // console.log('Hello');
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
        }
      }
      catch(error){
        console.log(error.message);
      }
    }
  return (
    <Sidebar className='w-full md:w-56'>
       <Sidebar.Items>
         <Sidebar.ItemGroup>
             <Link to={'/dashboard?tab=profile'}>
             <Sidebar.Item  active={tab==='profile'} icon={HiUser} label={"user"} labelColor='dark' as='div'>
                Profile
             </Sidebar.Item>
             </Link>
             <Sidebar.Item  icon={HiArrowSmRight} className='cursor-pointer'>
                <span onClick={handleSignout}>Sign-Out</span>
             </Sidebar.Item>
         </Sidebar.ItemGroup>
       </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar