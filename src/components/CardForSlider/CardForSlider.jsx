import React, { useState } from "react";
import "./CardForSlider.scss";
import noImg from "../../assets/images/no_photo.jpg";
import heartBlack from "../../assets/icons/heartBlack.svg";
import heartRed from "../../assets/icons/heartRed.svg";
import star from "../../assets/icons/star.svg";
import { renderStars } from "../../helpers/renderStar";
import { useDispatch, useSelector } from "react-redux";
import {
    addListBasket,
    changeFavorites,
} from "../../store/reducers/saveDataSlice";
import { useNavigate } from "react-router-dom";
import { imgParse } from "../../helpers/imgParse";
import { changeAlertText } from "../../store/reducers/stateSlice";
import PayOneClick from "../PayOneClick/PayOneClick";

const CardForSlider = ({ content }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [look, setLook] = useState(false);
    const { listfavorites, listBasket } = useSelector(
        (state) => state.saveDataSlice
    );

    const deleteCard = (id) => {
        const updatedFavorites = listfavorites.filter((item) => item.codeid !== id);
        dispatch(changeFavorites(updatedFavorites));
    };

    const addCard = (obj) => {
        dispatch(changeFavorites([...listfavorites, obj]));
    };

    const addCardBasket = () => {
        dispatch(addListBasket(content));
        navigate("/basket");
        dispatch(
            changeAlertText({
                text: "Товар был добавлен в корзину",
                backColor: "#c14e77",
                state: true,
            })
        );
    };

    const clickDetailed = () => {
        navigate(`/every/${content?.codeid}`);
    };

    return (
        <div className="cardForSlider">
            <div className="imgs">
                <div className="mainImg">
                    <img
                        src={
                            imgParse(content.foto)?.path
                                ? `https://operator.blossom.333.kg/${
                                    imgParse(content.foto)?.path
                                }`
                                : noImg
                        }
                        alt="Картинка"
                    />
                </div>
                <div className="heart">
                    {listfavorites?.some((item) => item?.codeid === content?.codeid) ? (
                        <div
                            className="deleteImg"
                            onClick={() => deleteCard(content?.codeid)}
                        >
                            <img src={heartRed} alt="" />
                        </div>
                    ) : (
                        <div className="addImg" onClick={() => addCard(content)}>
                            <img src={heartBlack} alt="" />
                        </div>
                    )}
                </div>
            </div>
            <div className="info">
                <div className="moreInfo" onClick={clickDetailed}>
                    <h3>{content?.product_name}</h3>
                    <div className="rating">
                        <div className="star">
                            {renderStars(5, star)}
                            <b> / 0</b>
                        </div>
                    </div>
                    <span>
              {+content?.status === 0 ? "В наличии" : "нет в наличии"}
            </span>
                    <p>{content?.product_price} сом</p>
                </div>
                <div className="actions">
                    <button onClick={() => setLook(true)}>Купить</button>
                    <button onClick={addCardBasket}>В корзину</button>
                </div>
            </div>
            {look && <PayOneClick setLook={setLook} content={content} look={look} />}
        </div>
    );
};

export default CardForSlider;
