import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import eventHorizonImg1 from './assets/img/event-horizon-2.jpg';
import eventHorizonImg2 from './assets/img/event-horizon-2-1.jpg';
// import ribbonWeb from './assets/img/ribbon-web.png';
import ribbonWeb from './assets/img/ribbon1-edit2.png';


function App() {
  return (
    <div className="app">
      <header>
        <div className='fade-in'>
          <img id='fade-img-1' src={eventHorizonImg2} className="top-corner-img" alt="event horizon 2" />
          <img id='fade-img-2' src={eventHorizonImg1} className="top-corner-img" alt="event horizon 1" />
        </div>
      </header>
      {/* <Router basename='/portfolio'>  tried to resolve the portfolio link problem with the basename property*/}
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
