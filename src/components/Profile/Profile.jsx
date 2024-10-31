import { useDispatch, useSelector } from "react-redux";
import "./Profile.scss";
import { useEffect, useState } from "react";
import { getProfile } from "../../store/reducers/requestSlice";
import Modal from "../../Ui/Modal/Modal";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const codeid = useSelector((state) => state.authSlice.codeid);
  const profileData = useSelector((state) => state.authSlice.profileData);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const naviage = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    console.log("Logout");
    // Здесь можно добавить логику для выхода
    closeModal();
  };

  const confirmLogout = () => {
    naviage("/");
    console.log("Пользователь вышел");

    handleLogout();
  };

  useEffect(() => {
    if (codeid) {
      dispatch(getProfile(codeid));
    }
  }, [codeid, dispatch]);

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
                  <label>Адрес: </label>
                  <p className="item_desc">{profileData.client_address}</p>
                </div>
              </div>
            ) : (
              <p>Загрузка профиля...</p>
            )}
          </div>
        </div>
      </div>
      <button className="logout" onClick={openModal}>
        Выйти
      </button>

      <Modal
        isVisible={modalIsOpen}
        onClose={closeModal}
        text="Вы уверены, что хотите выйти?"
        backColor="#fff"
        textColor="#000"
        className="modal"
      >
        <div className="modal-footer">
          <button className="confirm-logout" onClick={confirmLogout}>
            Да
          </button>
          <button className="cancel-logout" onClick={closeModal}>
            Нет
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Profile;
