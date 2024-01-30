import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../components/DashBoard';
import { BsToggles } from "react-icons/bs";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";
const HomePage = () => {
  const [url, setUrl] = useState('');
  const [autoPaste, setAutoPaste] = useState(false); 
  const [linkCount, setLinkCount] = useState(0); // Add this line

  const shortenUrl = () => {
    if (linkCount >= 5) {
      alert('You have reached the maximum number of links. Please register to create more links.');
      return;
    }

    // Implement URL shortening logic here
    console.log('URL Shortened');

    setLinkCount(linkCount + 1); // Add this line
  };
  const toggleAutoPaste = () => { // Add this function
    setAutoPaste(!autoPaste);
  };
  return (
    <div className="home-container">
        <div className='home-item-box'>
          <h1>Shorten Your Loooong Links :)</h1>
          <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
            <div className="wrapper">
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="Your URL here"
        />
        
        <button type='submit' onClick={shortenUrl}>Shorten Now!</button>
        </div>
        <div>

        <p className="auto-paste">
        <button 
          onClick={toggleAutoPaste} 
          style={{ 
            marginRight: '0px', 
            backgroundColor: '#0B101B', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}
        >
          {autoPaste ? 
            <FaToggleOn style={{ color: 'green', fontSize: '30px',marginRight: '10px'  }} /> : 
            <FaToggleOff style={{ color: 'red', fontSize: '30px', marginRight: '10px'  }} />
          }
          Auto Paste from Clipboard
        </button>
      </p>
    </div>
    <p>You can create <span style={{ color: 'skyblue', fontSize:'1.1rem', fontWeight:'30' }}>{5 - linkCount}</span>  more links. Register now to enjoy Unlimited Usage</p>
         
        {/* Add more features like copy to clipboard etc. */}
      </div>
      <div className='home-premium-box'>
          <h2>Want More?</h2>
          <h1>Go Premium!</h1>
          <div className="button-container">
            <button className="create-free">Create Free Account</button>
            <button className="view">View</button>
          </div>
        </div>
        <Dashboard />

        <p className="home-bottom"><Link to="/subscription"className="register-link">Register Now</Link> to enjoy Unlimited History</p>      
      
    </div>
  );
};

export default HomePage;
