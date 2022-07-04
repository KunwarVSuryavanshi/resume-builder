import './App.css';
import ReactToPDF from '@kunwarji/react-to-pdf'
import { useRef } from 'react'

function App() {
  const refVar = useRef()
  return (
    <div>
      <ReactToPDF element={refVar} scale={1}>
        {(toPdf) => (
          <button type="button" onClick={toPdf}>
            Click me
          </button>
        )
        }
      </ReactToPDF>
      <div ref={refVar}>
        Something inside APP.js
      </div>
    </div>
  );
}

export default App;
