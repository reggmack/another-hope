import React from 'react'
import $ from 'jquery';
class Sermon extends React.Component {

  componentDidMount(){
    $(document).foundation();
  };

  state = {
    sermonID: 0,
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
      <div className="sermon-accordion-content">
        <h4 className="sermon-sub-title">{ this.state.sermonTitle }</h4>
        <ul>{ this.state.sermonScriptures.map(function(scripture, i){
            return <li key={i}>{ scripture }</li>
          })}</ul>
        <p className="sermon-intro">Listen to the &quot;{ this.state.sermonTitle }&quot; sermon by { this.state.sermonSpeaker }</p>
        
        <audio controls src="SoundHelix-Song-1.mp3" type="audio/mpeg">
          Your browser does not support the audio tag.
        </audio>
      </div>
    );
  }
}

export default Sermon;