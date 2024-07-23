
import React,{useEffect, useState} from 'react'
import {BsChevronCompactUp} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import AOS from "aos";
export default function AdminNavItem({ content, Item_icon, child, page }) {
    const [showChild,setShowChild]=useState(false);
    useEffect(() => {
      AOS.init();
    }, []);
 
  return (
     
      <div className=' cursor-pointer AD-nav-item' onClick={()=>setShowChild(!showChild)} >
        <Item_icon className='AD-item-icon'/> 
        <span className='AD-nav-title'>
          {content}
        </span>
        <BsChevronCompactUp className='AD-item-down_up'/>
        {child&&showChild&&(
        <section  className='AD-nav-children '>
      {child&&showChild&&(
        child.map((child,index)=>(
            <section  key={index} className={`AD-nav-child`} >
                <Link   className={`link-default max-width  ${child.child_content===page?'text-primary':''}`} to={child.child_link}>{child.child_content}
                </Link>
            </section>
        ))
        )}
        </section>)}
      </div>
 
    
  )
}
