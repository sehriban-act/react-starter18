import './App.css';
import Buttons from './components/material-ui/buttons/Buttons';
import CheckBoxComp from './components/material-ui/checkbox/CheckBoxComp';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <StyledComponents /> */}
          <CheckBoxComp />
          <Buttons />
        </header>
      </div>
    </>
  );
}
export default App;
