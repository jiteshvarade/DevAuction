import React from 'react'
import axios from 'axios'
import { saveAs } from 'file-saver';
import SERVER_URL from '../../contants.mjs';

function Download() {
  const downloadFile = async () => {
    try {

      const response = await axios({
        url : `${SERVER_URL}//uploads/download`,
        method : "POST",
        responseType : "blob",
        data : {fileID : "1o4sDzcEHXsnG0Gvds0gs9-4iqO9rsEZ_"},
      });
      console.log(response)
      
      const filename = 'sourcecode.zip'

      try {

        saveAs(response.data, filename);
      } catch (error) {
        console.error('Error creating ZIP file:', error)
      }
      
    } catch (error) {
      console.error('Error downloading file:', error)
    }
  }

  return (
    <div>
      <button type="button" onClick={downloadFile} >Download</button>
    </div>
  );
}

export default Download;
