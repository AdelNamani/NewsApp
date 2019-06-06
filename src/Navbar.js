import React from 'react';
import { Route, Link } from 'react-router-dom'


class Navbar extends React.Component {
    render() {
        return (
            <header>
                Navbar - <Link to="/">Home</Link>
                <ul>
                    <li><Link to="/category/science">Science</Link> </li>
                    <li><Link to="/category/sports">Sports</Link> </li>
                    <li><Link to="/category/business">Business</Link> </li>
                </ul>
            </header>
        )
    }
}

export default Navbar;
