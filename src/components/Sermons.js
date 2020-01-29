import React from 'react';
import Sermon from './Sermon';
class Announcement extends React.Component {

  state = {
    title: "Sermons Directory",
    sermonDate: "January 1, 2020",
    sermonTitle: "Test Sermon Title",
    sermonSpeaker: "Test Speaker Name",
    sermonScriptures: [
      "Luke 6:38",
      "I Peter 2:24",
      "I Peter 2:23"
    ]
  };

  render() {
    return (
        <div className="content">
        <h2>Sermons Directory</h2>
        <p>Culpa flank short ribs laboris ipsum anim labore ham hock nulla ball tip sirloin chislic.</p>
        <hr />
        
        <div className="row">
          <div className="columns">
            <ul className="accordion" data-accordion>
          <li className="accordion-item is-active" data-accordion-item>
            <a href="#" className="accordion-title">{ this.state.sermonDate } - { this.state.sermonTitle }</a>
            <div className="accordion-content" data-tab-content >
              <Sermon></Sermon>
            </div>
          </li>
          <li className="accordion-item" data-accordion-item>
            <a href="#" className="accordion-title">{ this.state.sermonDate } - { this.state.sermonTitle }</a>
            <div className="accordion-content" data-tab-content>
              <Sermon></Sermon>
            </div>
          </li>
          <li className="accordion-item" data-accordion-item>
            <a href="#" className="accordion-title">{ this.state.sermonDate } - { this.state.sermonTitle }</a>
            <div className="accordion-content" data-tab-content>
              <Sermon></Sermon>
            </div>
          </li>
        </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Announcement;