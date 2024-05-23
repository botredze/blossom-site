import React from 'react';
import './VideoInfo.scss';
import imgManager from '../../assets/images/video-manager.png';
import InputMask from 'react-input-mask';
import { useDispatch } from 'react-redux';
import mp4 from '../../assets/video/video.mp4';

const VideoInfo = () => {
  const dispatch = useDispatch();
  const sendData = () => {};
  const changeInput = (e) => {
    const { name, value } = e.target;
    // dispatch(changeConfirm({ ...confirm, [name]: value }));
  };
  return (
    <>
      <div className="videoInfo">
        <h2>Посмотрите видео о нашей компании</h2>
        <p>
          Короткое 2-х минутное видео о том, почему 90% клиентов выбирают именно
          нас
        </p>
        <div className="video">
          <video
            width="675"
            height="390"
            controls
            style={{ borderRadius: '8px' }}
          >
            <source src={mp4} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="consultation">
        <div className="containerr">
          <div className="consultation__inner">
            <div className="consultation__text">
              <h5>Оставьте заявку и мы соберем для вас идеальный букет</h5>
              <p>Заполните форму и мы свяжемся с Вами в ближайшее время.</p>
            </div>
            <form onSubmit={sendData}>
              <InputMask
                mask="+999(999)99-99-99"
                placeholder="+996(___)__-__-__"
                name="number"
                onChange={changeInput}
                required
                //   value={confirm?.number}
              />
              <button type="submit">Отправить заявку</button>
            </form>
            <div className="manager">
              <div>
                <img src={imgManager} alt={imgManager} />
              </div>
              <p>Менеджер перезвонит вам, чтобы уточнить удобное время</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoInfo;
