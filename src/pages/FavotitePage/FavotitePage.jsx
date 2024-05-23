import React from "react";
import "./FavotitePage.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import EveryCard from "../../components/EveryCard/EveryCard";

const FavotitePage = () => {
  const { listfavorites } = useSelector((state) => state.saveDataSlice);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="favotitePage">
      <div className="container">
        <div className="navigateWeb">
          <NavLink to={"/"}>Доставка цветов</NavLink>
          <span>Избранные товары</span>
        </div>
        <h3 className="title">Избранные товары</h3>
        <div className="favotitePage__inner">
          {+listfavorites?.length === 0 ? (
            <div className="noneBlock">Нет избранных товаров.</div>
          ) : (
            <>
              {/* <h4>Понравилось</h4> */}
              <div className="list">
                {listfavorites?.map((i) => (
                  <EveryCard key={i.codeid} content={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FavotitePage;
