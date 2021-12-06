import React, { useState } from 'react';

import {Container, PdfContainer, UploadBtn, Error} from './Styles'

// Import the main component
import { Viewer } from '@react-pdf-viewer/core'; // install this library
// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout'; // install this library
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// Worker
import { Worker } from '@react-pdf-viewer/core'; // install this library


function App() {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const [pdfFile, setPdfFile] = useState(null)
  const [pdfFileError, setPdfFileError] = useState('')
  const [viewPdf, setViewPdf] = useState(null)

  const fileType=['application/pdf']


  const handlePdfFileChange=(e) =>{
    let selectedFile=e.target.files[0];
    if(selectedFile){
      if(selectedFile&&fileType.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile)
        reader.onloadend = (e) =>{
          setPdfFile(e.target.result)
          setPdfFileError('')
        }
      }
      else{
        setPdfFile(null)
        setPdfFileError('Por favor selecione um arquivo pdf')
      }
    }
  }

  const handlePdfFileSubmit=(e)=>{
    e.preventDefault()
    if(pdfFile!==null){
      setViewPdf(pdfFile)
      
    }
    else{
      setViewPdf(null)
    }
  }
  return (
   <Container>
     <form onSubmit={handlePdfFileSubmit}>
       <input type="file" 
       required onChange={handlePdfFileChange} 
       />
       {pdfFileError&&<Error>{pdfFileError}</Error>}
       <br></br>
       <UploadBtn type='submit'>UPLOAD</UploadBtn>
     </form>
     <br></br>
     <h4>View PDF</h4>
     <PdfContainer>
{/* show pdf conditionally (if we have one)  */}
        {viewPdf&&<><Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
          <Viewer fileUrl={viewPdf}
            plugins={[defaultLayoutPluginInstance]} />
      </Worker></>}

      {/* if we dont have pdf or viewPdf state is null */}
      {!viewPdf&&<>No pdf file selected</>}
     </PdfContainer>
   </Container> 
  )
}

export default App;
