import React from 'react';
/* import Announcement from './Announcement'; */
class Announcements extends React.Component {

  state = {
    title: "Announcements Directory" 
  };

  render() {
    return (
      <div className="content">
        <h3>Recent Announcements</h3><hr />
        

        <h3>Featured Announcements</h3><hr />
       
        
        
      </div>
    );
  }
}

export default Announcements;