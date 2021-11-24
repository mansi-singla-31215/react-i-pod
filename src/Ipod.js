import React from 'react';
import Menu from './Menu';
import Screen from './Screen';

class Ipod extends React.Component {
    render(){
        return(
            <div className="main">
                <Screen />
                <Menu />
            </div>
        );
    }
}

export default Ipod;