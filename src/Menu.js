import React from 'react';

class Menu extends React.Component {
    render(){
        return(
            <div className="menu">
                <div id="menu">MENU</div>
                <div className="mid">
                    <div><img src="https://cdn-icons.flaticon.com/png/512/3318/premium/3318703.png?token=exp=1637749755~hmac=6f9c94f81e5e96691e18a6161d4a7984" alt="prev" /></div>
                    <div id="circle"></div>
                    <div><img src="https://cdn-icons.flaticon.com/png/512/3249/premium/3249399.png?token=exp=1637745888~hmac=06c2a86f8dea9aed416361642bca989a" alt="next" /></div>
                </div>
                <div>
                    <img src="https://cdn-icons.flaticon.com/png/512/5725/premium/5725942.png?token=exp=1637749866~hmac=7577b67e72661bf764b2af0096a4a92f" alt="pause-play" />
                </div>
            </div>
        );
    }
}

export default Menu;