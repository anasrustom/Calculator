import React from 'react'
import './index.css';
import { ACTIONS } from './App';

export default function Buttons(props) {


  return (
    <div className='Buttons'>  
          <div className='buttonGray' id='clear' onClick={()=>props.dispatch({ type: ACTIONS.CLEAR })}>AC</div>
          <div className='buttonGray' id='plusminus' onClick={()=>props.dispatch({ type: ACTIONS.PLUSMINUS })}>±</div>
          <div className='buttonGray' id='percentage' onClick={()=>props.dispatch({ type: ACTIONS.PERCENT })}>%</div>
          <div className='buttonOP' id='divide' onClick={()=>props.dispatch({ type: ACTIONS.OPERATION, payload: '÷' })}>÷</div>
          <div className='button' id='seven' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: 7 })}>7</div>
          <div className='button' id='eight' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: 8 })}>8</div>
          <div className='button' id='nine' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: 9 })}>9</div>
          <div className='buttonOP' id='multiply' onClick={()=>props.dispatch({ type: ACTIONS.OPERATION, payload: '·' })}>×</div>
          <div className='button' id='four' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: 4 })}>4</div>
          <div className='button' id='five' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: 5 })}>5</div>
          <div className='button' id='six' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: 6 })}>6</div>
          <div className='buttonOP' id='subtract' onClick={()=>props.dispatch({ type: ACTIONS.OPERATION, payload: '-' })}>-</div>
          <div className='button' id='one' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: 1 })}>1</div>
          <div className='button' id='two' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: 2 })}>2</div>
          <div className='button' id='three' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: 3 })}>3</div>
          <div className='buttonOP' id='add' onClick={()=>props.dispatch({ type: ACTIONS.OPERATION, payload: '+' })}>+</div>
          <div className='button' id='zero' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: 0 })}>0</div>
          <div className='button' id='answer' onClick={()=>props.dispatch({ type: ACTIONS.ANS })}>ans</div>
          <div className='button' id='decimal' onClick={()=>props.dispatch({ type: ACTIONS.ADD_DIGIT, payload: '.' })}>.</div>
          <div className='buttonOP' id='equals' onClick={()=>props.dispatch({ type: ACTIONS.EQUALS })}>=</div>
    </div>
  )
}
