import React, { Component } from 'react';

class DocumentGraphic extends Component {
    render() {
        const { portrait, signature, cropped } = this.props;
        return (
            <div>
                <div className="document-test-grapic-head">
                    <h3>Cropped Image</h3>
                </div>
                <div className="document-test-grapic-content">
                    <img src={`data:image/jpeg;base64,${cropped}`} alt="" />
                </div>
                <hr />
                <div className="document-test-grapic-head">
                    <h3>Portrait</h3>
                </div>
                <div className="document-test-grapic-content">
                    <img src={`data:image/jpeg;base64,${portrait}`} alt="" />
                </div>
                <hr />
                <div className="document-test-grapic-head">
                    <h3>Signature</h3>
                </div>
                <div className="document-test-grapic-content">
                    <img src={`data:image/jpeg;base64,${signature}`} alt="" />
                </div>

            </div>
        )
    }
}

export default DocumentGraphic;