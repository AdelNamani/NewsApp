import React from 'react';
import { Route, Link } from 'react-router-dom'


class Navbar extends React.Component {
    render() {
        return (
            <header>
                Navbar - <Link to="/">Home</Link>
            </header>
        )
    }
}

export default Navbar;
