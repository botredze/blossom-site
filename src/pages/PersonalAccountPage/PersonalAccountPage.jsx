import "./PersonalAccountPage.scss";
import { NavLink, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import Profile from "../../components/Profile/Profile";
import { useSelector } from "react-redux";
import { getOrderHistory } from "../../store/reducers/requestSlice";
import { useDispatch } from "react-redux";

const PersonalAccountPage = () => {
  const codeid = useSelector((state) => state.authSlice.codeid);

  const dispatch = useDispatch();
  const { get_order_history, isLoading, error } = useSelector(
    (state) => state.requestSlice
  );

  console.log(get_order_history);

  const headerText = [
    {
      id: 1,
      name: "#",
    },
    {
      id: 2,
      name: "Номер заказа",
    },
    {
      id: 3,
      name: "Название продукта",
    },
    {
      id: 4,
      name: "Дата заказа",
    },
    {
      id: 5,
      name: "Сумма заказа",
    },
  ];

  useEffect(() => {
    if (codeid) {
      dispatch(getOrderHistory({ codeid }));
    }
  }, [codeid, dispatch]);

  return (
    <div className="personal-account">
      <div className="container">
        <div className="navigateWeb">
          <NavLink to={"/"}>Доставка цветов</NavLink>
          <span>Личный кабинет</span>
        </div>
        <div className="personal-account__inner">
          <Profile />
          <div className="order_history">
            <p>История заказов</p>
            {isLoading ? (
              <p>Загрузка...</p>
            ) : error ? (
              <p>Ошибка: {error}</p>
            ) : get_order_history.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    {headerText.map((head) => (
                      <th key={head.id}>{head.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {get_order_history.map((his, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{his.zakaz_number}</td>
                      <td>{his.product_name}</td>
                      <td>{his.formatted_zakaz_date}</td>
                      <td>{his.zakaz_summ}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>История заказов не найдена</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalAccountPage;
