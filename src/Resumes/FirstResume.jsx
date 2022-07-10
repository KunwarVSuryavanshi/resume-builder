import { Input, TextField } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function FirstResume() {

  const handleOnBlur = (e) => {
    console.log("Oon blur called", e.target.value)
  }

  const handleClick = (e) => {
    console.log("Handle click being called", e)
  }
  return (
    <div className='body'>
      <Container>
        <div className='header'>
          <TextField
            hiddenLabel
            id="userName"
            placeholder="Enter your name here."
            variant='filled'
            size='medium'
            margin="normal"
            onBlur={handleOnBlur}
            onClick={handleClick}
          />
          {/* <Input
            id="userName"
            placeholder='Enter your name.'
            shrink={true}
            margin="normal"
            InputLabelProps={onClick: console.log("Hello")}
          /> */}
        </div>
      </Container>
    </div>
  )
}

export default FirstResume