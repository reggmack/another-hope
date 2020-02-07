import React from 'react';
import $ from 'jquery';
class Event extends React.Component {

  componentDidMount(){
    $(document).foundation();
  };

  state = {
    eventID: 0,
    eventTitle: "Test Event Title",
    eventPostDate: "January 1, 2020",
    eventDate: "January 1, 2020",
    eventLocation: "Test Church",
    eventTime: "12:00 Noon",
    eventMessage: "Test Event Message",
    eventMessageDetail: "Test Event Message Details",
  };

  render() {
    return (
      <div className="callout small">
        <h6 className="event-date text-sub-hdr">{ this.state.eventDate }</h6>
        <h5 className="event-title text-red-hdr">{ this.state.eventTitle }</h5>
        <p className="event-msg">{ this.state.eventMessage }</p>
        <p className="event-msg-detail">{ this.state.eventMessageDetail }</p>
        <ul className="event-logistics">
          <li><span className="event-time">Time: { this.state.eventTime }</span></li>
          <li>Date: { this.state.eventDate }</li>
          <li>Location: { this.state.eventLocation }</li>
        </ul>
      </div>
    );
  }
}

export default Event;