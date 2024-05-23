import React from "react";
import './MobileMenu.scss'

const MobileMenu = ({ onClick }) => {
    return (
        <div className='mobile-menu' onClick={onClick}>
            <div className='mobile-menu__inner'>
                <span className='mobile-sdm'>
                </span>
            </div>
        </div>
    )
}

export default MobileMenu
