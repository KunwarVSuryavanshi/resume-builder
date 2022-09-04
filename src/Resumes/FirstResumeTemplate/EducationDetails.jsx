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
        size='small'
        margin="normal"
        fullWidth
        sx={{
          '& .MuiFilledInput-underline': {
            fontWeight: 500,
            fontSize: '1.4rem'
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
            fontSize: '1.25rem',
            fontWeight: '400',
          },
          marginTop: '-10px !important'
        }}
      />
      <span className='fromDate'>
        <label>From:</label>
        <input type="date" onBlur={handleBlur} pattern="\d{1,2}/\d{1,2}/\d{4}" />
      </span>
      <span className='toDate'>
        <label>To:</label>
        <input type="date" pattern="\d{1, 2}/\d{1, 2}/\d{4}"/>
      </span>
    </div>
  )
}

export default EducationDetails