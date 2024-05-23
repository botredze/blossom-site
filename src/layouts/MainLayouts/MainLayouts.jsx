import React, {useState} from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./MainLayouts.scss";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import MobileMenuArea from "../../components/MobileMenuArea/MobileMenuArea";
import NavigationBarMobile from "../../components/NavigationBarMobile/NavigationBarMobile";
import {toggleMenu} from "../../store/reducers/typesSlice";

function MainLayouts() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { toggleActive } = useSelector(state => state.typesSlice);
  const [btn, setBtn] = useState(true)

  const toggleButton = () => {
    setBtn(prevMenuState  => !prevMenuState )
    console.log(toggleActive)
    handleClick()
  }

  const handleClick = () => {
    dispatch(toggleMenu(btn));
  };

  return (
    <div>
      <div className="mainPage">
        <div className="shadow"></div>
        <div className="menuMain">
          <Header />
          <Menu />
          <MobileMenu onClick={toggleButton} />
        </div>
        { toggleActive && <MobileMenuArea/>}
        <Outlet />
        <div className='navigate_panel'>
          <NavigationBarMobile/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainLayouts;
