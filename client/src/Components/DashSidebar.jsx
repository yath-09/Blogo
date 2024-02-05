import {HiArrowSmRight, HiDocument, HiDocumentText, HiUser} from 'react-icons/hi'
import {Sidebar, SidebarItem} from 'flowbite-react'
import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
const DashSidebar = () => {
    const location=useLocation();
    const {currentUser}=useSelector(state=>state.user)
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
       <Sidebar.ItemGroup className='flex flex-col gap-1'>
             <Link to={'/dashboard?tab=profile'}>
              <Sidebar.Item  active={tab==='profile'} icon={HiUser} label={currentUser.isAdmin ?'Admin' :'User'} labelColor='dark' as='div'>
                  Profile
              </Sidebar.Item>
             </Link>
              {currentUser && currentUser.isAdmin && <Link to={'/dashboard?tab=posts'}>
                <Sidebar.Item 
                active={tab==='posts'}
                icon={HiDocumentText}
                as='div'>
                  Posts
                </Sidebar.Item>
                </Link>
             }
             <Sidebar.Item  icon={HiArrowSmRight} className='cursor-pointer'>
                <span onClick={handleSignout}>Sign-Out</span>
             </Sidebar.Item>
         </Sidebar.ItemGroup>
       </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar