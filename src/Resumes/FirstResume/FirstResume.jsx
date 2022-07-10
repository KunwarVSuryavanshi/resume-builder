import { Mail, Phone } from '@mui/icons-material'
import { Grid, TextField, ThemeProvider } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import {theme as TextFieldTheme} from './TextFieldTheme'


function FirstResume() {
  const [email, setEmail] = useState('')
  
  const headerContent = () => {
    return (
      <> 
        <Grid container >
              <Grid xs={8}>
                <TextField
                  hiddenLabel
                  id="userName"
                  placeholder="Enter your name here"
                  variant='filled'
                  size='medium'
                  margin="normal"
                  onBlur={handleOnBlur}
                  onClick={handleClick}
                  multiline={true}
                  sx={{
                    '& .MuiFilledInput-underline': {
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      width: '32vw',
                    }
                  }}
                />
              </Grid>
              <Grid xs={4}>
                <span style={{float: 'right'}}>
                  <TextField
                    hiddenLabel
                    id="userEmail"
                    placeholder="Email address"
                    variant='filled'
                    size='medium'
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{
                      minWidth: email.length > 22 ? `${email.length + 2}ch` : '22ch',
                      input: {
                        textAlign: 'end'
                      }
                    }}
                  />
                  <Mail style={{ paddingTop: '3vh'}} />
                </span>
                <span style={{float: 'right'}}>
                  <TextField
                    hiddenLabel
                    id="phoneNumber"
                    placeholder="Phone number"
                    variant='filled'
                    size='medium'
                    margin="normal"
                    sx={{
                      input: {
                        textAlign: 'end'
                      }
                    }}
                  />
                  <Phone style={{paddingTop: '3vh'}} />
                </span>
              </Grid>
        </Grid >
        <Grid container xs={12}>
          <TextField
            hiddenLabel
            id="summary"
            placeholder='Enter something about you / Summary / Vision'
            variant='filled'
            size='medium'
            margin="normal"
            fullWidth
            multiline
            sx={{
              '& .MuiFilledInput-underline': {
                fontSize: '1rem',
                fontWeight: 'semi-bold',
                // width: 'vw',
              }
            }}
          />
        </Grid>
      </>
    )
  }

  const handleOnBlur = (e) => {
    console.log("On blur called", e.target.value)
  }

  const handleClick = (e) => {
    console.log("Handle click being called", e)
  }

  return (
    <ThemeProvider theme={TextFieldTheme}>
      <div className='body'>
        <Container>
          <Grid container>
            {headerContent()}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default FirstResume