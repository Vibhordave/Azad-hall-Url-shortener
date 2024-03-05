// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Subscription from "./Pages/Subscription";
import Navbar from "./components/navbar";
import RegistrationForm from './components/RegistrationForm';
function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/register" component={RegistrationForm} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
