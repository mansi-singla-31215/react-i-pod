import React from 'react';

// Creating a screen for displaying setting when clicked

class Settings extends React.Component {
    render(){
        return(
            <div className="setting" id="setting">
                <img src="https://cdn-icons-png.flaticon.com/512/126/126472.png" alt="settings" />
                <h2>Settings</h2>
            </div>
        );
    }
}

export default Settings;