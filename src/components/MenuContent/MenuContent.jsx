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

  const { filtreByCategory } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dispatch(getMenuItems()).unwrap();

        const modifiedData = data.map((item) => {
          if (item.name === "ЦВЕТЫ") {
            return {
              ...item,
              categories: item.categories.map((category) => {
                if (category.category_name === "Розы") {
                  return {
                    ...category,
                    establishments: category.establishments.filter(
                      (est) => est.establishment_name !== "БОЛЬШИЕ БУКЕТЫ"
                    ),
                  };
                }
                return category;
              }),
            };
          }

          if (item.name === "КОМНАТНЫЕ") {
            return {
              ...item,
              categories: item.categories.filter(
                (category) => category.category_name !== "В горшке"
              ),
            };
          }

          if (item.name === "ШАРЫ") {
            return {
              ...item,
              categories: item.categories.map((category) => {
                if (category.category_name === "СЕРДЕЧКО") {
                  return {
                    ...category,
                    establishments: category.establishments.filter(
                      (est) => est.establishment_name !== "СЕРДЕЧКО"
                    ),
                  };
                }
                return category;
              }),
            };
          }

          if (item.name === "КОНФЕТЫ") {
            return {
              ...item,
              categories: item.categories.filter(
                (category) => category.category_name !== "ФАЛЬГА"
              ),
            };
          }

          return item;
        });

        setLocalMenuItems(modifiedData);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, [dispatch]);

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

  const handleRedirect = (id, establishment_name, redirectTo = null) => {
    if (redirectTo) {
      navigate(redirectTo);
      setMenuVisible(false);
      setActiveCategory(null);
      setActiveSubCategory(null);
      return;
    }

    dispatch(getRoseByFiltre(id))
      .unwrap()
      .then((data) => {
        console.log("Data received:", data);
        navigate(`/other/${id}/${establishment_name}`);
        setMenuVisible(false);
        setActiveCategory(null);
        setActiveSubCategory(null);
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
      });
  };

  const handleMenuClick = (item) => {
    if (item.name === "ДОП ТОВАРЫ") {
      handleRedirect("доп-товары-id", "ДОП ТОВАРЫ");
    } else {
      setMenuVisible(false);
    }
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
                  onClick={() => handleMenuClick(item)}
                >
                  {item.name}
                </Link>
                {item.categories && item.categories.length > 0 && (
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
                            handleRedirect(
                              category.codeid,
                              category.category_name
                            );
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
                                // className="sub-submenu-item"
                                onClick={() =>
                                  handleRedirect(
                                    establishment.codeid,
                                    establishment.establishment_name,
                                    establishment.redirectTo
                                  )
                                }
                              >
                                {/* {establishment.establishment_name} */}
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
