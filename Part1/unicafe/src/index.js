import React, { useState } from 'react'
import ReactDOM from 'react-dom'
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const handler = (state, setState) => () => setState(state + 1)


const Statistic = ({text, value}) => <p>{text} {value}</p>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad)/100
  const positive = (good*100)/all + "%"
  if(all > 0){
    return(
      <div>
          <table>
            <tbody>
            <Statistic text="Good" value={good} />
            <Statistic text="Neutral" value={neutral} />
            <Statistic text="Bad" value={bad} />
            <Statistic text="All" value={all}/>
            <Statistic text="Average" value={average}/>
            <Statistic text="Positive" value={positive}/>
            </tbody>
          </table>
      </div>
    )    
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
       <div>
        <h1>
          give feedback
        </h1>
        <Button onClick={handler(good, setGood)} text="Good"/>
        <Button onClick={handler(neutral,setNeutral)} text="Neutral"/>
        <Button onClick={handler(bad,setBad)} text="Bad"/>
        <h1>
          statistics
        </h1>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)