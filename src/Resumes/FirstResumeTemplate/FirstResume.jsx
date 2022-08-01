import { Mail, Phone, PlaylistAdd } from '@mui/icons-material'
import { Chip, Grid, TextField, ThemeProvider } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import {theme as TextFieldTheme} from './TextFieldTheme'
import './style.scss'
import EducationDetails from './EducationDetails'
import WorkExperience from './WorkExperience'

function FirstResume() {
  
  const [email, setEmail] = useState('')
  const [toggleEduRow, setToggleEduRow] = useState(false)
  const [details, setDetails] = useState([<EducationDetails/>])
  const[toggleExpRow, setToggleExpRow] = useState(false)
  const [workExp, setWorkExp] = useState([<WorkExperience />])
  const [skill, setSkill] = useState([])
  const [skillInp, setSkillInp] = useState('')
  const [skillToggle, setSkillToggle] = useState(true)

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

  const handleBlur = (e, region) => {
    e.preventDefault()
    if(e.currentTarget.contains(e.relatedTarget)) return
    // console.log("On blur called", e.currentTarget, e.target, e.relatedTarget)
    switch (region) {
      case 'edu':
        setToggleEduRow(false)
        break;
      case 'exp':
        setToggleExpRow(false)
        break;
      case 'skill':
        setSkillToggle(false)
        break;
      default:
        return;
    }
  }

  const handleClick = (region) => {
    // e.preventDefault()
    switch (region) {
      case 'edu':
        setToggleEduRow(true)
        break;
      case 'exp':
        setToggleExpRow(true)
        break;
      case 'skill':
        setSkillToggle(true)
        break;
      default:
        return;
    }
  }

  const handleSkills = (values) => {
    setSkillInp(values)
    setSkill(values.split(',').map(item => item.trim()).filter(item => item.length > 0))
  }

  const addNewRow = (region) => {
    switch (region){
      case 'edu':
        setDetails([...details, <EducationDetails />])
        break;
      case 'exp':
        setWorkExp([...workExp, <WorkExperience />])
        break;
      default:
        return;
    }
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
                <div tabIndex={1} id='detailsDiv' className="item1_container_1_details" onClick={() => handleClick('edu')} onBlur={(e) => handleBlur(e, 'edu')}>
                  {details.map(item => item)}
                  {toggleEduRow && <PlaylistAdd className='addbtn' onClick={() => addNewRow('edu') } />}
                </div>
              </div>
              <div className="item1_container_2">
                <div className="item1_container_1_ed">Work Experience</div>
                <div tabIndex={1} id='detailsDiv' className="item1_container_1_details" onClick={() => handleClick('exp')} onBlur={(e) => handleBlur(e, 'exp')}>
                  {workExp.map(item => item)}
                  {toggleExpRow && <PlaylistAdd className='addbtn' onClick={() => addNewRow('exp')} />}
                </div>
              </div>
            </div>
            <div className="item2_container">
              <div className="item2_container_1" onBlur={(e) => handleBlur(e, 'skill')} onClick={() => handleClick('skill')}>
                <div className="item2_container_1_skill">
                  Skills
                </div>
                <div tabIndex={'1'} className="item2_container_1_skillCont" >
                  {skill?.length > 0 && skill.map(item => <span style={{margin: '0.5vw 0.2vw', display: 'inline-block'}}><Chip label={item} color='info' /></span>)}
                  <div style={{ minHeight: '40px' }}>
                    {skillToggle &&
                      <TextField
                        hiddenLabel
                        placeholder='Enter skills here'
                        variant='filled'
                        value={skillInp}
                        size='medium'
                        margin="normal"
                        fullWidth
                        multiline
                        sx={{
                          '& .MuiFilledInput-underline': {
                            fontSize: '1rem',
                            fontWeight: 'semi-bold',
                          }
                        }}
                        onChange={(e) => handleSkills(e.target.value)}
                      />}
                  </div>
                </div>
              </div>
              <div className="item2_container_2">
                
              </div>
              <div className="item2_container_3">

              </div>
              <div className="item2_container_4">

              </div>
              <div className="item2_container_5">

              </div>
              <div className="item2_container_6">

              </div>
            </div>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default FirstResume