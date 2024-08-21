import React, { useRef, useState } from "react";
import "./Menu.scss";
import { listCategory } from "../../helpers/dataArr";
import { useNavigate } from "react-router-dom";
import MenuContent from "../MenuContent/MenuContent";

const Menu = () => {
  const navigate = useNavigate();
  const clickCategory = (obj) => {
    navigate(obj?.link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  /// /other/10438/Клубника
  return (
    <div className="menu">
      <div className="container">
        <div className="menu__inner">
          <div className="main">
            <div className="main-menu-link">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            {/* <p>МЕНЮ</p> */}
            <div>
              <MenuContent />
            </div>
          </div>
          <ul className="category">
            {listCategory.map((categ) => (
              <li onClick={() => clickCategory(categ)} key={categ?.id}>
                {categ?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
