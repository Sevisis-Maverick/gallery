import React, { Component, Fragment } from 'react';

class GalleryItem extends Component {



    render() {

        

        return (



            <div className="row">
                <div className="column">
                    <img src={this.props.image.path} alt={this.props.image.path} className="images" />
                    
                    <div className="overlay">
                        <div className="text">{this.props.image.description}</div>
                    </div>
                </div>
                <br />
                <button className="upvote" onClick={() => this.props.upvote(this.props.image.id)}>upvotes</button>
                <p>{this.props.image.likes} upvotes</p>
            </div >



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