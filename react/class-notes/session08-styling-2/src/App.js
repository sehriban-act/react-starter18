import './App.css';
import Buttons from './components/material-ui/buttons/Buttons';
import CheckBoxComp from './components/material-ui/checkbox/CheckBoxComp';
import TextFieldComp from './components/material-ui/text-field/TextFieldComp';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <StyledComponents /> */}
          <TextFieldComp />
          <CheckBoxComp />
          <Buttons />
        </header>
      </div>
    </>
  );
}
export default App;
