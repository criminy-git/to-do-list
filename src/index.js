import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList'

const list = [
  {
    text: "Clean the house", checked: false
  },
  { 
    text:  "Water the plants", checked: false
  },
  {
    text: "Order groceries", checked: false
  }
];

ReactDOM.render(
  <MyList initialList={list}/>,
  document.getElementById('root')
);