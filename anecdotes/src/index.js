import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0])

  const randomAnecdote = () => {
    let randomPosition = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomPosition)
  }

  let numVotesMostVoted = Math.max(...votes)
  let mostVoted = 0
  console.log(numVotesMostVoted)

  for (let i = 0; i < votes.length; i++) {
    if (numVotesMostVoted === 0 ) {
      mostVoted = 0
    } else if (votes[i] === numVotesMostVoted) {
      mostVoted = i
    }
  }

  console.log(anecdotes[0])
  
  const increaseVoteAnecdote = () => {
    const incrementVoteByOne = votes[selected] + 1
    const newVotes = [...votes]
    newVotes[selected] = incrementVoteByOne
    setVotes(newVotes)
  }

  return (
    <>
      <div>
        <h2>Anecdote of the day</h2>
        {props.anecdotes[selected]}
        <p>position : {selected}</p>
        <p>has votes: {votes[selected]} </p>
        <button onClick = {randomAnecdote}>random anecdote</button>
        <button onClick= {increaseVoteAnecdote}>Vote</button>
      </div>
      <div>
        <h2>Anecdote with most votes</h2>
        <p>{anecdotes[mostVoted]}</p>
        <p>has votes: { votes[mostVoted] }</p>
      </div>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
)