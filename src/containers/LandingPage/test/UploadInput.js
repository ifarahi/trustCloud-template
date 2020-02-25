import React, {useCallback} from 'react';
// import {useDropzone} from 'react-dropzone';
import axios from 'axios';
 
function MyDropzone(params) {

    const state = {
        processing: 0
    }

    const requestObject = {
        features: 
        ["DETECT_ALL"],
        documents: []
    }

    const onDrop = useCallback(acceptedFiles => {
        const filereader = new FileReader();
        const setError = params;
        
        filereader.onload = (e) => {
            const img = new Image();

            img.onload = () => {
                const format = e.target.result.split(':')[1].split('/')[1].split(';')[0];
                const base64 = e.target.result;
                
                // console.log(base64);
                const doc = {
                    base64DocumentString: base64,
                    fileFormat: format,
                    pageIndex: 1,
                    lightingMode: "WHITE_FULL"
                }
                requestObject.documents.push(doc);
                axios.post('https://cors-anywhere.herokuapp.com/api.caronaesystems.com/v1/Documents/Identity:Recognize', requestObject)
                    .then((response) => console.log(response))
                    .catch((error) => console.log(error))
            }

            img.onerror = () => {
                const setError = params.error;
                setError('Please upload a valid image');
            }

            img.src = e.target.result;

        }

        filereader.readAsDataURL(acceptedFiles[0]);
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    
    return (
        <div {...getRootProps()}>
        <input {...getInputProps()} />
        {
            isDragActive ?
            <img id="test-upload" src="./images/upload.png" alt="" height="100%" width="100%" /> :
                <img src="./img/loading.svg" alt="" height="100%" width="100%" />

        }
        </div>
      )
}

export default MyDropzone;