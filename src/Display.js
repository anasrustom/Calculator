import React from 'react'
import './index.css';

export default function Display(props) {
  return (
    <div className='display-container'>
          <div className='previous-display'><span>{props.previous} {props.operation || ''}</span></div>
          <div id='display' className='current-display'><span>{props.current}</span></div>
    </div>
    
  )
}
