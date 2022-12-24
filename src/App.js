import { Component } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      My Todo Application
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
    </div>
  );
}

//function component
function FirstComponent(){
  return (
    <div className='FirstComponent'>First Component</div>
  );
}

//class component
class SecondComponent extends Component{
  render(){
    return (
      <div className='SecondComponent'>Second Component</div>
    )
  }
}

export default App;
