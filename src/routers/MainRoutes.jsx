import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import Alerts from "../components/Alerts/Alerts";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import RosePage from "../pages/RosePage/RosePage";
import PionsPage from "../pages/PionsPage/PionsPage";
import OtherFlowersPage from "../pages/OtherFlowersPage/OtherFlowersPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import DetailedPage from "../pages/DetailedPage/DetailedPage";
import FavotitePage from "../pages/FavotitePage/FavotitePage";
import BasketPage from "../pages/BasketPage/BasketPage";
import LichnyjKabinet from "../pages/Lichnyj-kabinet/Lichnyj-kabinet";
import PersonalAccountPage from "../pages/PersonalAccountPage/PersonalAccountPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayouts />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/rose" element={<RosePage />} />
          <Route path="/pions" element={<PionsPage />} />
          <Route path="/every/:id" element={<DetailedPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/other/:id/:name" element={<OtherFlowersPage />} />
          <Route path="/favorite" element={<FavotitePage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/kabinet" element={<LichnyjKabinet/>}/>
          <Route path='/personalAccount' element={<PersonalAccountPage/>}/>
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <MoreInfo /> */}
      {/* {true && <Preloader />} */}
      <Alerts />
    </>
  );
};

export default MainRoutes;
