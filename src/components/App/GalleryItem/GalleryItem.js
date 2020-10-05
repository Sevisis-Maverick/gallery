import React, { Component, Fragment } from 'react';

class GalleryItem extends Component {



    render() {
        return (
            <div className="row">
                <div className="column">
                    <img src={this.props.image.path} alt={this.props.image.path} className="images" />
                    <br />
                    <button className="upvote" onClick={() => this.props.upvote(this.props.image.id)}>Upvote</button>
                    <br />
                    <p>{this.props.image.likes} upvotes</p>
                </div>

            </div>
        );
    }
}

export default GalleryItem;