import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {setAsBegin, setAsLoaded, setAsLoading} from '../../../redux/actions/documentTestActions';
import FileUpload from '../../Form/FileUpload/components/FileUploadDefault';
import ResultTabs from '../../UI/Tabs/components/DefaultTabs';

import '../../../css/body/documentTest.css';

class DocumentTest extends Component {

    handleSubmit = (event) => {
        const filereader = new FileReader();
        const requestObject = {
            features: 
            ["DETECT_ALL"],
            documents: []
        }

        filereader.onload = (e) => {
            const img = new Image();

            img.onload = () => {
                this.props.setAsLoading();

                const format = e.target.result.split(':')[1].split('/')[1].split(';')[0];
                const base64 = e.target.result;
                
                const doc = {
                    base64DocumentString: base64,
                    fileFormat: format,
                    pageIndex: 0,
                    lightingMode: "WHITE_FULL"
                }
                requestObject.documents.push(doc);
                axios.post('https://cors-anywhere.herokuapp.com/api.caronaesystems.com/v1/Documents/Identity:Recognize', requestObject)
                    .then((response) => {
                        if (response.data.verificationResult) {
                            const verificationResult = response.data.verificationResult[0];

                            if (verificationResult.documentInfoVerificationResult !== null) {
                                this.props.setAsLoaded(verificationResult);
                            } else {
                                this.props.setAsBegin();
                            }
                        }
                    })
                    .catch((error) => {
                        this.props.setAsBegin();
                    })
            }

            img.onerror = () => {
                console.log('error accured')
            }

            img.src = e.target.result;
        }

        if (event.files)
            filereader.readAsDataURL(event.files[0]);
    }
    
    render() {
        const { dataState, data } = this.props;

        if (dataState === 'begin')
            return (
                <div id="documentTest" className="doc-test">
                    <FileUpload onSubmit={this.handleSubmit} />
                </div>
            )

        if (dataState === 'loading') {
            return (
                <div id="documentTest" className="doc-test">
                    <img src="./img/loading.svg" alt="" height="100%" width="100%" />
                </div>
            )
        }

        if (dataState === 'loaded') {
            return (
                <div id="documentTest" className="doc-test">
                    <ResultTabs jsonResult={data} />
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dataState: state.documentTest.dataState,
        data: state.documentTest.data
    }
}

const mapDispatchToProps = (dispatch) => ({
    setAsBegin() {
        dispatch(setAsBegin())
    },
    setAsLoaded(data) {
        dispatch(setAsLoaded(data))
    },
    setAsLoading() {
        dispatch(setAsLoading())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DocumentTest);