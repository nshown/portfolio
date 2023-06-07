import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import eventHorizonImg from './assets/img/event-horizon-2.jpg';
import ribbonWeb from './assets/img/ribbon-web.png';


function App() {
  return (
    <div className="app">
      <header>
        <img src={eventHorizonImg} className="top-corner-img" alt="event horizon" />
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
            <Route
              path="/contact"
              element={<Contact />}
            />
          </Routes>

        </main>
      </Router>
      {/* <img src={ribbonWeb} className="bottom-corner-img" alt="ribbon web"></img> */}
    </div>
  );
}

export default App;
