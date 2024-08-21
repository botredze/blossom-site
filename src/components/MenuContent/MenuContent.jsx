import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMenuItems,
  getRoseByFiltre,
} from "../../store/reducers/requestSlice";
import { FaChevronRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./MenuContent.scss";

const MenuContent = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [localMenuItems, setLocalMenuItems] = useState([]);
  const dispatch = useDispatch();
  const menuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const navigate = useNavigate();

  const { menuItems } = useSelector((state) => state.requestSlice);
  const { filtreByCategory } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    dispatch(getMenuItems())
      .unwrap()
      .then((data) => {
        setLocalMenuItems(data);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных меню:", error);
      });
  }, [dispatch]);

  useEffect(() => {
    if (filtreByCategory) {
    }
  }, [filtreByCategory]);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !menuButtonRef.current.contains(event.target)
    ) {
      setMenuVisible(false);
      setActiveCategory(null);
      setActiveSubCategory(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRedirect = (id, establishment_name) => {
    dispatch(getRoseByFiltre(id))
      .unwrap()
      .then((data) => {
        console.log("11", data);
        navigate(`/other/${id}/${establishment_name}`);
        setMenuVisible(false); // Close the menu after redirect
        setActiveCategory(null);
        setActiveSubCategory(null);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  };

  return (
    <div>
      <div
        className="menu"
        onMouseEnter={() => setMenuVisible(true)}
        ref={menuButtonRef}
      >
        <h2 className="menu-title">МЕНЮ</h2>
      </div>

      {menuVisible && (
        <>
          <div className="menu-overlay" onClick={() => setMenuVisible(false)} />
          <ul className="menu-list" ref={menuRef}>
            {localMenuItems.map((item) => (
              <li
                key={item.number_to_categorie}
                onMouseEnter={() => setActiveCategory(item.number_to_categorie)}
                onMouseLeave={() => {
                  setActiveCategory(null);
                  setActiveSubCategory(null);
                }}
                className="menu-item"
              >
                <Link
                  className="nav-link"
                  to={item.path}
                  onClick={() => setMenuVisible(false)}
                >
                  {item.name}
                </Link>
                {item.categories && (
                  <span className="arrow">
                    <FaChevronRight />
                  </span>
                )}
                {activeCategory === item.number_to_categorie && (
                  <ul className="submenu-list">
                    {item.categories?.map((category) => (
                      <li
                        key={category.codeid}
                        onMouseEnter={() =>
                          setActiveSubCategory(category.codeid)
                        }
                        onMouseLeave={() => setActiveSubCategory(null)}
                        className="submenu-item"
                      >
                        <Link
                          className="nav-link"
                          to={category.path}
                          onClick={() => {
                            setActiveCategory(null);
                            setActiveSubCategory(null);
                            setMenuVisible(false);
                          }}
                        >
                          {category.category_name}
                        </Link>
                        {category.establishments && (
                          <span className="arrow">
                            <FaChevronRight />
                          </span>
                        )}
                        {activeSubCategory === category.codeid && (
                          <ul className="sub-submenu-list">
                            {category.establishments.map((establishment) => (
                              <li
                                key={establishment.codeid}
                                className="sub-submenu-item"
                                onClick={() =>
                                  handleRedirect(
                                    establishment.codeid,
                                    establishment.establishment_name
                                  )
                                }
                              >
                                {establishment.establishment_name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MenuContent;
