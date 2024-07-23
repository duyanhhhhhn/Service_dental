import React, { useEffect, useState } from 'react'
import '../Components/AdminNav.scss'
import { Button } from 'react-bootstrap';
import {AiFillHome} from "react-icons/ai";
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import  {BsFillPersonFill,BsFillTrophyFill,BsChatLeftTextFill} from   'react-icons/bs';
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
        },
        {
          id:'3',
          content:'Products',
          item_icon:BsFillTrophyFill,
          child:[
            {child_id:'1',child_content:'Products',child_link:'/admin/products'},
          ],
        },
        {
          id:'4',
          content:'News',
          item_icon:BsChatLeftTextFill,
          child:[
            {child_id:'1',child_content:'News',child_link:'/admin/news'},
          ],
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
      <section className='AD-nav-items ' >
          { 
            nav.map((nav,index)=>(
              <AdminNavItem page={page}  key={index}  content={nav.content} Item_icon={nav.item_icon} child={nav.child}/>
            ))
          }  
          <div className='d-flex justify-content-center'>
          <Button className='mt-5' onClick={logout} >Logout</Button>
          </div>
      </section>
    </section>
    </div>
  
  )
}