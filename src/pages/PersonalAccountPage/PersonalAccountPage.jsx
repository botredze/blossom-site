import './PersonalAccountPage.scss'
import {NavLink} from "react-router-dom";
import React from "react";
import Profile from "../../components/Profile/Profile";
const PersonalAccountPage = () => {

    const order_history = []
    const headerText = [
        {
            id: 1,
            name: '#'
        },
        {
            id: 2,
            name: 'Номер заказа'
        },
        {
            id: 3,
            name: 'Название продукта'
        },
        {
            id: 4,
            name: 'Дата заказа'
        },
        {
            id: 5,
            name: 'Сумма заказа'
        },
    ]
    return (
        <div className='personal-account'>
            <div className='container'>
                <div className="navigateWeb">
                    <NavLink to={"/"}>Доставка цветов</NavLink>
                    <span>Личный кабинет</span>
                </div>
                <div className='personal-account__inner'>
                    <Profile />
                    <div className='order_history'>
                        <p>История заказов</p>
                        <table>
                            <thead>
                            <tr>
                                {headerText.map(head => (
                                    <th key={head.id}>{head.name}</th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {order_history.map((his, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{his.code_zakaz}</td>
                                    <td>{his.product_name}</td>
                                    <td>{his.formatted_zakaz_date}</td>
                                    <td>{his.zakaz_summ}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalAccountPage
