import React from 'react';
import $ from 'jquery';
class Announcement extends React.Component {

  componentDidMount(){
    $(document).foundation();
  };

  state = {
    announcementID: 0,
    announcementTitle: "Test Announcement Title",
    announcementPostDate: "January 1, 2020",
    announcementEventDate: "(Sunday) January 1, 2020",
    announcementEventLocation: "Test Church",
    announcementEventTime: "12:00 Noon",
    announcementMessage: "Test Announcement Message",
    announcementMessageDetail: "After the 11:00 service"
  };

  render() {
    return (
      <div className="callout small">
        <h5>{ this.state.announcementTitle } - { this.state.announcementEventDate }</h5>
        <p className="ann-msg">{ this.state.announcementMessage }</p>
        <p className="ann-msg-detail">{ this.state.announcementMessageDetail }</p>
        <ul className="ann-logistics">
          <li>Time: { this.state.announcementEventTime }</li>
          <li>Date: { this.state.announcementEventDate }</li>
          <li>Location: { this.state.announcementEventLocation }</li>
        </ul>
      </div>
    );
  }
}

export default Announcement;