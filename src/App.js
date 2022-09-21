import './App.scss';
// import FirstResume from './Resumes/FirstResumeTemplate/FirstResume';
import ResumeWrapper from './ResumeWrapper';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';
import meta_data from './resumes.json'

function App() {

  const [index, setIndex] = useState(0)
  
  const handleNext = () => {
    if(index < meta_data?.length-1)
    setIndex(prev => prev+1)
  }

  const handleBefore = () => {
    if(index > 0)
    setIndex(prev => prev-1)
  }

  return (
    <div id="App" className='app'>
      <div className={`btn_bfr ${index === 0 ? 'hide' : ''}`}>
        <NavigateBeforeIcon className={index < 1 && 'hide' } color="primary" sx={{ fontSize: '70px' }} onClick={ handleBefore } />
      </div>
      <ResumeWrapper index={index} />
      <div className={`btn ${index === meta_data?.length - 1 ? 'hide' : ''}`}>
        <NavigateNextIcon color="primary" sx={{ fontSize: '70px' }} onClick={ handleNext } />
      </div>
    </div>
  );
}

export default App;
