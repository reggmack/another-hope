import React from 'react';
import $ from 'jquery';
class App extends React.Component {

  componentDidMount(){
    $(document).foundation();
  };
  
  state = {
    
  };

  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="columns">
            <h2>Accordion</h2>
            <p>Accordions lets you organize and navigate multiple documents in a single container. Highly useful for switching between items in the container specially when you have a large amount of content.</p>
          </div>
        </div>

        <div className="row">
          <div className="columns">
            <ul className="accordion" data-accordion>
          <li className="accordion-item is-active" data-accordion-item>
            <a href="#" className="accordion-title">Accordion 1</a>
            <div className="accordion-content" data-tab-content >
              <p>Panel 1. Lorem ipsum dolor</p>
              <a href="#">Nowhere to Go</a>
            </div>
          </li>
          <li className="accordion-item" data-accordion-item>
            <a href="#" className="accordion-title">Accordion 2</a>
            <div className="accordion-content" data-tab-content>
              <textarea></textarea>
              <button className="button">I do nothing!</button>
            </div>
          </li>
          <li className="accordion-item" data-accordion-item>
            <a href="#" className="accordion-title">Accordion 3</a>
            <div className="accordion-content" data-tab-content>
              Type your name!
              <input type="text"></input>
            </div>
          </li>
        </ul>
          </div>
        </div>


      </div>// Wrap DIV
    );
  }
}



export default App;
