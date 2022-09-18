// using certain file or object {JSON file probably} which will have location of the resume

import ReactToPDF from '@kunwarji/react-to-pdf';
import { Button } from '@mui/material';
import React, { useRef } from 'react'
import FirstResume from './Resumes/FirstResumeTemplate/FirstResume'
import { useReactToPrint } from "react-to-print";

const styles = {
  btn_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',
  }
}

function ResumeWrapper() {
  const printRef = useRef();

  const handleAfterPrint = () => {
    console.log("`onAfterPrint` called"); 
  }

  const handleBeforePrint = () => {
    console.log("`onBeforePrint` called"); 
  }

  const reactToPrintContent = () => {
    return printRef.current;
  }

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true
  });

  return (
    <>
      <div>
        <FirstResume printRef={printRef} />
      </div>
      <div style={styles.btn_container}>
        {/* <ReactToPDF element={printRef} scale={0.5}>
          {(toPdf) => ( */}
            <Button variant='contained' onClick={handlePrint}>
              Print Resume to pdf
            </Button>
          {/* )}
        </ReactToPDF> */}
      </div>
    </>
  )
}

export default ResumeWrapper