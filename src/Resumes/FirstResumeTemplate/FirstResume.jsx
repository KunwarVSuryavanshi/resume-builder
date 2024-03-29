import { PlaylistAdd } from '@mui/icons-material'
import { Chip, Grid, TextField, ThemeProvider } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { theme as TextFieldTheme } from './TextFieldTheme'
import './style.scss'
import EducationDetails from './EducationDetails'
import WorkExperience from './WorkExperience'
import mail from '../../assets/mail_black_24dp.svg'
import phone from '../../assets/phone_black_24dp.svg'
import { useDispatch, useSelector } from 'react-redux'
import addDetails from '../../Redux/Actions/AddHeader.action'

function FirstResume(props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [skillInp, setSkillInp] = useState('');
  const [skill, setSkill] = useState([]);
  const [awardsInp, setAwardsInp] = useState('');
  const [awards, setAwards] = useState([]);
  const [projInp, setProjInp] = useState('');
  const [personalProj, setPersonalProj] = useState([]);

  const [toggleEduRow, setToggleEduRow] = useState(false)
  const [details, setDetails] = useState([<EducationDetails />])
  const [toggleExpRow, setToggleExpRow] = useState(false)
  const [workExp, setWorkExp] = useState([<WorkExperience />])
  const [skillToggle, setSkillToggle] = useState(true)
  const [awardsToggle, setAwardsToggle] = useState(true)
  const [projToggle, setProjToggle] = useState(true)

  const dispatch = useDispatch();
  const headerData = useSelector(state => state) // Single reducer so direct header...otherwise reducer.state

  const headerContent = () => {
    return (
      <>
        <Grid container className='top_header'>
          <Grid xs={8}>
            <TextField
              hiddenLabel
              id="userName"
              placeholder="Enter your name here"
              variant='filled'
              size='medium'
              margin="normal"
              value={name}
              multiline={true}
              sx={{
                '& .MuiFilledInput-underline': {
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  width: '32vw',
                }
              }}
              onChange={(e) => {
                setName(e.target.value);
                dispatch(addDetails('BASIC', { name: e.target.value }));
              }}
            />
          </Grid>
          <Grid xs={4}>
            <span className='flex_default' style={{ float: 'right' }}>
              <TextField
                hiddenLabel
                id="userEmail"
                placeholder="Email address"
                variant='filled'
                size='medium'
                margin="normal"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  dispatch(addDetails('BASIC', { email: e.target.value }));
                }}
                sx={{
                  minWidth: email.length > 22 ? `${email.length + 2}ch` : '22ch',
                  input: {
                    textAlign: 'end',
                    fontWeight: 600
                  }
                }}
              />
              <img src={mail} alt="" />
            </span>
            <span className='flex_default' style={{ float: 'right' }}>
              <TextField
                hiddenLabel
                id="phoneNumber"
                placeholder="Phone number"
                variant='filled'
                size='medium'
                margin="normal"
                sx={{
                  input: {
                    textAlign: 'end',
                    fontWeight: 600
                  }
                }}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  dispatch(addDetails('BASIC', { phone: e.target.value }));
                }}
              />
              <img src={phone} alt="" />
            </span>
          </Grid>
        </Grid >
        <Grid container xs={12} style={{ marginTop: '20px' }}>
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
                fontSize: '1.15rem',
                fontWeight: '500',
                fontStyle: 'italic',
                textArea: {
                  textAlign: 'center'
                }
                // width: 'vw',
              },
            }}
            value={summary}
            onChange={(e) => {
              setSummary(e.target.value);
              dispatch(addDetails('BASIC', { summary: e.target.value }));
            }}
          />
        </Grid>
      </>
    )
  }

  const handleBlur = (e, region) => {
    // e.preventDefault()
    if (e.currentTarget.contains(e.relatedTarget)) return
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
      case 'award':
        setAwardsToggle(false)
        break;
      case 'proj':
        setProjToggle(false)
        break;
      default:
        return;
    }
  }

  const handleClick = (region) => {
    // e.preventDefault()
    // console.log("Click triggered")
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
      case 'award':
        setAwardsToggle(true)
        break;
      case 'proj':
        setProjToggle(true)
        break;
      default:
        return;
    }
  }

  const handleInput = (reg, values) => {
    let temp;
    switch (reg) {
      case 'skill':
        temp = values.split(',').map(item => item.trim()).filter(item => item.length > 0);
        setSkillInp(values);
        setSkill(temp);
        dispatch(addDetails('SKILLS', [values, temp]));
        break;
      case 'awards':
        temp = values.split(';').filter(item => item.length > 0);
        setAwardsInp(values);
        setAwards(temp);
        dispatch(addDetails('AWARDS', [values, temp]));
        break;
      case 'proj':
        temp = values.split(';').filter(item => item.length > 0)
        setProjInp(values);
        setPersonalProj(temp);
        dispatch(addDetails('PERSONAL_PROJECTS', [values, temp]))
        break;
      default:
        return
    }
  }

  const addNewRow = (region) => {
    switch (region) {
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

  useEffect(() => {
    console.log("header data", headerData);
  }, [headerData])
  
  return (
    <ThemeProvider theme={TextFieldTheme}>
      <div className='body'>
        <Container className="container" style={{ margin: 'auto', maxWidth: '8.5in', maxHeight: '11.23in' }} ref={props.printRef}>
          <div>
            <Grid container>
              {headerContent()}
            </Grid>
            <div className='flex-container'>
              <div className="item1_container">
                <div className="item1_container_1">
                  <div className="item1_container_1_ed">EDUCATION</div>
                  <div tabIndex={1} id='detailsDiv' className="item1_container_1_details" onClick={() => handleClick('edu')} onBlur={(e) => handleBlur(e, 'edu')}>
                    {details.map(item => item)}
                    {toggleEduRow && <PlaylistAdd className='addbtn' onClick={() => addNewRow('edu')} />}
                  </div>
                </div>
                <div className="item1_container_2">
                  <div className="item1_container_1_ed workExp">WORK EXPERIENCE</div>
                  <div tabIndex={1} id='detailsDiv' className="item1_container_1_details" onClick={() => handleClick('exp')} onBlur={(e) => handleBlur(e, 'exp')}>
                    {workExp.map(item => item)}
                    {toggleExpRow && <PlaylistAdd className='addbtn' onClick={() => addNewRow('exp')} />}
                  </div>
                </div>
              </div>
              <div className="item2_container">
                <div tabIndex={'1'} className="item2_container_1" onBlur={(e) => handleBlur(e, 'skill')} onClick={() => handleClick('skill')}>
                  <div className="item2_container_1_header">
                    SKILLS
                  </div>
                  <div className="item2_container_1_skillCont" >
                    {skill?.length > 0 && skill.map(item => <span style={{ margin: '0.5vw 0.2vw', display: 'inline-block' }}><Chip label={item} color='info' /></span>)}
                    <div>
                      {skillToggle &&
                        <TextField
                          hiddenLabel
                          placeholder={`Enter skills here, each skill separated by comma (",")`}
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
                          onChange={(e) => handleInput('skill', e.target.value)}
                        />}
                    </div>
                  </div>
                </div>
                <div tabIndex={'2'} className="item2_container_2" onBlur={(e) => handleBlur(e, 'award')} onClick={() => handleClick('award')}>
                  <div className="item2_container_2_header">
                    HONOURS AND AWARDS
                  </div>
                  <div className="item2_container_2_body">
                    {awards?.length > 0 &&
                      <ul>
                        {
                          awards.map(item => <li>{item}</li>)
                        }
                      </ul>
                    }
                    <div>
                      {awardsToggle && <TextField
                        hiddenLabel
                        placeholder='Enter honors and awards here each separated by semicolon (";")'
                        variant='filled'
                        value={awardsInp}
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
                        onChange={(e) => handleInput('awards', e.target.value)}
                      />}
                    </div>
                  </div>
                </div>
                <div tabIndex={'3'} lang='en' className="item2_container_3" onBlur={(e) => handleBlur(e, 'proj')} onClick={() => handleClick('proj')}>
                  <div className="item2_container_3_header">
                    PERSONAL PROJECTS
                  </div>
                  <div className="item2_container_3_body">
                    {personalProj?.length > 0 &&
                      <ul>
                        {
                          personalProj.map(item => <li>{item}</li>)
                        }
                      </ul>
                    }
                    <div>
                      {projToggle && <TextField
                        hiddenLabel
                        placeholder='Enter personal projects here each separated by semicolon (";")'
                        variant='filled'
                        value={projInp}
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
                        onChange={(e) => handleInput('proj', e.target.value)}
                      />}
                    </div>
                  </div>
                </div>
                {/* <div className="item2_container_4">

              </div>
              <div className="item2_container_5">

              </div> */}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default FirstResume;