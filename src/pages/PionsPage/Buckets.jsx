import React from "react";
import { NavLink } from "react-router-dom";
import "./PionsPage.scss";
import { getPions } from "../../store/reducers/requestSlice";
import { useDispatch, useSelector } from "react-redux";
import EveryCard from "../../components/EveryCard/EveryCard";
import arrow from "../../assets/icons/arrowSort.svg";
import CallMe from "../../components/CallMe/CallMe";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import MoreInfo from "../../components/MoreInfo/MoreInfo";

const Buckets = () => {
  const dispatch = useDispatch();
  const { listPions } = useSelector((state) => state.requestSlice);

  React.useEffect(() => {
    dispatch(getPions());
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rosePage">
      <div className="container">
        <div className="rosePage__inner">
          <div className="navigateWeb">
            <NavLink to={"/"}>Доставка цветов</NavLink>
            <span>Микс букеты</span>
          </div>
          {/* <div className="choiceFlowers"></div> */}
          <h4>Микс букеты</h4>
          <div className="sortPrice moreSort">
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
          {listPions?.length !== 0 && (
            <>
              <div className="mainList">
                <div className="list">
                  {listPions?.map((i) => (
                    <EveryCard key={i.codeid} content={i} />
                  ))}
                </div>
              </div>
            </>
          )}
          <CallMe />
          <VideoInfo />
        </div>
      </div>
      <MoreInfo />
    </div>
  );
};

export default Buckets;
