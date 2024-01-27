// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Subscription from './Pages/Subscription';
import Navbar from './components/navbar';
function App() {
  return (
    <>
      <div className="nav-added">
        <Navbar />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
