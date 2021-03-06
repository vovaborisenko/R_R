import React from 'react';
import ReactDOM from 'react-dom';
// import Menu from './components/Menu';
// import data from './data/recipes';
// import AddColorForm from './components/AddColorForm';
// import StarRating from './components/StarRating';
// import MemberList from './components/MemberList';
import App from './components/App';
import './style.css';

import * as serviceWorker from './serviceWorker';

// const logColor = (title, color) =>
//   console.log(`New Color: ${title} | ${color}`);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
