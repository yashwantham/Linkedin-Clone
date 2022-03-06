import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut();
    }

  return (
  <div className='header'>
      <div className="header__left">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
          <div className="header__search">
              <SearchIcon/> 
              <input placeholder="Search" type="text" />
          </div>
      </div>

      <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar="https://pbs.twimg.com/profile_images/1486020923706642434/Caeejjqo_400x400.jpg" title="me" onClick={logoutOfApp} />
      </div>
  </div>
  
  )
}

export default Header;
