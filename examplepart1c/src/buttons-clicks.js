import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const History = ({ allClicks }) => 
  allClicks.length === 0 ? 
  (
    <div>
        <p>The app is used by pressing the buttons</p>
    </div>
  )
  :
  (
    <div>
        <p>button press history: {allClicks.join(' ')}</p>
    </div>
  )


const Button = ( { handleClick, buttonText } ) => {
  return (
    <button onClick = { handleClick }>
        {buttonText}
    </button>
  )
}

const App = () => {
  const [ valuesButtons, setValuesButtons ] = useState({
    left: 0,
    right: 0
  })

  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    const newClicks = {
      ...valuesButtons,
      left: valuesButtons.left + 1
    }

    setAllClicks(allClicks.concat('L'))

    setValuesButtons(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = {
      ...valuesButtons,
      right: valuesButtons.right + 1
    }

    setAllClicks(allClicks.concat('R'))

    setValuesButtons(newClicks)
  }

  return (
    <>
      <div>
        {valuesButtons.left}
        <Button 
          handleClick={handleLeftClick}
          buttonText={'Plus left'}
        />
      </div>
      <div>
        {valuesButtons.right}
        <Button 
          handleClick={handleRightClick}
          buttonText={'Plus right'}
        />
      </div>
      <History 
        allClicks={ allClicks }
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