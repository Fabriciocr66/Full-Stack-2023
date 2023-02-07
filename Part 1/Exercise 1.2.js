import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
     <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.a1} exercise={props.e1}/>
      <Part part={props.a2} exercise={props.e2}/>
      <Part part={props.a3} exercise={props.e3}/>
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
     <p>Number of exercises {props.a + props.b + props.c}</p>
    </div>
  )
}
const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
    <div>
      <Header course={course} />
      <Content a1={part1} e1={exercises1} a2={part2} e2={exercises2} a3={part3} e3={exercises3} />
      <Total a={exercises1} b={exercises2} c={exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))