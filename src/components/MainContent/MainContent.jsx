import React from "react";
import "./MainContent.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSortData } from "../../store/reducers/requestSlice";
import EveryCard from "../EveryCard/EveryCard";
import krest from "../../assets/icons/krestikWhite.svg";
import {
  changeListCategory,
  changeListPrice,
  changeLookPrice,
} from "../../store/reducers/stateSlice";

const MainContent = () => {
  const dispatch = useDispatch();
  const { mainList } = useSelector((state) => state.requestSlice);
  const { listPrice, lookPrice, listCategory } = useSelector(
    (state) => state.stateSlice
  );

  React.useEffect(() => {
    const priceObj = listPrice.find((price) => price.active === true);
    const categObj = listCategory.find((category) => category.active === true);
    dispatch(
      getSortData({
        start: priceObj?.start || "",
        end: priceObj?.end || "",
        type: +categObj?.id,
      })
    );
  }, []);

  const clickPrice = (id, start, end) => {
    const newData = listPrice.map((button) => ({
      ...button,
      active: +id === +button.id,
    }));
    dispatch(changeListPrice(newData));
    const obj = listCategory.find((category) => category.active === true);
    dispatch(getSortData({ start, end, type: +obj?.id }));
  };

  const clickCategory = (id) => {
    const newData = listCategory.map((button) => ({
      ...button,
      active: +id === +button.id,
    }));
    dispatch(changeListCategory(newData));
    const obj = listPrice.find((price) => price.active === true);

    dispatch(
      getSortData({ start: obj?.start || "", end: obj?.end || "", type: id })
    );
  };

  // console.log(listPrice, "listPrice");
  return (
    <div className="maincontent">
      <div className="container">
        <div className="maincontent__inner">
          <button onClick={() => dispatch(changeLookPrice(!lookPrice))}>
             Выбрать бюджет
          </button>
          {lookPrice && (
            <div className="priceSort">
              {listPrice?.slice(1, 6)?.map((price) => (
                <div className="priceSort__shadow" key={price?.id}>
                  <div
                    className={`priceSort__every ${
                      price.active ? "activePrice" : ""
                    }`}
                    onClick={() =>
                      clickPrice(price?.id, price.start, price?.end)
                    }
                    key={price?.id}
                  >
                    {price?.name}
                  </div>
                  {price.active && (
                    <img
                      src={krest}
                      alt="x"
                      onClick={() => clickPrice(0, 0, 100000)}
                      className="activeImg"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
          <ul className="categoryType">
            {listCategory?.map((i) => (
              <li
                key={i.id}
                onClick={() => clickCategory(i?.id)}
                className={i?.active ? "activeType" : ""}
              >
                <p>{i?.name}</p>
                {i?.img && <img src={i?.img} alt="выбор" />}
              </li>
            ))}
          </ul>
          <div className="list">
            {mainList?.length === 0 ? (
              <p className="absent">Данные отсутствуют</p>
            ) : (
              <>
                {mainList?.map((i) => (
                  <EveryCard key={i.codeid} content={i} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
