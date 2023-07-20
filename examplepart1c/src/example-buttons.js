import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Display = ( { counter } ) => <p>{ counter }</p>

const Button = ({ buttonName, handleClick }) => 
    <button onClick={() => handleClick()}>
      { buttonName }
    </button>

const App = () => {
  const [counter, setCounter] =useState(0)
  const incrementByOne = () => setCounter( counter + 1 )
  const decreaseByOne = () => setCounter( counter - 1 )
  const setToZero = () => setCounter( 0 )

  return (
    <>
      <Button 
        handleClick={ incrementByOne }
        buttonName={ 'Plus' }
      />
      <Display 
        counter = {counter}
      />
      <Button 
        handleClick={ decreaseByOne }
        buttonName={ 'Minus'}
      />
      <Button 
        handleClick={ setToZero }
        buttonName={ 'Reset' }      
      />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 