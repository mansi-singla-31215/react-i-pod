import React from 'react';
import './Screen.css';
import Settings from './Settings';

class Screen extends React.Component {
    render(){
        return(
            <div className="screen">
                <div className="list">
                    <h3>iPod.js</h3>
                    <p>Cover Flow  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /></p>
                    <p>Music  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /> </p>
                    <p>Games  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /> </p>
                    <p>Settings  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /> </p>
                </div>
            </div>
        );
    }
}

export default Screen;