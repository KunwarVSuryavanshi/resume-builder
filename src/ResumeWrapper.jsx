// using certain file or object {JSON file probably} which will have location of the resume

import ReactToPDF from '@kunwarji/react-to-pdf';
import { Button } from '@mui/material';
import React, { Suspense, useEffect, useRef, useState } from 'react'
import FirstResumes from './Resumes/FirstResumeTemplate/FirstResume'
import { useReactToPrint } from "react-to-print";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import json from './resumes.json';
import FirstResume from './Resumes/FirstResumeTemplate/FirstResume';

const styles = {
  btn_container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '40px',
  }
}

function ResumeWrapper(props) {
  const printRef = useRef();
  const [component, setComponent] = useState();
  const [comp, setComp] = useState(<FirstResume/>)

  const handleAfterPrint = () => {
    console.log("`onAfterPrint` called"); 
  }

  const handleBeforePrint = () => {
    console.log("`onBeforePrint` called"); 
  }

  const reactToPrintContent = () => {
    return printRef.current;
  }

  const renderResume = () => {
    // setLoading(true)
    import('./Resumes'+json?.[props?.index]?.path)
    // import('./Resumes/FirstResumeTemplate/FirstResume')
    .then((resp) => {
      setComponent(<resp.default/>)
    })
  }

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: "AwesomeFileName",
    onBeforePrint: handleBeforePrint,
    onAfterPrint: handleAfterPrint,
    removeAfterPrint: true
  });

  useEffect(() => {
    renderResume()
  }, [props.index])

  return (
    <>
      <div>
        {/* <div>
          <FirstResumes printRef={printRef} />
        </div> */}
        {/* <div style={styles.btn_container}> */}
          {/* <ReactToPDF element={printRef} scale={0.5}>
            {(toPdf) => ( */}
              {/* <Button variant='contained' onClick={handlePrint}> */}
                {/* Print Resume to pdf */}
              {/* </Button> */}
            {/* )}
          </ReactToPDF> */}
        {/* </div> */}
        {/* <Suspense fallback='Resume Not Found'> */}
        {/* {renderResume()} */}
        {component}
        {/* </Suspense> */}
      </div>
    </>
  )
}

export default ResumeWrapper