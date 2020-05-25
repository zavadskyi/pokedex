import React from 'react'
import './Header.scss';

const Header = ({text}) => {
    return (
        <div className="header">
            <h1>
                {text}
            </h1>
        </div>
    )
}

export default Header
