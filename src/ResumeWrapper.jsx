// using certain file or object {JSON file probably} which will have location of the resume

import ReactToPDF from '@kunwarji/react-to-pdf';
import { Button } from '@mui/material';
import React, { useRef } from 'react'
import FirstResume from './Resumes/FirstResumeTemplate/FirstResume'

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
  return (
    <>
      <div>
        <FirstResume printRef={printRef} />
      </div>
      <div style={styles.btn_container}>
        <ReactToPDF element={printRef} scale={0.5} fileName='Resume'>
          {(toPdf) => (
            <Button variant='contained' onClick={toPdf}>
              Print Resume to pdf
            </Button>
          )}
        </ReactToPDF>
      </div>
    </>
  )
}

export default ResumeWrapper