import React from "react";
import { NavLink } from "react-router-dom";
import "./RosePage.scss";
import { getRoseSort } from "../../store/reducers/requestSlice";
import { useDispatch, useSelector } from "react-redux";
import EveryCard from "../../components/EveryCard/EveryCard";
import arrow from "../../assets/icons/arrowSort.svg";
import CallMe from "../../components/CallMe/CallMe";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import MoreInfo from "../../components/MoreInfo/MoreInfo";

const RosePage = () => {
  const dispatch = useDispatch();

  const { listSortRose } = useSelector((state) => state.requestSlice);

  const typeRose = [
    { id: 5, name: "Голландские" },
    { id: 6, name: "25 роз" },
    { id: 7, name: "51 роза" },
    { id: 8, name: "101 роза" },
    { id: 9, name: "В коробке" },
  ];

  React.useEffect(() => {
    dispatch(getRoseSort());
    window.scrollTo(0, 0);
  }, []);

  // console.log(listSortRose, "listSortRose");

  return (
    <div className="rosePage">
      <div className="container">
        <div className="rosePage__inner">
          <div className="navigateWeb">
            <NavLink to={"/"}>Доставка цветов</NavLink>
            <span>Розы</span>
          </div>
          <div className="choiceFlowers"></div>
          <h4>Розы</h4>
          <ul className="categoryType categoryTypeMore ">
            {typeRose?.map((i) => (
              <li key={i.id}>
                <p>{i?.name}</p>
              </li>
            ))}
          </ul>
          <div className="sortPrice">
            <div>
              <h4>Сортировка по: </h4>
              <button>
                <p>Цене</p>
                <img src={arrow} alt=">" />
              </button>
              <button>
                <p>Рейтингу</p>
                <img src={arrow} alt="<" />
              </button>
            </div>
          </div>
          {listSortRose?.length !== 0 && (
            <>
              <div className="mainList">
                <div className="list">
                  {listSortRose?.map((i) => (
                    <EveryCard key={i.codeid} content={i} />
                  ))}
                </div>
              </div>
            </>
          )}
          {/*<CallMe />*/}
          <VideoInfo />
        </div>
      </div>
      <MoreInfo />
    </div>
  );
};

export default RosePage;
