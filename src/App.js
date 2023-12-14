import './index.css';
import Buttons from './Buttons';
import Display from './Display';
import React, { useReducer, useEffect } from 'react'

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  OPERATION: 'operation',
  EQUALS: 'evaluate',
  ANS: 'answer',
  PLUSMINUS: 'plusminus',
  PERCENT: 'percent',
}


function reducer(state, { type, payload }){

  switch(type){
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          current: payload.toString(),
          overwrite: false,
        }}
      if (payload === '0' && state.current === '0'){
        return state
      }
      if (payload === '.' && state.current == null){return state}
      if (payload === '.' && state.current.includes('.')){
        return state
      }
      if (state.current !== undefined && state.current !== null && state.current.length > 19){
        return state
      }
      return {...state, current: `${state.current || ''}${payload}`}
    case ACTIONS.CLEAR:
      return {ans: state.ans}
    case ACTIONS.OPERATION:
      if (state.current == null && state.previous == null){
        return state
      }
      if (state.current == null){
        return{...state, operation: payload}
        
      }
      if (state.current === '0'){return state}
      if (state.previous == null){
        return {...state,
          previous: state.current,
          operation: payload,
        current: null}
      }
      return {...state, previous: evaluate(state),
        operation: payload,
      current: null}
      
    default:
      return state

    case ACTIONS.EQUALS:
      if(state.current == null || state.previous == null || state.operation == null ) {
        return state
      }
      return {...state,
      overwrite: true,
      previous: null,
      operation: null,
      current: evaluate(state),
      ans: evaluate(state)}
    case ACTIONS.ANS:
      if (state.ans == null) return state
      return {...state, current: state.ans}
    case ACTIONS.PLUSMINUS:
      if(state.current == null){return state}
      const res = parseFloat(state.current) * -1
      return {...state, current: res.toString()}
    case ACTIONS.PERCENT:
      if(state.current == null){return state}
      const per = parseFloat(state.current) / 100
      return {...state, current: per.toString()}
  }
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
  maximumFractionDigits: 0,
})

function formatOperand(operand) {
  if (operand == null) return
  const [integer, decimal] = operand.toString().split(".")
  if (decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

function evaluate({ current, previous, operation }){
  current = parseFloat(current)
  previous = parseFloat(previous)
  if (isNaN(current) || isNaN(previous)) { return ''}
  let answ = ''
  switch(operation){
    case '+':
      answ = previous + current;
      break
    case '-':
      answ = previous - current;
      break
    case '·':
      answ = previous * current;
      break
    case '÷':
      answ = previous / current;
      break
    default: 
      break
  }
  return answ.toString()

}


function App() {
  const [{ current, previous, operation }, dispatch] = useReducer(reducer, {})

  function handleKey(e){
    const press = e.key
    switch(press){
      case '1':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: 1 })
        break
      case '2':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: 2 })
        break
      case '3':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: 3 })
        break
      case '4':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: 4 })
        break
      case '5':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: 5 })
        break
      case '6':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: 6 })
        break
      case '7':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: 7 })
        break
      case '8':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: 8 })
        break
      case '9':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: 9 })
        break
      case '0':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: 0 })
        break
      case 'Enter':
        dispatch({ type: ACTIONS.EQUALS })
        break
      case '+':
        dispatch({ type: ACTIONS.OPERATION, payload: '+' })
        break
      case '-':
        dispatch({ type: ACTIONS.OPERATION, payload: '-' })
        break
      case '/':
        dispatch({ type: ACTIONS.OPERATION, payload: '÷' })
        break
      case '*':
        dispatch({ type: ACTIONS.OPERATION, payload: '·' })
        break
      case 'x':
        dispatch({ type: ACTIONS.OPERATION, payload: '·' })
        break
      case 'X':
        dispatch({ type: ACTIONS.OPERATION, payload: '·' })
        break
      case '.':
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: '.' })
        break
      default:
        break
    }

  }
  useEffect(()=>{
    document.addEventListener('keydown',handleKey)
    return () => document.removeEventListener('keydown', handleKey);
  })


  return (
    <div className="App">
      <div className='Ccontainer'>
      <Display operation={operation} current={formatOperand(current)} previous={formatOperand(previous)}></Display>
      <Buttons  dispatch={dispatch}></Buttons>
      </div>
      <div className='coded'>Keypress works too! <br></br> Coded by <a target='_blank' rel='noreferrer' href='https://github.com/anasrustom'>Anas</a></div>
    </div>
  );
}

export default App;
