import React, { Component, Fragment } from 'react';

import GalleryItem from '../GalleryItem/GalleryItem.js'

class GalleryList extends Component {

    state = {
        showDescription: false,
    }

    toggleDesc = () => {
        this.setState({
            showDescription: !this.state.showDescription
        })
    }

    render() {

        let descriptionClass = '';
        if (this.state.showDescription) {
            descriptionClass = 'showDescription';
        }

        return (
            <Fragment>
                {this.props.images.map(image =>

                    <GalleryItem image={image} upvote={this.props.upvote} /> //onClick={this.toggleDesc} className={descriptionClass} 

                )}
            </Fragment>
        );
    }
}

export default GalleryList;