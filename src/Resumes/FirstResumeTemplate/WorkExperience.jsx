import { Checkbox, TextField } from '@mui/material'
import React, { useState } from 'react'

function WorkExperience() {

  const [present, setPresent] = useState(false)
  const [togglePresent, setTogglePresent] = useState(false)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

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
        placeholder="Workplace/Company"
        variant='filled'
        size='medium'
        margin="normal"
        fullWidth
        sx={{
          '& .MuiFilledInput-underline': {
            fontSize: '1.25rem',
            fontWeight: '400'
          },
          marginTop: '-10px !important'
        }}
      />
      <div className="date_container">
        <span className='fromDate'>
          <TextField
            hiddenLabel
            placeholder="From"
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
          {!present ?
            <TextField
              hiddenLabel
              placeholder="To"
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
                maxWidth: to?.length > 12 ? `${to.length +2}ch` : '14ch'
              }}
            />
            :
            <label style={{ paddingBottom: '10px', marginTop: '-10px !important'}}>Present</label>
          }
          {/* {!togglePresent && to?.length < 1 &&
            <>
              <Checkbox
                checked={present}
                onChange={() => setPresent(!present)}
                onBlur={handleBlur}
                sx={{
                  paddingTop: '0 !important',
                  
                }}
                size="small"
              />
              <label>Present</label>
            </>
          } */}

        </span>
      </div>
    </div>
  )
}

export default WorkExperience