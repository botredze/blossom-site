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
              <div  className='soc_icons'>
                <a className='links' href="https://www.instagram.com/blossom_kg" target="_blank" rel="nofollow">
                <img src={inst} alt="inst" />
                </a>
              </div>
              <div className='soc_icons'>
                <a  className='links' href="https://api.whatsapp.com/send/?phone=996700507505&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9C%D0%BE%D0%B6%D0%B5%D1%82%D0%B5+%D0%B4%D0%B0%D1%82%D1%8C+%D0%BA%D0%BE%D0%BD%D1%81%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%86%D0%B8%D1%8F%0A%0A&type=phone_number&app_absent=0" target="_blank" rel="nofollow">
                <img src={wa} alt="W/A" />
                </a>
              </div >
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
