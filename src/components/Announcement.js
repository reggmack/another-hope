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
        <h5><span className="ann-title">{ this.state.announcementTitle }</span> <span className="ann-text-plain">-</span> <span className="ann-date">{ this.state.announcementEventDate }</span></h5>
        <p className="ann-msg">{ this.state.announcementMessage }</p>
        <p className="ann-msg-detail">{ this.state.announcementMessageDetail }</p>
        <ul className="ann-logistics">
          <li><span className="ann-event-time">Time: { this.state.announcementEventTime }</span></li>
          <li>Date: { this.state.announcementEventDate }</li>
          <li>Location: { this.state.announcementEventLocation }</li>
        </ul>
      </div>
    );
  }
}

export default Announcement;