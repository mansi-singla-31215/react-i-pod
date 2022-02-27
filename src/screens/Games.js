import React from 'react';

// Creating a screen for displaying games when clicked

class Games extends React.Component {
    render(){
        return(
            <div className="setting" id="games">
                <img src="https://cdn-icons-png.flaticon.com/512/3612/3612569.png" alt="games" />
                <h2>Games</h2>
            </div>
        );
    }
}

export default Games;