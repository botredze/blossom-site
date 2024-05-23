import React from "react";
import "./MoreInfo.scss";
import email from "../../assets/images/info-mail.svg";
import camera from "../../assets/images/info-camera.svg";
import sms from "../../assets/images/info-add.svg";
import video from "../../assets/images/info-video.svg";

const MoreInfo = () => {
  return (
    <div className="moreInfoBlock">
      <div className="container">
        <div className="moreInfoBlock__inner">
          <div className="more__every">
            <img src={email} alt="email" />
            <h5>ОТКРЫТКА К БУКЕТУ</h5>
            <p>
              По желанию в букет положим <b>бесплатную открытку</b> с
              пожеланиями получателю букета от вашего имени.
            </p>
          </div>
          <div className="more__every">
            <img src={camera} alt="email" />
            <h5>ФОТООТЧЁТ</h5>
            <p>
              <b>Фотографируем ваш букет</b> с перед отправкой, чтобы вы были
              спокойны - доставят то, что заказывали.
            </p>
          </div>
          <div className="more__every">
            <img src={sms} alt="email" />
            <h5>СМС-ИНФОРМИРОВАНИЕ</h5>
            <p>
              <b>Информируем </b> обо всех этапах доставки: когда подарок
              собран, когда доставляется и когда доставлен.
            </p>
          </div>
          <div className="more__every">
            <img src={video} alt="email" />
            <h5>ВИДЕООТЧЁТ</h5>
            <p>
              <b>Записываем на видео эмоции</b> счастливого получателя вашего
              подарка.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
