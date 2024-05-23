import React, {useState} from "react";
import './MenuIcon.scss';
import {DotsThreeCircle, House, Spinner, HeartStraight, ShoppingCart, WhatsappLogo} from '@phosphor-icons/react'

const MenuIcon = ({ name, href, iconName }) => {
    const [active, setActive] = useState(false)
    const IconComponent = getIconComponent(iconName);
    const color = name === 'WhatsApp' ? '#48a91f' : '#000'

    const waColor = name === 'WhatsApp' ? '#48a91f' : '#000'
    const activeColor = active ?  '#606060' : '#000'

    const handleClick = () => {
        setActive(false)
    }

    return (
        <a className='menu-icon'
           href={href}
           onClick={handleClick}
        >
            <div className='menu-icon__inner'>
                <div className='icon'>
                    <IconComponent size={25} weight="regular" color={color} />
                </div>
                <p className='menu-title'>{name}</p>
            </div>
        </a>
    );
};

const getIconComponent = (iconName) => {
    switch (iconName) {
        case 'home':
            return House;
        case 'folder':
            return DotsThreeCircle;
        case 'heart':
            return HeartStraight;
        case 'brand-whatsapp':
            return WhatsappLogo;
        case 'cart':
            return ShoppingCart ;
        default:
            return Spinner;
    }
}

export default MenuIcon;
