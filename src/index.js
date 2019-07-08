import React from 'react'; //need to import react from react first
import ReactDOM from 'react-dom'; //need to import reactDOM from react-dom second in order to use reactDOM.render
import './index.css';
import MyInfo from "./Components/MyInfo"
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// function MyInfo() { 
//     // when writing functionial components it's always good to use camel-casing and have the first word be capatilized
//     //with functional components all you need to do is return the JSX that you want. good practice to put the JSX into ()
//     return (
//       <div>
//           <h1>NikePhelps</h1>
//           <p>I'm awesome and that's really all there is to it!</p>
//           <ol>
//               <li>California</li>
//               <li>Amsterdam</li>
//               <li>St.Tropez</li>
//           </ol>
//       </div>
//     );
// }


ReactDOM.render(<MyInfo />, document.getElementById('root'));
// JSX is a javascript rendering of html. this is why importing react from react is important becuase this enables JSX usage
//*<MyApp />* this is creating an instance of the functional component MyApp
// ReactDOM.render(<MyApp />, document.getElementById('root'));

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'));//the first argument is what do you want to render, 
//the second arguement is where do I want to render it(always needs to point to the id that says root. 
// this is where all of the data goes in the html to be displayed)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
