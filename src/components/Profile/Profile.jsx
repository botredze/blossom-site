import { useDispatch, useSelector } from "react-redux";
import "./Profile.scss";
import { useEffect } from "react";
import { getProfile } from "../../store/reducers/requestSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const codeid = useSelector((state) => state.authSlice.codeid);
  const profileData = useSelector((state) => state.authSlice.profileData);

  useEffect(() => {
    if (codeid) {
      dispatch(getProfile(codeid));
    }
  }, [codeid, dispatch]);

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <div className="wrapper_profile">
      <div className="profile">
        <div className="container">
          <div className="profile__inner">
            <h3 className="card_title">Профиль</h3>
            {profileData ? (
              <div className="card_content">
                <div className="item">
                  <label>Email: </label>
                  <p className="item_desc">{profileData.email}</p>
                </div>
                <div className="item">
                  <label>Имя: </label>
                  <p className="item_desc">{profileData.client_fio}</p>
                </div>
                <div className="item">
                  <label>Номер телефона: </label>
                  <p className="item_desc">{profileData.client_phone}</p>
                </div>
                <div className="item">
                  <label>Адресс: </label>
                  <p className="item_desc">{profileData.client_address}</p>
                </div>
              </div>
            ) : (
              <p>Загрузка профиля...</p>
            )}
          </div>
        </div>
      </div>
      <button className="logout" onClick={handleLogout}>
        Выйти
      </button>
    </div>
  );
};

export default Profile;
