import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from "react-to-print";
import json from './resumes.json';

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
    import('./Resumes'+json?.[props?.index]?.path)
    .then((resp) => {
      setComponent(<resp.default printRef={ printRef } />)
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
        {/* <Suspense fallback='Resume Not Found'> */}
        {/* {renderResume()} */}
        {component}
        {/* </Suspense> */}
        <div style={styles.btn_container}>
              <Button variant='contained' onClick={handlePrint}>
                Print Resume to pdf
              </Button>
        </div>
      </div>
    </>
  )
}

export default ResumeWrapper