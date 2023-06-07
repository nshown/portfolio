import './App.css';
import eventHorizonImg from './assets/img/eventhorizon2.jpg';
import ribbonWeb from './assets/img/ribbon-web.png';


function App() {
  return (
    <div className="App">
      <img src={eventHorizonImg} class="top-corner-img" alt="event horizon" />
      <header className="App-header">
        <p>
          Add webpage here!
        </p>
      </header>
      <img src={ribbonWeb} class="bottom-corner-img" alt="ribbon web"></img>
    </div>
  );
}

export default App;
