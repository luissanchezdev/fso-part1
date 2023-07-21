import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick }> {text} </button>
  )
}

const StatisticsLine = ({ text, value}) => {
  return (
    <tr>
      <td>{`${text}:`}</td>
      <td>{`${value}`}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad, total, average, positive}) => {
  if (total > 0) {
    return (
      <>
        <StatisticsLine 
          text={'good'}
          value={good}
        />
        <StatisticsLine 
          text={'neutral'}
          value={neutral}
        />
        <StatisticsLine 
          text={'bad'}
          value={bad}
        />
        <StatisticsLine 
          text={'total'}
          value={total}
        />
        <StatisticsLine 
          text={'average'}
          value={average}
        />
        <StatisticsLine 
          text={'positive'}
          value={positive}
        />
      </>
    )
  } else {
    return (
      <tr>
        <td>No feedback given</td>
      </tr>
    )
  }
}

const App = () => {
  const [valueGoodButton, setValueGoodButton] = useState(0)
  const [valueNeutralButton, setValueNeutralButton] = useState(0)
  const [valueBadButton, setValueBadButton] = useState(0)
  
  
  const handleGoodButton = () => {
    return setValueGoodButton(valueGoodButton + 1)
  }

  const handleNeutralButton = () => {
    setValueNeutralButton(valueNeutralButton + 1)
  }
  
  const handleBadButton = () => {
    setValueBadButton(valueBadButton + 1)
  }

  let total = valueGoodButton + valueNeutralButton + valueBadButton
  let average = total > 0 ? (1*valueGoodButton + 0*valueNeutralButton - 1*valueBadButton)/total : 0
  let positive = valueGoodButton > 0 ? (valueGoodButton * 100) / total : 0


  return (
    <>
      <h1>give feedback</h1>
      <Button 
        handleClick={handleGoodButton}
        text={'good'}
      />
      <Button 
        handleClick={handleNeutralButton}
        text={'neutral'}
      />
      <Button 
        handleClick={handleBadButton}
        text={'bad'}
      />
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statistics 
          good={valueGoodButton}
          neutral={valueNeutralButton}
          bad={valueBadButton}
          total={total}
          average={average}
          positive={positive}
          />
        </tbody>
      </table>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
