import React, { useState } from "react";
import { changeAlertText } from "../../store/reducers/stateSlice";
import { useDispatch } from "react-redux";
import krest from "../../assets/icons/krestikWhite.svg";
import "./PayOneClick.scss";
import "./PayOneClickMobile.scss";
import {createFastZakaz} from "../../store/reducers/requestSlice";

const PayOneClick = ({ setLook, content, look }) => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    const inputNumber = e.target.value.replace(/\D/g, "");
    setPhoneNumber(inputNumber);
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (look && !event.target.closest(".sendZakaz")) {
        setLook(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [look]);


  const click = (e) => {
    e.preventDefault();
    if (content) {
        dispatch(createFastZakaz({...content, phoneNumber}))
    }
    dispatch(
      changeAlertText({
        text: "Ваша заявка была принята, с вами свяжется оператор для уточнения дополнительной информации. ",
        backColor: "#c14e77",
        state: true,
      })
    );
    setLook(false);
  };

  return (
    <form className="sendZakaz" onSubmit={click}>
      <h5>Купить в 1 клик</h5>
      <p>Менеджер свяжется с вами в течение 3 минут</p>
      <input
        type="tel"
        placeholder="Введите ваш номер " ///WhatsApp
        value={phoneNumber}
        onChange={handleInputChange}
        pattern="\d*"
        title="Введите только цифры"
        required
      />
      <button type="submit">Купить в один клик</button>
      <img
        src={krest}
        alt="x"
        onClick={() => setLook(false)}
        className="activeImgOneClick"
      />
    </form>
  );
};

export default PayOneClick;
