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

        {/* <div class="row large-unstack">
          <div class="columns">One</div>
          <div class="columns">Two</div>
          <div class="columns">Three</div>
          <div class="columns">Four</div>
          <div class="columns">Five</div>
          <div class="columns">Six</div>
        </div> */}

        <div class="row">
          <div class="home-main columns small-12 medium-8">
            {/* <img src="https://goo.gl/maps/FezGdPGx43dMmVtw5" alt="New Hope Missionary Baptist Church, Portland Tennessee" height="42" width="42" /> */}

            <iframe src="https://www.google.com/maps/embed?pb=!4v1580433865633!6m8!1m7!1sHNIlzGn1wkeL03wNBecAmA!2m2!1d36.59239704692982!2d-86.56791622655072!3f264.06085!4f0!5f0.7820865974627469" width="100%" height="450" frameborder="0" style={{ border:0 }} allowfullscreen=""></iframe> 
            
            <h4 style={{ marginTop: "20px" }}>Dear Guest,</h4>
            <p>I would like to sincerely thank you for taking the time to look at our site. We don’t believe it is by accident that you have visited, but by divine intervention.</p>

            <p>New Hope Baptist Church is a place where we believe the Bible is God’s revelation to His people. It is through the Bible that we learn the attributes of God and His promises to those who love and trust Him. The Bible is "God’s Instruction Book," for we not only learn about God and His promises through the Bible, but we also learn what is expected of us; how we should treat our neighbors as well as our enemies, how we are to praise God, how we should operate God’s Church.</p>

            <p>We realize that your Christian journey will be filled with mountain tops and valley lows. Our hope and prayer is that you will receive valuable information to help you survive this Christian journey and that you can be reassured that your decision to join Christ and His Church is the most important one you will ever make.</p>

            <p>We encourage you to explore our website, and hopefully, you will find something that will entice you to come and visit our church where Christ is the Main Attraction.</p>

            <p>Pastor Dennis Page</p>
          </div>
          <div class="columns">
            <h5>Event Calendar</h5>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;