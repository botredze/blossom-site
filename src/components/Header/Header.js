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
                        <div>
                            <img src={inst} alt="inst"/>
                        </div>
                        <div>
                            <img src={wa} alt="W/A"/>
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
