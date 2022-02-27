import React from 'react';
import ZingTouch from 'zingtouch';
import Home from './screens/Home';
import CoverFlow from './screens/CoverFlow';
import Settings from './screens/Settings';
import Games from './screens/Games';
import Music from './screens/Music';

class Menu extends React.Component {
    render(){

        // implementing zing-touch
        var zt = new ZingTouch.Region(document.body);

        function zingcall(){
 
            var myElement = document.getElementById('circle-menu');

            var rotate = new ZingTouch.Rotate();

            zt.bind(myElement, 'rotate', function(e){
                //Actions here
                console.log(e.detail.distanceFromLast);
              
            }, false);

        }

        // var zt = new ZingTouch.Region(document.getElementsByClassName('menu')[0]);
        // zt.bind(document.getElementsByClassName('menu')[0], 'rotate', (event) =>
        // {
        //     if (document.getElementsByClassName('screen')[0].classList.contains('width-50'))//this rotating facility will only be available when the side bar is shown to the user.
        //     {
        //         let dist = event.detail.distanceFromLast;
        //         this.temp_change_in_angle += dist;
        //         if (this.temp_change_in_angle > 60)
        //         {
        //             this.temp_selected++;
        //             this.temp_selected = this.temp_selected % this.state.options.length;
        //             this.setState({
        //                 selected: this.temp_selected
        //             });

        //             this.temp_change_in_angle = 0;
        //         }
        //         else if (this.temp_change_in_angle < -60)
        //         {
        //             this.temp_selected--;
        //             if (this.temp_selected === -1)
        //                 this.temp_selected = this.state.options.length - 1;

        //             this.temp_selected = this.temp_selected % this.state.options.length;
        //             this.setState({
        //                 selected: this.temp_selected
        //             });
        //             this.temp_change_in_angle = 0;
        //         }
        //     }

        // });
    

    // taking back to home on clicking on menu
    function changeDisplayMenu(){
        <Settings />
        var setting = document.getElementById('setting');
        setting.style.display = 'none';
        <Games />
        var games = document.getElementById('games');
        games.style.display = 'none';
        <Music />
        var music = document.getElementById('music');
        music.style.display = 'none';
        <CoverFlow />
        var cover = document.getElementById('cover-flow');
        cover.style.display = 'none';
        var home = document.getElementById('home');
        home.style.display = 'flex';
    }

    var color = 1;

    // onclick function of circle in menu
    function action(){
        var circle = document.getElementById('circle');
        if(color == 2){
            circle.style.backgroundColor = 'rgba(33, 33, 235, 0.884)';
            color = 3;
        }
        else if(color == 3){
            circle.style.backgroundColor = 'rgb(204, 204, 247)';
            color = 1;
        }
        else{
            circle.style.backgroundColor = 'aqua';
            color = 2;
        }
    }

        return(
            // implementing circle-menu
            <div className="menu" id="circle-menu" onClick={() => zingcall()}>
                <div id="menu"  onClick= {() => changeDisplayMenu()} >MENU</div>
                <div className="mid">
                    <div><img src="https://cdn-icons.flaticon.com/png/512/3318/premium/3318703.png?token=exp=1637749755~hmac=6f9c94f81e5e96691e18a6161d4a7984" alt="prev" /></div>
                    <div id="circle" onClick= { () => action() }></div>
                    <div><img src="https://cdn-icons.flaticon.com/png/512/3249/premium/3249399.png?token=exp=1637745888~hmac=06c2a86f8dea9aed416361642bca989a" alt="next" /></div>
                </div>
                <div>
                    <img id="pause" src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1637749866~hmac=7577b67e72661bf764b2af0096a4a92f" alt="pause-play" />
                </div>
            </div>
            
        );
    }
}

export default Menu;