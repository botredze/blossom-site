import './Lichnyj-kabinet.scss'
import {NavLink, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {login, register} from "../../store/reducers/requestSlice";


const LichnyjKabinet = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const [registerState, setRegisterState] = useState(false)
    const navigate = useNavigate();

    const handleSubmit  = (e) =>{
        e.preventDefault();
        dispatch(login({ email, password }, navigate));
    }


    const handleSubmitRegister  = (e) =>{
        e.preventDefault();
        dispatch(register({ email, phone, name, password, address }));
        setRegisterState(false)
    }


    const handleRegister = () => {
        setRegisterState(reg => !reg)
    }

    useEffect(() => {
        localStorage.clear();
    }, []);
    return (
        <div className='lichnyj-kabinet'>
            <div className='container'>
                <div className='lichnyj-kabinet__inner'>
                    <div className="navigateWeb">
                        <NavLink to={"/"}>Доставка цветов</NavLink>
                        <span>Личный кабинет</span>
                    </div>
                    {!registerState &&
                    <div className='form-login'>
                        <h2>Вход</h2>

                        <form onSubmit={handleSubmit}>
                            <label>
                                <b>Имя пользователя или Email</b>
                                <input type="text"
                                       placeholder='Введите email'
                                       required
                                       onChange={(e) => setEmail(e.target.value)}
                                       name='login'
                                       value={email}
                                />
                            </label>

                            <label>
                                <b>Пароль</b>
                                <input type="password"
                                       placeholder='Введите пароль'
                                       required
                                       onChange={(e)=> setPassword(e.target.value)}
                                       name='login'
                                       value={password}
                                />
                            </label>

                            <button type="submit">
                                Войти
                            </button>
                        </form>

                        <div className='forgot-form'>
                            <NavLink to={"/"}>Забыли пароль ?</NavLink>
                            <div onClick={handleRegister}>Регистрация</div>
                        </div>
                    </div>
                    }

                    {registerState &&
                        <div className='register'>
                            <h2>Регистрация</h2>

                            <form onSubmit={handleSubmitRegister}>
                                <label>
                                    <b>ФИО</b>
                                    <input type="text"
                                           placeholder='Введите ФИО'
                                           required
                                           onChange={(e) => setName(e.target.value)}
                                           name='name'
                                           value={name}
                                    />
                                </label>
                                <label>
                                    <b>Имя пользователя или Email</b>
                                    <input type="text"
                                           placeholder='Введите email'
                                           required
                                           onChange={(e) => setEmail(e.target.value)}
                                           name='login'
                                           value={email}
                                    />
                                </label>

                                <label>
                                    <b>Пароль</b>
                                    <input type="password"
                                           placeholder='Введите пароль'
                                           required
                                           onChange={(e) => setPassword(e.target.value)}
                                           name='login'
                                           value={password}
                                    />
                                </label>

                                <label>
                                    <b>Номер телефона</b>
                                    <input type="text"
                                           placeholder='Введите номер телефона'
                                           required
                                           onChange={(e) => setPhone(e.target.value)}
                                           name='phone'
                                           value={phone}
                                    />
                                </label>

                                <label>
                                    <b>Адрес</b>
                                    <input type="text"
                                           placeholder='Введите ваш адрес'
                                           required
                                           onChange={(e) => setAddress(e.target.value)}
                                           name='phone'
                                           value={address}
                                    />
                                </label>

                                <button type="submit">
                                    Зарегестрироваться
                                </button>
                            </form>
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default LichnyjKabinet
