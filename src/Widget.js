import React from 'react';
import './Widget.css'

function Widget() {

    const recentItem = (topic) => (
        <div className="widget__linkedinNews">
            <span className="widget__bullet">○</span>
            <p>{topic}</p>
        </div>
    );
  return (

      <div className="widget">
          <p>Linkedin News</p>
          {recentItem("The top career experts to follow")}
          {recentItem("Indian investors flock to Wall St")}
          {recentItem("Salary hikes likely to go up")}
          {recentItem("desWordle's out: NYT buys gameign")}
          {recentItem("Has Budget done enough for startups?")}
      </div>
  
  );
}

export default Widget;
