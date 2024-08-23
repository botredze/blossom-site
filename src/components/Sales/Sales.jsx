import React, { useEffect } from "react";
import "./sales.scss";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getBucketsDiscount } from "../../store/reducers/requestSlice";
import EveryCard from "../EveryCard/EveryCard";
import CallMe from "../CallMe/CallMe";
import VideoInfo from "../VideoInfo/VideoInfo";
import MoreInfo from "../MoreInfo/MoreInfo";

const SalesComponent = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { discountBucket } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    dispatch(getBucketsDiscount());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="navigateWeb">
          <NavLink to={"/"}>Доставка цветов</NavLink>
          <span>Акции</span>
        </div>
        {discountBucket?.length === 0 ? (
          <p className="absent">Данные отсутствуют</p>
        ) : (
          <>
            <div className="mainList">
              <div className="list">
                {discountBucket?.map((i) => (
                  <EveryCard key={i.codeid} content={i} />
                ))}
              </div>
            </div>
          </>
        )}
        <CallMe />
        <VideoInfo />
      </div>
      <MoreInfo />
    </div>
  );
};

export default SalesComponent;
