import React from "react";
import { NavLink } from "react-router-dom";
import "./ContactsPage.scss";
import { numWebSite } from "../../helpers/dataArr";
import { Map, Placemark, YMaps } from "react-yandex-maps";

const ContactsPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="contactsPage">
      <div className="container">
        <div className="contactsPage__inner">
          <div className="navigateWeb">
            <NavLink to={"/"}>Доставка цветов</NavLink>
            <span>Контакты</span>
          </div>
          <div className="infoContact">
            <div className="map">
              <YMaps>
                <Map
                  defaultState={{
                    center: [42, 872027, 74, 602679],
                    zoom: 14,
                  }}
                  style={{
                    borderRadius: "8px",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <Placemark defaultGeometry={[42, 872027, 74, 602679]} />
                </Map>
              </YMaps>
            </div>
            <div className="mapText">
              <div>
                <p>Телефоны:</p>
                <span>{numWebSite}</span>
              </div>
              <div>
                <p>Адрес офиса:</p>
                <span>
                  050010 БЦ Premium ул.Токтогула 110, 1 этаж
                </span>
              </div>
              <div>
                <p>Инстаграм::</p>
                <span>blossom_kg</span>
              </div>
              <div>
                <p>Почта:</p>
                <span>mail@blossom.kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
