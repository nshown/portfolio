import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import eventHorizonImg from './assets/img/eventhorizon2.jpg';
import ribbonWeb from './assets/img/ribbon-web.png';


function App() {
  return (
    <div className="app">
      <header>
        <img src={eventHorizonImg} class="top-corner-img" alt="event horizon" />
      </header>
      <Router>
        <Nav />
        <main className="app-main">
          {/* Wrap Route elements in a Routes component */}
          <Routes>
            {/* Define routes using the Route component to render different page components at different paths */}
            {/* Define a default route that will render the Home component */}
            <Route
              path="/"
              element={<Home />}
            />
            {/* Define a route that will take in variable data */}
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>

        </main>
      </Router>
      {/* <img src={ribbonWeb} class="bottom-corner-img" alt="ribbon web"></img> */}
    </div>
  );
}

export default App;
