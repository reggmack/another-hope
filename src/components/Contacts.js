import React from 'react';
import $ from 'jquery';
 
class Contacts extends React.Component {

  /* componentDidMount(){
    $(document).foundation();
  }; */

  state = {
    title: "Contacts Directory" 
  };

  render() {
    return (
      <div className="content">
        <h2>{ this.state.title }</h2>
        <p>Venison incididunt in pig brisket.</p>
        <hr />
        <h3>Featured Jowl non tri-tip</h3>
      </div>
    );
  }
}

export default Contacts;