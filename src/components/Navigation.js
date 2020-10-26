import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/abot">About</Link>
            {/* <a>는 페이지를 새로고침하므로 라우터의 Link to 태그를 이용함. */}
        </div>

    );
}

export default Navigation;