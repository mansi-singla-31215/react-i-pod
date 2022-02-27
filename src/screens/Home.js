import React from 'react';
import CoverFlow from './CoverFlow';
import Games from './Games';
import Music from './Music';
import './Screen.css';
import Settings from './Settings';

// Creating a screen for displaying home when clicked

class Screen extends React.Component {
    render(){

        // various functions to change the screen displayed when clicked on different items in menu below

        function changeDisplayCover(){
            <CoverFlow />
            var cover = document.getElementById('cover-flow');
            cover.style.display = 'flex';
            var home = document.getElementById('home');
            home.style.display = 'none';
        }

        function changeDisplayMusic(){
            <Music />
            var music = document.getElementById('music');
            music.style.display = 'flex';
            var home = document.getElementById('home');
            home.style.display = 'none';
        }

        function changeDisplayGames(){
            <Games />
            var games = document.getElementById('games');
            games.style.display = 'flex';
            var home = document.getElementById('home');
            home.style.display = 'none';
        }

        function changeDisplaySettings(){
            <Settings />
            var setting = document.getElementById('setting');
            setting.style.display = 'flex';
            var home = document.getElementById('home');
            home.style.display = 'none';
        }

        return(
            <div className="screen" id="home">
                {/* Side menu in home screen */}
                <div className="list">
                    <h3>iPod.js</h3>
                    <p onClick= {() => changeDisplayCover()}> Cover Flow  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /></p>
                    <p onClick= {() => changeDisplayMusic()}>Music  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /> </p>
                    <p  onClick= {() => changeDisplayGames()}>Games  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /> </p>
                    <p  onClick= {() => changeDisplaySettings()}>Settings  <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" /> </p>
                </div>
            </div>
        );
    }
}

export default Screen;