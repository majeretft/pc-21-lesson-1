import './App.css';
import About from './components/About';

const App = () => {
  const myStyle = {
    backgroundColor: "red"
  };

  const myLi = <li>Мой li</li>;

  return (
    <div className="content">
      <About></About>

      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      
      <About></About>
      
      <ul style={myStyle} className="test">
        <li>Реакт может запутать</li>
        <li>Я не html</li>
        <li>Превед медвед!</li>
        {myLi}
      </ul>

      <About></About>
    </div>
  );
};

export default App;
