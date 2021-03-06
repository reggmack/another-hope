import React from 'react';
import $ from 'jquery';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// App Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Announcements from './components/Announcements';
import Contacts from './components/Contacts';
import Sermons from './components/Sermons';
import NotFound from './components/NotFound';
class App extends React.Component {

  componentDidMount(){
    $(document).foundation();
  };
  
  state = {
    
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/announcements" render={ () => <Announcements /> } />
            <Route path="/contacts" render={ () => <Contacts /> } />
            <Route path="/sermons" render={ () => <Sermons /> } />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
