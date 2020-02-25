import React, { Component } from 'react'

class DocumentContent extends Component {
    render() {
        const { documentInfo, documentContent } = this.props;

        console.log(documentContent);
        return (
            <div>
                <div className="document-test-form-head">
                    <h3>Document Info</h3>
                </div>
                <div className="document-test-form-content">
                    <p><b>Document Type:</b> {documentInfo.documentType}</p>
                    <p><b>Document Format:</b> {documentInfo.documentFormat}</p>
                    <p><b>Document Name:</b> {documentInfo.documentName}</p>
                    <p><b>Description:</b> {documentInfo.description}</p>
                    <p><b>Issue Year:</b> {documentInfo.issueYear}</p>
                    <p><b>Country Name:</b> {documentInfo.countryName}</p>
                    <p><b>Country Code:</b> {documentInfo.countryCode}</p>
                </div>
                <hr/>
                <div className="document-test-form-head">
                    <h3>Document Content</h3>
                </div>
                <div className="document-test-form-content">
                    <p><b>First Name:</b> {documentContent.textFields.Surname.text}</p>
                    <p><b>Last Name:</b> {documentContent.textFields.GivenNames.text}</p>
                    <p><b>Date Of Birth:</b> {documentContent.textFields.DateOfBirth.text}</p>
                    <p><b>Place Of Birth:</b> {documentContent.textFields.PlaceOfBirth.text}</p>
                    <p><b>Age:</b> {documentContent.textFields.Age.text}</p>
                    <p><b>Document Number:</b> {documentContent.textFields.DocumentNumber.text}</p>
                    <p><b>State Name:</b> {documentContent.textFields.IssuingStateName.text}</p>
                    <p><b>Date Of Expiry:</b> {documentContent.textFields.DateOfExpiry.text}</p>
                </div>
            </div>
        )
    }
}

export default DocumentContent;