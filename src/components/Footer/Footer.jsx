import React from "react";
import "./Footer.scss";
import { listCategory, numWebSite } from "../../helpers/dataArr";
import logo from "../../assets/images/LogoBlossom.png";
import inst from "../../assets/icons/insta.svg";
import wa from "../../assets/icons/wa.svg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const clickCategory = (obj) => {
    navigate(obj?.link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clickScroll = (click) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="preFooter">
        <div className="container">
          <div className="preFooter__inner">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <ul>
              {listCategory.map((categ) => (
                <li onClick={() => clickCategory(categ)} key={categ?.id}>
                  {categ?.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="container">
          <div className="nav__inner">
            <p onClick={clickScroll}>Наверх</p>
            <div className="contacts">
              <p>{numWebSite}</p>
              <div>
                <img src={inst} alt="inst" />
              </div>
              <div>
                <img src={wa} alt="W/A" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="footerMain">
            <div className="contactsFooter">
              <h6>
                Публичная оферта Талон ИП Лицензия Политика конфиденциальности
              </h6>
              <p>Blossom</p>
              <p>ИИН: 123456789</p>
              <p>
                050010 г. Бишкек, Первомайский район, ул. Токтогула, 110 Бишкек,
                Чуйская область 720040 Кыргызстан
              </p>
              <p>Номер телефона: {numWebSite}</p>
              <p>Адрес электронной почты: blossom@gmail.com</p>
            </div>
            <div className="license">
              <h6>© 2014 — 2024 | Blossom | Все права защищены</h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
