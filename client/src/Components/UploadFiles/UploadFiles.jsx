import React, { useState } from 'react'
import axios from 'axios'
import SERVER_URL from '../../contants.mjs'

function UploadFiles() {
  
  const [file, setFile] = useState()
  const upload = () => {
    const formData = new FormData()
    formData.append('file', file)
    axios.post(`${SERVER_URL}/uploads`, formData)
      .then(response => {console.log(response)})
      .catch(error => console.log(error))
  }

  return (
    <div>
      <input type="file" onChange={(e)=> setFile(e.target.files[0])} />
      <button type="button" onClick={upload} >Upload</button>
    </div>
  );
}

export default UploadFiles;
