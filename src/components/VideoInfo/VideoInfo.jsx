import React, { useState } from 'react';
import './VideoInfo.scss';
import imgManager from '../../assets/images/video-manager.png';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';
import mp4 from '../../assets/video/video.mp4';
import { createApplications } from '../../store/reducers/requestSlice';
import { changeAlertText } from '../../store/reducers/stateSlice';
import Alerts from '../Alerts/Alerts';

const VideoInfo = () => {
  const dispatch = useDispatch();
  const { preloader } = useSelector((state) => state.requestSlice);

  const [formData, setFormData] = useState({ phoneNumber: '' });
  const [formError, setFormError] = useState('');

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendData = (e) => {
    e.preventDefault();

    if (!formData.phoneNumber || formData.phoneNumber.includes('_')) {
      setFormError('Пожалуйста, введите корректный номер телефона');
      return;
    }

    setFormError('');
    dispatch(createApplications(formData))
      .then(() => {
        dispatch(changeAlertText({
          text: "Ваша заявка была принята, с вами свяжется оператор для уточнения дополнительной информации.",
          backColor: "#c14e77",
          state: true,
        }));
        setFormData({phoneNumber: ''})
      })
      .catch((error) => {
        console.error('Ошибка при отправке заявки:', error);
      });
  };

  return (
    <>
      <div className="videoInfo">
        <h2>Посмотрите видео о нашей компании</h2>
        <p>Короткое 2-х минутное видео о том, почему 90% клиентов выбирают именно нас</p>
        <div className="video">
          <video width="675" height="390" controls style={{ borderRadius: '8px' }}>
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
                name="phoneNumber"
                onChange={changeInput}
                required
                value={formData.phoneNumber}
              />
              {formError && <p className="error-message">{formError}</p>}
              <button type="submit" disabled={preloader}> {preloader ? "Отправка данных..." : "Отправить заявку"}</button>
            </form>
            
            <div className="manager">
              <div>
                <img src={imgManager} alt="Manager" />
              </div>  
              <p>Менеджер перезвонит вам, чтобы уточнить удобное время</p>
            </div>
          </div>
        </div>
      </div>
      <Alerts />
    </>
  );
};

export default VideoInfo;
