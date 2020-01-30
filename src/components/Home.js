import React, { Component } from 'react';
/* import { Link } from 'react-router-dom'; */
 
class Home extends Component {    

  render() {
    return (
      <div className="content-home">
        {/* <h2>Home Directory</h2>
        <p>Culpa flank short ribs laboris ipsum anim labore ham hock nulla ball tip sirloin chislic.</p>
        <hr />
        <h3>Featured Spicy jalapeno bacon</h3> */}

        <div class="row medium-unstack">
          <div class="columns">One</div>
          <div class="columns">Two</div>
          <div class="columns">Three</div>
          <div class="columns">Four</div>
          <div class="columns">Five</div>
          <div class="columns">Six</div>
        </div>

        <div class="row">
          <div class="columns shrink">Shrink!</div>
          <div class="columns">Expand!</div>
        </div>

      </div>
    );
  }
}

export default Home;