import logo from './logo.svg';
import './App.css';

function Welcome(props){
  return <h1>Hello, {props.name}!</h1>;
}

function App(){
  return(
    <div>
      <Welcome name="Krall"/>
      <Welcome name="Simon"/>
      <Welcome name="Tobias"/>
      <Welcome name="Ulf"/>
    </div>
  );
}

export default App;