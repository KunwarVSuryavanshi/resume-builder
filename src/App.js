import './App.css';
// import FirstResume from './Resumes/FirstResumeTemplate/FirstResume';
import ResumeWrapper from './ResumeWrapper';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from 'react';

function App() {

  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex(prev => prev+1)
  }

  const handleBefore = () => {
    setIndex(prev => prev-1)
  }

  return (
    <div id="App" className='app'>
      <NavigateBeforeIcon color="primary" sx={{ fontSize: '70px' }} onClick={ handleBefore } />
      <ResumeWrapper index={ index } />
      <NavigateNextIcon color="primary" sx={{ fontSize: '70px' }} onClick={ handleNext } />
    </div>
  );
}

export default App;
