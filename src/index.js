import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
    {id: "todo-0", task: "eat", isComplete: true},
    {id: "todo-1", task: "sleep", isComplete: true},
    {id: "todo-2", task: "repeat", isComplete: false},
];

ReactDOM.render(<App tasks={DATA}/>, document.getElementById('root'));

