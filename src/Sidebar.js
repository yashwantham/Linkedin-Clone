import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );
  return (
  <div className="sidebar">
      <div className="sidebar__top">
          <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="" />
          <Avatar className="sidebar__avatar" src='https://pbs.twimg.com/profile_images/1486020923706642434/Caeejjqo_400x400.jpg' />
          <h2>Yashwanth A M</h2>
          <h4>yashwanthyashu166@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
          <div className="sidebar__stat">
              <p>Who viewed you</p>
              <p className="sidebar__statNumber">2,543</p>
          </div>
          <div className="sidebar__stat">
              <p>Views on post</p>
              <p className="sidebar__statNumber">2,448</p>
          </div>
      </div>

      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("reactjs")}
          {recentItem("programming")}
          {recentItem("softwareengineering")}
          {recentItem("design")}
          {recentItem("developer")}
      </div>
  </div>
  );
}

export default Sidebar;
