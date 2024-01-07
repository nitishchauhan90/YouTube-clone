import React, { useState } from 'react'
import "../index.css"
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import AppsSharpIcon from '@mui/icons-material/AppsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import {Link} from "react-router-dom";
function Header() {
  const [inputSearch,setinputSearch] = useState("")
  return (
    <div className='header'>
      <div className='header__left'>
        <MenuSharpIcon/>
        <Link to="/">
          <img alt='logo' className='header__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1004px-Logo_of_YouTube_%282015-2017%29.svg.png'/>
        </Link>
        
      </div>
      <div className='header_input'>
        <input value={inputSearch} onChange={e => setinputSearch(e.target.value)} id='search_bar' type='text' placeholder='Search' />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon id='search_icon' />
        </Link>
        
      </div>
      <div className="header__right">
        <VideoCallSharpIcon className='header-icon'/>
        <AppsSharpIcon className='header-icon'/>
        <NotificationsSharpIcon className='header-icon'/>
        <AccountCircleSharpIcon className='header-icon'/>
      </div>
    </div>
  )
}

export default Header
