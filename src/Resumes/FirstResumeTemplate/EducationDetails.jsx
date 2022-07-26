import React from 'react'
import { TextField } from '@mui/material'
import './style.scss'

function EducationDetails() {

  const handleBlur = () => {
    console.log("HANDLE BLUR")
  }

  return (
    <div className='educationDetails'>
      < TextField
        hiddenLabel
        placeholder="Program Name"
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
        placeholder="School / Institute name"
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
        <input type="date" onBlur={handleBlur}/>
      </span>
      <span className='toDate'>
        <label>To:</label>
        <input type="date" />
      </span>
    </div>
  )
}

export default EducationDetails