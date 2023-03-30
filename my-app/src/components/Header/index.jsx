import React from 'react'
import { NavLink } from "react-router-dom"
import MyLink from '../MyLink';
import './styles.css'  
import {GiFlyingTarget} from 'react-icons/gi'
const Header = () => {
  return (
    <div id='header'>
<MyLink 
text="LOGO"
Link ="/" 
customStyles ={{
  fontSize :"30px",
}}/>

<GiFlyingTarget
Link = '/'
Styles ={{
  Size :"30px",
}}
/>
<div className='header-links'>
<MyLink text = "About" Link = "/about"/ >
<MyLink text = "Contact" Link = "/contact"/>
</div>
    </div>
  );
}

export default Header;