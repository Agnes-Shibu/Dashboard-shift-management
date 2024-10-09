import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
