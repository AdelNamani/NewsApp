import React from 'react';

import 'bootstrap/dist/css/bootstrap.css'

import './news_style.css';

class Navbar extends React.Component {
    render() {
        return (
            <header id="header">
                <div  id="nav">
                    <div id="nav-fixed">
                        <div className='container'>
                            <div className='nav-logo'>
                                <a href="/" className="logo" ><img src="./img/logo.png" alt=""/></a>
                            </div>
                            <ul className="nav-menu nav navbar-nav">
                                <li><a href="/">News</a></li>
                                <li><a href="/">Popular</a></li>
                                <li className="cat-1"><a href="/">Web Design</a></li>
                                <li className="cat-2"><a href="/">JavaScript</a></li>
                                <li className="cat-3"><a href="/">Css</a></li>
                                <li className="cat-4"><a href="/">Jquery</a></li>
                            </ul>

                            
                        </div>
                    </div>    
                </div>    
            </header>
        )
    }
}

export default Navbar;
