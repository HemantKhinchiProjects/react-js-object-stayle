import React from 'react';
import './style.css';

export default function App() {
  const newStyle = {
    border: 'solid 1px red',
    background: 'pink',
    color: 'red',
    padding: '0px 10px',
  };
  const newStyle2 = {
    border: 'solid 1px green',
    background: '#c0ec83',
    color: 'green',
    padding: '10px 5px',
  };
  return (
    <div>
      <h1 style={newStyle}>Hello StackBlitz!</h1>
      <p style={newStyle2}>Start editing to see some magic happen :)</p>
    </div>
  );
}
