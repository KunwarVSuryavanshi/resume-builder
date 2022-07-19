import React from 'react'
import { TextField } from '@mui/material'

function EducationDetails() {
  return (
    <div>
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
    </div>
  )
}

export default EducationDetails