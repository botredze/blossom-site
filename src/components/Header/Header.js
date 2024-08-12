import React from "react";
import "./Header.scss";
import logo from "../../assets/images/LogoBlossom.png";
import user from '../../assets/icons/user-icon.svg'
import inst from "../../assets/icons/insta.svg";
import wa from "../../assets/icons/wa.svg";
import {numWebSite} from "../../helpers/dataArr";
import {NavLink} from "react-router-dom";
import favorite from "../../assets/icons/heartBlack.svg";
import basket from "../../assets/icons/basket.svg";
import {useSelector} from "react-redux";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header = () => {
    const {listfavorites} = useSelector((state) => state.saveDataSlice);

    const mainClick = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="main">
                        <NavLink to={"/"} className="logo" onClick={mainClick}>
                            <img src={logo} alt="Logo"/>
                        </NavLink>
                        <p>Доставка цветов, шаров и подарков в Бишкеке</p>
                    </div>
                    <div className='main_info--all'>
                        <div className="num">г. Бишкек</div>
                        <div className="filial">
                            <p>{numWebSite}</p>
                        </div>
                    </div>

                    <div className='main_info--mobile'>
                        <div className="filial">
                            <p>{numWebSite}</p>
                        </div>
                        <div className="num">г. Бишкек</div>
                    </div>

                    <div className="contacts">
                        <div className='soc_icons'>
                            <a className='links' href="https://www.instagram.com/blossom_kg" target="_blank"
                               rel="nofollow">
                                <img src={inst} alt="inst"/>
                            </a>
                        </div>
                        <div className='soc_icons'>
                            <a className='links'
                               href="https://api.whatsapp.com/send/?phone=996700507505&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9C%D0%BE%D0%B6%D0%B5%D1%82%D0%B5+%D0%B4%D0%B0%D1%82%D1%8C+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%0A%0A&type=phone_number&app_absent=0"
                               target="_blank" rel="nofollow">
                                <img src={wa} alt="W/A"/>
                            </a>
                        </div>
                    </div>
                    <div className="header__inner__search">
                        {/* <img src={wa1} alt="" /> */}
                    </div>
                    <div className="mainInfo">
                        <NavLink to={"/favorite"}>
                            <img src={favorite} alt="{}"/>
                            {listfavorites?.length === 0 ? (
                                ""
                            ) : (
                                <p>{listfavorites?.length}</p>
                            )}
                        </NavLink>
                        <NavLink to={"/basket"}>
                            <img src={basket} alt=""/>
                        </NavLink>
                        <NavLink to={'/kabinet'}>
                            <img src={user} alt=""/>
                        </NavLink>

                        {/* <NavLink>
              <img src={account} alt="" />
            </NavLink> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;
