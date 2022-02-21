import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList'

const list = [
  "Clean my room",
  "Water the plants",
  "Order groceries"
];

ReactDOM.render(
  <MyList initialList={list}/>,
  document.getElementById('root')
);