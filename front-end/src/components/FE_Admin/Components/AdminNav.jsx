import React, { useEffect, useRef, useState } from 'react'
import '../Components/AdminNav.scss'
import { Button } from 'react-bootstrap';
import {AiFillHome} from "react-icons/ai";
import Cookies from 'js-cookie';
import { useNavigate,Link } from 'react-router-dom';
import  {BsFillPersonFill,BsFillTrophyFill,BsTrashFill,BsChatLeftTextFill} from   'react-icons/bs';
import Swal from 'sweetalert2'
import AdminNavItem from './AdminNavItem';

export default function AdminNav({page}) {
  const navigate = useNavigate();
  const [nav,setNav]=useState([]);

  useEffect(()=>{
    setNav(
       [
        {
          id:'1',
          content:'DashBoard',
          item_icon: AiFillHome,
          child: 
          [
            {child_id:'1',child_content:'Admin',child_link:'/admin'},
          ],
          link: ''
        } ,
        {
          id:'2',
          content:'Appointment',
          item_icon:BsFillPersonFill,
          child:[
            {child_id:'1',child_content:'Appointment',child_link:'/admin/appointment'},
          ],
          link:''
        },
        {
          id:'3',
          content:'Products',
          item_icon:BsFillTrophyFill,
          child:[
            {child_id:'1',child_content:'Products',child_link:'/admin/products'},
          ],
          link:''
        },
        {
          id:'4',
          content:'News',
          item_icon:BsChatLeftTextFill,
          child:[
            {child_id:'1',child_content:'News',child_link:'/admin/news'},
          ],
          link:''
        },
        {
          id:'5',
          content:'Disable',
          item_icon:BsTrashFill,
          child:[
            {child_id:'1',child_content:'Disable appointment',child_link:'/admin/disable/appointment'},
            {child_id:'2',child_content:'Disable News',child_link:'/admin/disable/News'},
            {child_id:'3',child_content:'Disable Products',child_link:'/admin/disable/Products'},
          ],
          link:''
        },
      
       ]
      
    )
  },[])

  const logout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.isConfirmed) {
        Cookies.remove('login');
        navigate('/login');
      }
    }) }
  
  return (
    

    <div className='AD-nav-content '>
 
    <section className='AD-nav-container'>

    <div className='AD-nav-logo'>
      <Link to='/admin'>

      {/* <img src={logo} alt=""  className='AD-nav-img'/> */}
      </Link>

    </div>
    <section className='AD-nav-items ' >
        { 
          nav.map((nav,index)=>(
         
            <AdminNavItem page={page}  key={index}  content={nav.content} Item_icon={nav.item_icon} child={nav.child}/>
          ))
        }  
        <div className='d-flex justify-content-center'>

        <Button className='mt-5' onClick={logout} >Log out </Button>

      
        </div>
     

    </section>
    </section>
    </div>
  
  )
}