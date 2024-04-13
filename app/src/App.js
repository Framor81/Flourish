import React, { useState } from 'react'; // Import useState here
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Link here
import './App.css';
import logo from "./Flowerish.png";
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';

// WelcomePage component
function WelcomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Flowerish</h1>
        <p>
          Go to the next page.
        </p>
        <Link to="/next" className="App-link">Enter</Link>
      </header>
    </div>
  );
}

// NextPage component
function NextPage() {
  const [points, setPoints] = useState(0);

  const increasePoints = (amount) => {
    setPoints(points + amount);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Here are your tasks for the day: </h1>
        <p></p>
        <div className="container">
          <button onClick={() => increasePoints(5)} className="task-buttons">Drink 8 oz of water</button>
          <button onClick={() => increasePoints(10)} className="task-buttons">Check in on your friends. How much have they drank?</button>
          <button onClick={() => increasePoints(15)} className="task-buttons">Have a snack!</button>
        </div>
        <div className="points">Points: {points}</div>
        <Link to="/garden" className="App-link">
          Go To Your Garden
        </Link>
      </header>
    </div>
  );

}

// GardenPage component
function GardenPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Garden Page</h1>
        <p>You are now on the Garden page of our website!</p>
        <Link to="/" className="App-link">
          Go Back Home
        </Link>
      </header>
    </div>
  );
}

// App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/next" element={<NextPage />} />
        <Route path="/garden" element={<GardenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
