import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <h1>Hello, w0rld!</h1>, document.getElementById('content')
// );
//------------

//const myelement = React.createElement('h1',{}, 'This is JS!');

//const myelement = <h1>This is JSX!</h1>;

// const myelement = (
//   <ul>
//     <li>Apples</li>
//     <li>Bananas</li>
//     <li>Cherries</li>
//   </ul>
// )

// const myheader = 
// <div>
//   <h1>I am a header</h1>
//   <h2>I am a smaller header</h2>
// </div>

//ReactDOM.render(myelement, document.getElementById('content'));
//ReactDOM.render(myheader, document.getElementById('header'));

//------------

// const myform = (
//   <form>
//     <label>
//       Name:
//       <input type="text" name="name" />
//     </label>
//     <button type="button">Search</button>
//   </form>
// )

// ReactDOM.render(myform, document.getElementById('content'));

//------------

// function Welcome(){
//   return <h1>Hello Function!</h1>;
// }

// ReactDOM.render(<Welcome/>, document.getElementById('content'));

//------------

// function Welcome(props){
//   return <h1>Hello, {props.name}!</h1>;
// }

// const element = <Welcome name="Krall" />

// ReactDOM.render(element, document.getElementById('content'));


//------------

//ReactDOM.render(<App/>, document.getElementById('content'));

//------------
// function formatDate(date){
//   return date.toLocaleDateString();
// }

// function Comment(props){
//   return(
//     <div>
//       <div>
//         <img src={props.author.avatarUrl} alt={props.author.name} />
//         <div>
//           {props.author.name}
//         </div>
//         <div>{props.text}</div>
//         <div>
//           {formatDate(props.date)}
//         </div>
//       </div>
//     </div>
//   );
// }

// const comment ={
//   date: new Date(),
//   text: 'This is a dummy text',
//   author:{
//     name:'Dummy author',
//     avatarUrl: 'https://placekitten.com/g/64/64',
//   },
// };

// ReactDOM.render(
//   <Comment
//   date={comment.date}
//   text={comment.text}
//   author = {comment.author} 
//   />,
//   document.getElementById('content')
// )

//------------

// function formatName(user){
// return user.firstName + ' ' + user.lastName;
// };

// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Krall Olsson'
// };

// const element = (
//   <h1>Hello, {formatName(user)}!</h1>
// );

// ReactDOM.render(element, document.getElementById('content'))

//------------

// function Clock(props){
//   return(
//     <div>
//       <h1>Hello, this is clock!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   )
// }

// function tick(){
//   ReactDOM.render(
//     <Clock date = {new Date()}/>,
//     document.getElementById('content')
//   );
// }

// setInterval(tick, 1000);

//------------

class Clock extends React.Component{
  render(){
    return(
      <div>
        <h1>Hello, this is clock</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}!</h2>
      </div>
    );
  }
}

function tick(){
  ReactDOM.render(
    <Clock date = {new Date()} />,
    document.getElementById('content')
  );
}
setInterval(tick, 1000);