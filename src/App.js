import './App.css';
import FirstComponent from './components/learging-examples/FirstComponent';
import LearningJavascript from './components/learging-examples/LearningJavascript';
import SecondComponent from './components/learging-examples/SecondComponent';
import {ThirdComponent} from './components/learging-examples/SecondComponent'


function App() {
  return (
    <div className="App">
      My Todo Application
      <FirstComponent/>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <LearningJavascript></LearningJavascript>
    </div>
  );
}

export default App;
