import { Mail, Phone, PlaylistAdd } from '@mui/icons-material'
import { Grid, TextField, ThemeProvider, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import {theme as TextFieldTheme} from './TextFieldTheme'
import './style.scss'

function FirstResume() {
  const [email, setEmail] = useState('')
  const [toggleRow, setToggleRow] = useState(false)

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
    setToggleRow(false)
  }

  const handleClick = (e) => {
    console.log("Handle click being called", e)
    setToggleRow(true)
  }

  const addNewRow = () => {
    console.log("NEW ROW CALLED")
  }

  return (
    <ThemeProvider theme={TextFieldTheme}>
      <div className='body'>
        <Container style={{margin: 'auto'}}>
          <Grid container>
            {headerContent()}
          </Grid>
          <div className='flex-container'>
            <div className="item1_container">
              <div className="item1_container_1">
                <div className="item1_container_1_ed">Education</div>
                <div className="item1_container_1_details">
                  <TextField
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
                    }}
                    onClick={handleClick}
                    onBlur={handleOnBlur}
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
                    onClick={handleClick}
                    onBlur={handleOnBlur}
                  />
                </div>
                {toggleRow && <PlaylistAdd onClick={ addNewRow} />}
              </div>
              <div className="item1_container_2">

              </div>
            </div>
            <div className="item2_container">
              <div className="item2_container_1">
                <TextField
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
                  }}
                  onClick={handleClick}
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
                  onClick={handleClick}
                />
              </div>
              <div className="item2_container_2"></div>
            </div>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default FirstResume