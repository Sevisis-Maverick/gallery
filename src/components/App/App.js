import axios from 'axios';
import React, { Component, Fragment } from 'react';
import './App.css';

import {
  HashRouter as Router,
  Switch,
  NavLink,
  Route
} from "react-router-dom";

import About from './About/About'
import GalleryList from './GalleryList/GalleryList.js';

class App extends Component {

  state = {
    images: [{
      id: null,
      path: '',
      description: '',
      likes: null,
    }]
  }

  componentDidMount() {
    console.log('App component has mounted');
    this.getImages();
  }

  getImages = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    }).then((response) => {
      console.log(response)
      console.log(response.data)
      this.setState({ images: response.data })
    }).catch((error) => {
      console.log(error);
    });
  }

  upvote = (id) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    }).then((response) => {
      console.log(response)
      console.log(response.data)
      console.log('Increasing upvote count by 1')
      this.getImages()
    }).catch((error) => {
      console.log(error);
    });
  }



  render() {
    return (
      <div className="App">

        <Router>
          <ul className="navBar">
            <li><NavLink to="/" exact={true}>Home</NavLink></li>
            <li><NavLink to="About">About</NavLink></li>
          </ul>
          <Switch>
            <Route path="/About">
              <About />
            </Route>
          </Switch>
        </Router>



        <header className="App-header">
          <h1 className="App-title">Gallery of cats</h1>
        </header>
        <br />
        <Fragment className="gallery">
          <GalleryList images={this.state.images} upvote={this.upvote} />
        </Fragment>
      </div>
    );
  }
}

export default App;
