import React from 'react';
import './Screen.css';

// Creating a screen for displaying Music when clicked

class Music extends React.Component {
    render(){
        return(
            <div className="screen" id="music">
                {/* Creating side list or menu */}
                <div className="list">
                    <h3>Music</h3>
                    <p>All Songs  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /></p>
                    <p>Artists  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /> </p>
                    <p>Albums  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /> </p>
                </div>
            </div>
        );
    }
}

export default Music;