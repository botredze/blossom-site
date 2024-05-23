import React from "react";
import "./Advertising.scss";
import list from "../../assets/images/list.webp";
import trava from "../../assets/images/trava.png";
import baby from "../../assets/images/imgHeader.webp";
import love from "../../assets/images/love.webp";
import more from "../../assets/images/moreTovar.webp";
import PayOneClick from "../PayOneClick/PayOneClick";

const Advertising = () => {
  const [look, setLook] = React.useState(false);

  const payOneClick = () => {
    setLook(true);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      // Если клик был вне формы, то скрываем ее
      if (look && !event.target.closest(".sendZakaz")) {
        setLook(false);
      }
    };
    // Добавляем слушатель при монтировании компонента
    document.addEventListener("mousedown", handleClickOutside);
    // Очищаем слушатель при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [look]);

  return (
    <div className="advertising">
      <div className="container">
        <div className="advertising__inner">
          <img src={list} alt="" className="list1" />
          <div className="mainTitle">
            <h1>Доставка цветов Бишкек</h1>
            <p>
              Ароматные букеты с гарантией свежести <b>до 7 дней!</b>
            </p>
            <div className="actionSend">
              <button onClick={() => setLook(true)}>СДЕЛАТЬ ПРЕДЗАКАЗ </button>
              {look && <PayOneClick setLook={setLook} look={look} />}
            </div>
          </div>
          <div className="oprosnik">
            <img src={love} alt="love" className="love" />
            <img src={baby} alt="baby" className="baby" />
            <img src={more} alt="bamoreby" className="more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertising;
