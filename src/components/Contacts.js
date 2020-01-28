import React from 'react';
 
class Contacts extends React.Component {

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