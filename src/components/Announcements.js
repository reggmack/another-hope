import React from 'react';
import $ from 'jquery';
import Announcement from './Announcement';
class Announcements extends React.Component {

  componentDidMount(){
    $(document).foundation();
  };

  state = {
    announcementID: 0,
    announcementTitle: "Test Announcement Title",
    announcementPostDate: "January 1, 2020",
    announcementEventDate: "January 1, 2020",
    announcementEventLocation: "Test Church",
    announcementEventTime: "12:00 Noon",
    announcementMessage: "Test Announcement Message",
  };

  render() {
    return (
      <div className="content">
        <h3>Recent Announcements</h3><hr />

        <Announcement></Announcement>

        <Announcement></Announcement>

        <Announcement></Announcement>
        
        <br />
        <h3>Featured Announcements</h3><hr />

        <Announcement></Announcement>

        <Announcement></Announcement>
       
        
        
      </div>
    );
  }
}

export default Announcements;