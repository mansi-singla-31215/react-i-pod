import React from 'react';
import CoverFlow from './screens/CoverFlow';
import Menu from './Menu';
import Screen from './screens/Home';
import Settings from './screens/Settings';
import Music from './screens/Music';
import Games from './screens/Games';

class Ipod extends React.Component {
    render(){

        <Screen />
        var items = document.querySelectorAll('#home .list p');

        return(
            <div className="main">
                {/* selecting screen to be displayed */}
                <div style={{height: '50%'}} id="main-screen">
                    {/* {items[0].classList.contains('active') && <CoverFlow />} */}
                    <Screen />
                    <CoverFlow />
                    <Settings />
                    <Music />
                    <Games />
                </div>
                
                <Menu />
            </div>
        );
    }
}

export default Ipod;