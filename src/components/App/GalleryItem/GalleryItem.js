import React, { Component, Fragment } from "react";

class GalleryItem extends Component {

    state = {
        descToggle: false,
    }

  render() {
    console.log(this.state);
    let descToggle = this.state.descToggle;
    let description = "";
    description = (
        <div className="overlay">
            <div className="text">{this.props.image.description}</div>
        </div>);

    // if (descToggle === true) {
    //   description = (
    //     <div className="overlay">
    //       <div className="text">{this.props.image.description}</div>
    //     </div>
    //   );
    // } else {
    //   description = "";
    // }

    return (
      <div className="row">
        <div className="column" onClick={() => this.setState({descToggle: !this.state.descToggle})}>
          <img
            src={this.props.image.path}
            alt={this.props.image.path}
            className="images"
          />

          {descToggle && description}

        </div>
        <br />
        <button
          className="upvote"
          onClick={() => this.props.upvote(this.props.image.id)}
        >
          upvotes
        </button>
        <p>{this.props.image.likes} upvotes</p>
      </div>

      // <div className="row">
      //     <div className="column">
      //         <img src={this.props.image.path} alt={this.props.image.path} className="images" />
      //         <div className="overlay">
      //             <div className="text">{this.props.image.description}</div>
      //         </div>
      //     </div>

      //     <br />
      //     <button className="upvote" onClick={() => this.props.upvote(this.props.image.id)}>Upvote</button>
      //     <br />
      //     <p>{this.props.image.likes} upvotes</p>
      // </div>
    );
  }
}

export default GalleryItem;
