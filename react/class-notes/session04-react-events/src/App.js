import './App.css';
import AddEventsClass from './components/addEventClass/AddEventsClass';
import AddEvents from './components/addEvents/AddEvents';

function App() {
  return (
    <div className="App">
      <h1>Events in React Js</h1>
      {/* <AddEvents /> */}
      <AddEventsClass />
    </div>
  );
}

export default App;
