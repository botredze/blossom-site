import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./OtherFlowersPage.scss";
import { getOtherData } from "../../store/reducers/requestSlice";
import { useDispatch, useSelector } from "react-redux";
import EveryCard from "../../components/EveryCard/EveryCard";
import arrow from "../../assets/icons/arrowSort.svg";
import CallMe from "../../components/CallMe/CallMe";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import MoreInfo from "../../components/MoreInfo/MoreInfo";

const OtherFlowersPage = () => {
  const dispatch = useDispatch();
  const { id, name } = useParams();
  const { otherData } = useSelector((state) => state.requestSlice);

  // console.log(id, name);
  React.useEffect(() => {
    // window.location.reload();
    dispatch(getOtherData(id));
    window.scrollTo(0, 0);
  }, []);
  // console.log(otherData, "otherData");

  return (
    <div className="rosePage">
      <div className="container">
        <div className="rosePage__inner">
          <div className="navigateWeb">
            <NavLink to={"/"}>Доставка цветов</NavLink>
            <span>{name}</span>
          </div>
          {/* <div className="choiceFlowers"></div> */}
          <h4>{name}</h4>
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
          {otherData?.length === 0 ? (
            <p className="absent">Данные отсутствуют</p>
          ) : (
            <>
              <div className="mainList">
                <div className="list">
                  {otherData?.map((i) => (
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

export default OtherFlowersPage;
