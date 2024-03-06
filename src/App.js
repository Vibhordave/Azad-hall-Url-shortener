// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomePageLoggedin from "./Pages/HomePageLoggedin";
import Subscription from "./Pages/Subscription";
import Navbar from "./components/navbar";
import LoginPage from "./Pages/login";
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/loggedin" element={<HomePageLoggedin />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
