// import React, {useState} from 'react';
// import './CallMe.scss';
// import { useMask } from '@react-input/mask';
// import InputMask from "react-input-mask";
//
// const CallMe = () => {
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const handleInputChange = (e) => {
//         const inputNumber = e.target.value.replace(/\D/g, "");
//         setPhoneNumber(inputNumber);
//     };
//
//     return (
//         <form className="callMe">
//             <h5>Оставьте заявку мы соберем для вас идеальный букет</h5>
//             <div>
//                 <b>Заполните форму и мы свяжемся с</b>
//                 <b>Вами в ближайшее время.</b>
//             </div>
//             <div>
//                 <InputMask
//                     className='phoneInput'
//                     mask="+999(999)99-99-99"
//                     placeholder="+996(___)--__"
//                     name="number"
//                     onChange={handleInputChange}
//                     required
//                     value={phoneNumber?.number}
//                 />
//             </div>
//             <button>Отправить заявку</button>
//         </form>
//     );
// };
//
// export default CallMe;


import React from 'react';
import './CallMe.scss';

const CallMe = () => {
    return (
        <div className="callMe">
            <div>
                <h5>Сомневаетесь в выборе?</h5>
                <p>
                    Мы поможем определиться и сделаем <b>скидку 10%</b> на первый заказ
                </p>
                <button>ПРОЙТИ ТЕСТ ЗА 1 МИНУТУ</button>
            </div>
        </div>
    );
};

export default CallMe;
