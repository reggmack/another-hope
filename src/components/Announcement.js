import React from 'react';
class Announcement extends React.Component {

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
      </div>
    );
  }
}

export default Announcement;