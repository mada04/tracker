import logo from './logo.svg';
import './App.css';
import Tracker from './components/Tracker';
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <div className="main">
      <GlobalStyles/>
    <Tracker/>
    </div>
  );
}

export default App;
