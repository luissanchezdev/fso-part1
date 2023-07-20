import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick} > {text} </button>
  )
}

const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
      setValue(newValue)
  }
  
  return (
    <div>
      {value}
      <Button 
        handleClick={() => setToValue(5)}
        text={'State to 5'}
      />
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 