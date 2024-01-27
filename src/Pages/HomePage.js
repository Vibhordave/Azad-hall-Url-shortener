import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [url, setUrl] = useState('');

  const shortenUrl = () => {
    // Implement URL shortening logic here
    console.log('URL Shortened');
  };

  return (
    <div className="container">
        <div className='item-box'>
          <h1>Shorten Your Loooong Links :)</h1>
          <p>Linkly is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>
            <div className="wrapper">
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
          placeholder="Your URL here"
        />
        
        <button type='submit' onClick={shortenUrl}>Shorten It Now!</button>
        </div>
        <p class="auto-paste">Auto Paste from Clipboard</p>
            <p>You can create 05 more links. Register now to enjoy Unlimited Usage</p>
         
        {/* Add more features like copy to clipboard etc. */}
      </div>
      <div className='premium-box'>
          <h2>Want More?</h2>
          <h1>Go Premium!</h1>
          <div className="button-container">
            <button className="create-free">Create Free Account</button>
            <button className="view">View</button>
          </div>
        </div>
        
        <p className="bottom"><Link to="/register"className="register-link">Register Now</Link> to enjoy Unlimited History</p>      
      
    </div>
  );
};

export default HomePage;
