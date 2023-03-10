import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)
const App = (props) => { 
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState( new Uint8Array(anecdotes.length))
  const a = (min, max) => {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
  }
  const voting = () => {
    const copy = [...votes]
    copy[selected] = copy[selected] + 1
    setVotes(copy)
    console.log(copy)
  }
  const maxval = (Uint8Array ) =>{
    const highest = Math.max(...Uint8Array);
    return votes.indexOf(highest)
  }

  console.log(a);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]}</p>
      <Button handleClick={() => setSelected(a(0,anecdotes.length))} text="next anecdote" />
      <Button handleClick={voting} text="vote"/>
      <h1>anecdote with most votes is</h1>
      <p>{props.anecdotes[maxval(votes)]}</p>
      <p>Max votes is {maxval(votes)}</p>
    </div>
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

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)