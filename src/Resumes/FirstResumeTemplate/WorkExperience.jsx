import { Checkbox, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react'

function WorkExperience(props) {

  const [present, setPresent] = useState(false)
  const [togglePresent, setTogglePresent] = useState(false)
  
  const handleBlur = (e) => {
    /*
      e.target ===> origin of event
      e.currentTarget ===> event attached to the element.
      e.relatedTarget ===> secondary related target...for example for onBlur there will be second target.
    */
    if (!e?.relatedTarget) {
      // console.log("HANDLE BLUR", e.target, e.relatedTarget, e.currentTarget)
      setTogglePresent(true)
    }
  }

  const handleClick = () => {
    setTogglePresent(false)
  }

  // useEffect(() => {
  //   return () => {
  //     console.log("Calling method2", togglePresent)
  //     setTogglePresent(true)
  //   }
  // }, [])


  return (
    <div className='educationDetails' onClick={handleClick} onBlur={handleBlur}>
      < TextField
        hiddenLabel
        placeholder="Title/Position"
        variant='filled'
        size='medium'
        margin="normal"
        fullWidth
        sx={{
          '& .MuiFilledInput-underline': {
            fontSize: '1rem',
            fontWeight: 'semi-bold',
          }
        }
        }
      // onClick={handleClick}
      // onBlur={handleOnBlur}
      />
      <TextField
        hiddenLabel
        placeholder="Workplace/Company"
        variant='filled'
        size='medium'
        margin="normal"
        fullWidth
        sx={{
          '& .MuiFilledInput-underline': {
            fontSize: '1rem',
            fontWeight: 'semi-bold',
          }
        }}
      />
      <span className='fromDate'>
        <label>From:</label>
        <input type="date" />
      </span>
      <span className='toDate'>
        {!present ?
          <>
            <label>To:</label>
            <input type="date" />
          </>
          :
          <label>Present</label>
        }
        {!togglePresent &&
          <>
            <Checkbox
              checked={present}
              onChange={() => setPresent(!present)}
              onBlur={handleBlur}
            />
            <label>Present</label>
          </>
        }

      </span>
    </div>
  )
}

export default WorkExperience