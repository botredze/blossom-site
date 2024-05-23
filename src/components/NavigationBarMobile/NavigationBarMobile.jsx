import React from "react";
import './NavigationBarMobile.scss';
import MenuIcon from "../MenuIcon/MenuIcon";

const NavigationBarMobile = () => {
    const icons = [
        {
            name: 'Главная',
            href: '/',
            iconName: 'home'
        },
        {
            name: 'Каталог',
            href: '/catalog',
            iconName: 'folder'
        },
        {
            name: 'Избранное',
            href: '/favorite',
            iconName: 'heart'
        },
        {
            name: 'WhatsApp',
            href: '//wa.me/996700507505?&amp;text=Здравствуйте! Пишу с города Бишкек. Мне нужна помощь в подборе букета',
            iconName: 'brand-whatsapp'
        },
        {
            name: 'Корзина',
            href: '/basket',
            iconName: 'cart'
        },
    ];

    return (
        <div className='navigate'>
            <div className='container'>
                <div className='navigate__inner'>
                    {icons.map((icon, index) => (
                        <MenuIcon key={index} name={icon.name} href={icon.href} iconName={icon.iconName} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavigationBarMobile;
