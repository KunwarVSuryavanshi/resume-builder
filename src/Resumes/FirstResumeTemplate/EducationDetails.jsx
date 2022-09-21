import React, {useState} from 'react'
import { TextField } from '@mui/material'
import './style.scss'

function EducationDetails() {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

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
      {/* <span className='fromDate'>
        <label>From:</label>
        <input type="date" onBlur={handleBlur} pattern="\d{1,2}/\d{1,2}/\d{4}" />
      </span>
      <span className='toDate'>
        <label>To:</label>
        <input type="date" pattern="\d{1, 2}/\d{1, 2}/\d{4}"/>
      </span> */}
      <div className="date_container">
        <span className='fromDate'>
          <TextField
            hiddenLabel
            placeholder="Starting from"
            variant='filled'
            margin="normal"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            sx={{
              '& .MuiFilledInput-underline': {
                fontSize: '1rem',
                fontWeight: '400'
              },
              '& .MuiFilledInput-root': {
                padding: '0px'
              },
              marginTop: '-10px !important',
              maxWidth: from?.length > 12 ? `${from.length}ch` : '12ch'
            }}
          />
        </span>
        <span className='dash'>-</span>
        <span className='toDate'>
          <TextField
            hiddenLabel
            placeholder="Till"
            variant='filled'
            size='small'
            margin="normal"
            onChange={(e) => setTo(e.target.value)}
            sx={{
              '& .MuiFilledInput-underline': {
                fontSize: '1rem',
                fontWeight: '400'
              },
              marginTop: '-10px !important',
              maxWidth: to?.length > 12 ? `${to.length + 2}ch` : '14ch'
            }}
          />
        </span>
      </div>
    </div>
  )
}

export default EducationDetails