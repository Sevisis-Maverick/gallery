import axios from 'axios';
import React, { Component, Fragment } from 'react';
import './App.css';

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
        <header className="App-header">
          <h1 className="App-title">Gallery of cats</h1>
        </header>
        <br />

        <Fragment className="gallery">

          <GalleryList images={this.state.images} upvote={this.upvote}/> {/* hello */}

        </Fragment>
      </div>
    );
  }
}

export default App;
