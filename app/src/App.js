import { default as React, useState } from 'react'; // Import useState here
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import Link here
import './AnimatedButton.css';
import './App.css';
import './Button.css';
import GroupsPage from './Groups';
import LoginPage from './LoginPage';
import NavBar from './NavBar';
import RegistrationPage from './RegistrationPage';
import ShopPage from './ShopPage'; // Make sure to import the ShopPage component
import logo from "./pics/Flowerish.png";

//import plantImages from './imagePaths';
//import plant1 from "./pics/flowers.png";

import plant1 from "./pics/plant1.png";
import plant10 from "./pics/plant10.png";
import plant11 from "./pics/plant11.png";
import plant12 from "./pics/plant12.png";
import plant2 from "./pics/plant2.png";
import plant3 from "./pics/plant3.png";
import plant4 from "./pics/plant4.png";
import plant5 from "./pics/plant5.png";
import plant6 from "./pics/plant6.png";
import plant7 from "./pics/plant7.png";
import plant8 from "./pics/plant8.png";
import plant9 from "./pics/plant9.png";

// WelcomePage component 1
function WelcomePage() {

  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1>Flourish</h1>
              <p>
                  What theme are you looking for?
              </p>
              <div>
                {/* Link each button to a different page */}
                <Link to="/nightOut" className="button2">Night Out</Link>
                <Link to="/athletics" className="button2">Athletics</Link>
                <Link to="/academics" className="button2">Academics</Link>
              </div>
              {/* <div>
                  <Link to="/tasks" className="App-link">Enter</Link>
              </div> */}
          </header>
      </div>
  );
}



// TasksPage component
function TasksPageNightOut({increasePoints, points, animationPoints, unlockMessage}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here are your tasks for your NIGHT OUT: </h1>

        <div className="container">
          <button onClick={() => increasePoints(5)} className="button">Drink 8 oz of water</button>
          <button onClick={() => increasePoints(10)} className="button">Check in on your friends. How much have they drank?</button>
          <button onClick={() => increasePoints(15)} className="button">Have a snack!</button>
        </div>
        <div className="points">Points: {points}</div>
        {animationPoints > 0 && (
          <div className="points-animation">{animationPoints} points added!</div>
        )}
        {unlockMessage !== "" && <div>{unlockMessage}</div>}
        <div className="container">
        <Link to="/shop" className="App-link">
            Go To the Shop
          </Link>
        </div>
      </header>
    </div>
  );

}

// TasksPage component
function TasksPageAthletics({increasePoints, points, animationPoints, unlockMessage}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here are your tasks for your Athletics: </h1>
        <div className="container">
          <button onClick={() => increasePoints(5)} className="button">Check in on teammates! Are they well rested?</button>
          <button onClick={() => increasePoints(10)} className="button">Drink 32 oz of water</button>
          <button onClick={() => increasePoints(10)} className="button">Eat protein</button>
          <button onClick={() => increasePoints(10)} className="button">Stretch</button>
          <button onClick={() => increasePoints(15)} className="button">Recovery Yoga</button>
        </div>
        <div className="points">Points: {points}</div>
        {animationPoints > 0 && (
          <div className="points-animation">{animationPoints} points added!</div>
        )}
        {unlockMessage !== "" && <div>{unlockMessage}</div>}
        <div className="container">
          <Link to="/shop" className="App-link">
            Go To the Shop
          </Link>
        </div>
      </header>
    </div>
  );

}

// TasksPage component
function TasksPageAcademics({increasePoints, points, animationPoints, unlockMessage}) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here are your tasks for your Academics: </h1>


        <div className="container">
          <button onClick={() => increasePoints(5)} className="button">Go to class</button>
          <button onClick={() => increasePoints(15)} className="button">Do homework</button>
          <button onClick={() => increasePoints(15)} className="button">Go to mentor session</button>
          <button onClick={() => increasePoints(20)} className="button">Study for exam</button>
        </div>
        <div className="points">Points: {points}</div>
        {animationPoints > 0 && (
                  <div className="points-animation">{animationPoints} points added!</div>
                )}
        {unlockMessage !== "" && <div>{unlockMessage}</div>}
        <div className="container">
        <Link to="/shop" className="App-link">
        Go to Shop
        </Link>

        </div>
      </header>
    </div>
  );

}

// GardenPage component
function GardenPage({ plantImages, showPlantsCount, showPlants }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Here is your garden:</h1>
        {/* {showPlants.map((showPlant, i) => (showPlant && <img key={i} src={plantImages[i]} alt={`Plant ${i + 1}`} />))} */}
        {showPlants.map((showPlant, i) => (
          showPlant && <img key={i} src={plantImages[i]} alt={`Plant ${i + 1}`} />
        ))}

        <p>You are now on the Garden page of our website!</p>
        <Link to="/Flourish" className="App-link">
          Go Back Home
        </Link>
      </header>
    </div>
  );
}

// App component with routing
function App() {
  const plantImages = [
    plant1,
    plant2,
    plant3,
    plant4,
    plant5,
    plant6,
    plant7,
    plant8,
    plant9,
    plant10,
    plant11,
     plant12
    // Add more image paths as needed
  ];

  const [points, setPoints] = useState(0);
  //const [showPlant, setShowPlant] = useState(false);
  const [animationPoints, setAnimationPoints] = useState(0);
  const [showPlantsCount, setShowPlantsCount] = useState(1);
  const [unlockMessage, setUnlockMessage] = useState("");

  const [showPlants] = useState([]);
  for (let i = 0; i < plantImages.length; i++) {
    showPlants.push(false);
  }

  const increasePoints = (amount) => {
    const newPoints = points + amount;
    setPoints(newPoints);
    setAnimationPoints(amount);
    setTimeout(() => setAnimationPoints(0), 1000); // Remove animation after 1 second
    if (newPoints >= 50)
      setUnlockMessage("Congratulations, you have enough points to buy a plant!")
  };

  const spendPoints = (amount) => {
    if (points >= amount) {
      setPoints(points - amount);
      setShowPlantsCount(showPlantsCount + 1);
      console.log("showPlantsCount: ", showPlantsCount);
      if (amount === 50) {
        showPlants[showPlantsCount - 1] = true;
        console.log("showPlants: ", showPlants);
      }
    }
    if (points - amount < 50){
      setUnlockMessage("")
    }
  };

  return (
    <Router>
      <div><NavBar />  {/* Navbar included here */}</div>
      <Routes>
        <Route path="/Flourish" element={<WelcomePage />} />
        <Route path="/nightOut" element={<TasksPageNightOut increasePoints={increasePoints} points={points} animationPoints={animationPoints} unlockMessage={unlockMessage}/>} />
        <Route path="/athletics" element={<TasksPageAthletics increasePoints={increasePoints} points={points} animationPoints={animationPoints} unlockMessage={unlockMessage}/>} />
        <Route path="/academics" element={<TasksPageAcademics increasePoints={increasePoints} points={points} animationPoints={animationPoints} unlockMessage={unlockMessage}/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/shop" element={<ShopPage points={points} spendPoints={spendPoints} />} />
        <Route path="/garden" element={<GardenPage plantImages={plantImages} showPlantsCount={showPlantsCount} showPlants={showPlants} />} />
        <Route path="/groups" element={<GroupsPage />} />

      </Routes>

    </Router>
  );
}

export default App;
