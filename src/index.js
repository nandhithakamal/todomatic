import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
    {id: "todo-0", name: "eat", isComplete: true},
    {id: "todo-1", name: "sleep", isComplete: true},
    {id: "todo-2", name: "repeat", isComplete: false},
];

ReactDOM.render(<App tasks={DATA}/>, document.getElementById('root'));

