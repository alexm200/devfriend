import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
        <div className="col-xl-3 col-md-6">
            <div className="card mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{this.props.title}</h6>
                </div>
                <div className="card-body">
                    {this.props.text}
                </div>
            </div>        
        </div>
    );
  }
}

export default Card;