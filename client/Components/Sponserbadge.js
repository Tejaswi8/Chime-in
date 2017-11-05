import React from 'react';
class SponsorBadge extends React.Component {
    constructor(){
    super();
    this.state = {};
  }
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-10">
                    <h4>POPULAR CONVERSATIONS</h4>
                </div>
                <div className="col-lg-2">
                    <div className="alert alert-success" role="alert">Sponsor Badge</div>
                </div>
            </div>
        </div>
    );
  }
}
export default SponsorBadge;