import React from "react";
import "./SendDataOrder.scss";
import { useState } from "react";
import good from "../../assets/icons/goodSend.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeZakaz, createZakaz } from "../../store/reducers/requestSlice";
import { changeAlertText } from "../../store/reducers/stateSlice";
import { useNavigate } from "react-router-dom";

const SendDataOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listBasket } = useSelector((state) => state.saveDataSlice);
  const { zakaz } = useSelector((state) => state.requestSlice);
  const [one, setOne] = useState(0);
  const [two, setTwo] = useState(0);
  console.log(listBasket, "listBasket");

  const sendData = (e) => {
    e.preventDefault();
    if (listBasket?.length === 0) {
      dispatch(
        changeAlertText({
          text: "Добавьте что-нибудь в корзину",
          backColor: "#c14e77",
          state: true,
        })
      );
    } else {
      dispatch(
        createZakaz({
          ...zakaz,
          list: listBasket,
        })
      );
      dispatch(
        changeAlertText({
          text: "Ваша заявка была принята, с вами свяжется оператор для уточнения дополнительной информации. ",
          backColor: "#c14e77",
          state: true,
        })
      );
      navigate("/");
    }
  };

  const changeInput = (e) => {
    if (e.target.name === "client_phone") {
      const text = e.target.value.replace(/\D/g, ""); // Оставляем только цифры
      dispatch(changeZakaz({ ...zakaz, client_phone: text }));
    } else {
      dispatch(changeZakaz({ ...zakaz, [e.target.name]: e.target.value }));
    }
  };
  console.log(zakaz, "zakaz");

  const clickPay = (type) => {
    dispatch(changeZakaz({ ...zakaz, type_pay: type }));
  };

  const clickMethodPay = (type) => {
    dispatch(changeZakaz({ ...zakaz, method_pay: type }));
  };

  return (
    <div className="sendData">
      <h5>Оформление заказа</h5>
      <form onSubmit={sendData}>
        <div className="data">
          <label>
            <b>Имя отправителя *</b>
            <input
              type="text"
              placeholder="Введите имя"
              required
              onChange={changeInput}
              name="client_fio"
              value={zakaz.client_fio}
            />
          </label>
          <label>
            <b>Телефон отправителя *</b>
            <input
              type="text"
              placeholder="Введите номер телефона"
              required
              name="client_phone"
              onChange={changeInput}
              value={zakaz.client_phone}
            />
          </label>
        </div>
        <div className="types">
          <div className="choice">
            <h5>Доставка</h5>
            <div className="choice__inner" onClick={() => setOne(0)}>
              <div>{one === 0 && <img src={good} alt="" />}</div>
              <p>Самовывоз</p>
            </div>
            <div className="choice__inner" onClick={() => setOne(1)}>
              <div>{one === 1 && <img src={good} alt="" />}</div>
              <p>Доставка</p>
            </div>
          </div>
          <div className="choice">
            <h5>Тип оплаты</h5>
            <div className="choice__inner" onClick={() => clickPay(1)}>
              <div>{zakaz?.type_pay === 1 && <img src={good} alt="" />}</div>
              <p>Наличными</p>
            </div>
            <div className="choice__inner" onClick={() => clickPay(2)}>
              <div>{zakaz?.type_pay === 2 && <img src={good} alt="" />}</div>
              <p>Картой</p>
            </div>
            {zakaz?.type_pay ===2 &&
                <>
                  <div className='pay_method'>
                    <h5>Выберите способ оплаты</h5>
                    <div className="choice__inner" onClick={() => clickMethodPay(1)}>
                      <div>{zakaz?.method_pay === 1 && <img src={good} alt=""/>}</div>
                      <p>MBANK</p>
                    </div>

                    <div className="choice__inner" onClick={() => clickMethodPay(2)}>
                      <div>{zakaz?.method_pay === 2 && <img src={good} alt=""/>}</div>
                      <p>Эльсом</p>
                    </div>

                    <div className="choice__inner" onClick={() => clickMethodPay(3)}>
                      <div>{zakaz?.method_pay === 3  && <img src={good} alt=""/>}</div>
                      <p>Visa/Mastercard/Элкарт</p>
                    </div>

                    <div className="choice__inner" onClick={() => clickMethodPay(4)}>
                      <div>{zakaz?.method_pay === 4 && <img src={good} alt=""/>}</div>
                      <p>О! деньги</p>
                    </div>
                  </div>
                </>}
          </div>
        </div>
        {one === 1 && (
            <>
              <label>
                <b>Введите точный адрес</b>
                <input
                    type="text"
                placeholder="Ваш адрес"
                onChange={changeInput}
                required
                name="address_to"
                value={zakaz.address_to}
              />
            </label>
          </>
        )}

        <label>
          <b>Добавить комментарий</b>
          <input
            type="text"
            placeholder="комментарий"
            onChange={changeInput}
            name="zakaz_comment"
            value={zakaz.zakaz_comment}
          />
        </label>
        <button type="submit">
          ЗАПОЛНИТЕ ВСЕ ДАННЫЕ ДЛЯ ОФОРМЛЕНИЯ ЗАКАЗА
        </button>
      </form>
    </div>
  );
};

export default SendDataOrder;
