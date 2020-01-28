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
        <h2>Sermons Directory</h2>
        <p>Culpa flank short ribs laboris ipsum anim labore ham hock nulla ball tip sirloin chislic.</p>
        <hr />
        <h3>Featured Spicy jalapeno bacon</h3>

      </div>
    );
  }
}

export default Announcement;