import React from 'react'
import { NavLink } from 'react-router-dom'
import "./styles.css";

const MyLink = ({text, Link ,customStyles}) => {
  
    return <NavLink 
   style ={customStyles}
    to = {Link} 
    className = {({ isActive }) => isActive && "active"}
    >{text}
    </NavLink>
  
}

export default MyLink