import React from 'react';
import $ from 'jquery';
import Event from './Event';

class EventCalendar extends React.Component {

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
  };

  render() {
    return (
      <div className="">
        <h5>Event Calendar</h5>
        <Event></Event>
        <Event></Event>
        <Event></Event>  
      </div>
    );
  }
}

export default EventCalendar;