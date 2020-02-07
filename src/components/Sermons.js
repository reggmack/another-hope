import React from 'react';
import $ from 'jquery';
import Sermon from './Sermon';
class Announcement extends React.Component {

  componentDidMount(){
    $('.accordion').foundation();
  };

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
            <a href="#" className="accordion-title"><span className="sermon-date">{ this.state.sermonDate }</span> <span className="sermon-text-plain">-</span> <span className="sermon-title">{ this.state.sermonTitle }</span></a>
            <div className="accordion-content" data-tab-content >
              <Sermon></Sermon>
            </div>
          </li>
          <li className="accordion-item" data-accordion-item>
            <a href="#" className="accordion-title"><span className="sermon-date">{ this.state.sermonDate }</span> <span className="sermon-text-plain">-</span> <span className="sermon-title">{ this.state.sermonTitle }</span></a>
            <div className="accordion-content" data-tab-content>
              <Sermon></Sermon>
            </div>
          </li>
          <li className="accordion-item" data-accordion-item>
            <a href="#" className="accordion-title"><span className="sermon-date">{ this.state.sermonDate }</span> <span className="sermon-text-plain">-</span> <span className="sermon-title">{ this.state.sermonTitle }</span></a>
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