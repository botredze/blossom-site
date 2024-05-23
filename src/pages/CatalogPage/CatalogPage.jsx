import React from "react";
import "./CatalogPage.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getRose,
  getTopCategory,
  getTopFlowers,
} from "../../store/reducers/requestSlice";
import { NavLink } from "react-router-dom";
import hit from "../../assets/none/hit.webp";
import rose from "../../assets/none/rose.webp";
import pions from "../../assets/none/pions.webp";
import inKorobka from "../../assets/none/inKorobka.webp";
import nam from "../../assets/none/nam.webp";
import tulpan from "../../assets/none/tulpan.webp";
import gipsofils from "../../assets/none/gipsofils.webp";
import EveryCard from "../../components/EveryCard/EveryCard";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const arrImg = [hit, rose, pions, inKorobka, nam, tulpan, gipsofils];

  const { listTopCategory, listRose, morelist } = useSelector(
    (state) => state.requestSlice
  );

  React.useEffect(() => {
    dispatch(getTopCategory());
    dispatch(getRose());
    dispatch(getTopFlowers());
    window.scrollTo(0, 0);
  }, []);

  // console.log(listTopCategory, "listTopCategory");
  // console.log(listRose, "listRose");

  return (
    <div className="catalogPage">
      <div className="container">
        <div className="catalogPage__inner">
          <div className="navigateWeb">
            <NavLink to={"/"}>Доставка цветов</NavLink>
            <span>Каталог</span>
          </div>
          <h3 className="title">Популярные категории</h3>
          <div className="topCategory">
            {listTopCategory?.map((i, ind) => (
              <NavLink
                key={i?.codeid}
                to={`/other/${i?.codeid}/${i?.category_name}`}
              >
                <div className="flowersImg">
                  <img src={arrImg[ind]} alt="" />
                </div>
                <div className="actionsClick">
                  <i></i>
                  <p>{i?.category_name}</p>
                </div>
              </NavLink>
            ))}
          </div>
          {listRose?.length !== 0 && (
            <div className="mainList">
              <h3 className="title">Розы</h3>
              <div className="list">
                {listRose?.map((i) => (
                  <EveryCard key={i.codeid} content={i} />
                ))}
              </div>
            </div>
          )}
          {/* <h3 className="title">Розы</h3>
          <div className="topCategory">
            {listRose?.map((i, ind) => (
              <NavLink key={i?.codeid}>
                <div className="flowersImg">
                  <img src={arrImg[ind]} alt="" />
                </div>
                <div className="actionsClick">
                  <i></i>
                  <p>{i?.category_name}</p>
                </div>
              </NavLink>
            ))}
          </div> */}
          {morelist?.length !== 0 && (
            <div className="mainList">
              <h3 className="title">Популярные цветы</h3>
              <div className="list">
                {morelist?.map((i) => (
                  <EveryCard key={i.codeid} content={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CatalogPage;
