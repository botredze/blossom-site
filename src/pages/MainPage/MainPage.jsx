import React from "react";
import "./MainPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSweets, getToys } from "../../store/reducers/requestSlice";
import Advertising from "../../components/Advertising/Advertising";
import MainContent from "../../components/MainContent/MainContent";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import EveryCard from "../../components/EveryCard/EveryCard";

const MainPage = () => {
  const dispatch = useDispatch();

  const { listToys, listSweets } = useSelector((state) => state.requestSlice);

  React.useEffect(() => {
    dispatch(getToys());
    dispatch(getSweets());
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Advertising />
      <MainContent />
      <VideoInfo />
      {listToys?.length !== 0 && (
        <>
          <div className="mainList">
            <div className="container">
              <h3 className="title">Мягкие игрушки</h3>
              <div className="list">
                {listToys?.map((i) => (
                  <EveryCard key={i.codeid} content={i} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      {listSweets?.length !== 0 && (
        <>
          <div className="mainList">
            <div className="container">
              <h3 className="title">Сладости</h3>
              <div className="list">
                {listSweets?.map((i) => (
                  <EveryCard key={i.codeid} content={i} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainPage;
