import React from "react";
import "./DetailedPage.scss";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {getEveryData, getSweets} from "../../store/reducers/requestSlice";
import altImg from "../../assets/images/no_photo.jpg";
import star from "../../assets/icons/star.svg";
import {renderStars} from "../../helpers/renderStar";
import CallMe from "../../components/CallMe/CallMe";
import MoreInfo from "../../components/MoreInfo/MoreInfo";
import EveryCard from "../../components/EveryCard/EveryCard";
import {imgParse} from "../../helpers/imgParse";
import {changeAlertText} from "../../store/reducers/stateSlice";
import {addListBasket} from "../../store/reducers/saveDataSlice";
import {useState} from "react";
import PayOneClick from "../../components/PayOneClick/PayOneClick";
import AddToSweets from "../../components/AddToSweets/AddToSweets";

const DetailedPage = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [look, setLook] = useState(false);
    const {everyFlowers, listSweets} = useSelector(
        (state) => state.requestSlice
    );

    React.useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getEveryData(id));
        dispatch(getSweets());
    }, []);

    const addCardBasket = () => {
        dispatch(addListBasket(everyFlowers));
        navigate("/basket");
        dispatch(
            changeAlertText({
                text: "Товар был добавлен в корзину",
                backColor: "#c14e77",
                state: true,
            })
        );
    };

    return (
        <div className="detailedPage">
            <div className="container">
                <div className="navigateWeb">
                    <NavLink to={"/"}>Доставка цветов</NavLink>
                    {everyFlowers?.category_name && (
                        <NavLink to={-1}>{everyFlowers?.category_name}</NavLink>
                    )}
                    <span>{everyFlowers?.product_name}</span>
                </div>
                <div className="detailedPage__inner">
                    <div className="mainImgflowers">
                        <img
                            src={
                                imgParse(everyFlowers?.foto)?.path
                                    ? `http://operator.blossom.333.kg/${
                                        imgParse(everyFlowers?.foto)?.path
                                    }`
                                    : altImg
                            }
                            alt="Картинка"
                        />
                    </div>
                    <div className="mainContent">
                        <h5>{everyFlowers?.product_name}</h5>
                        <div className="star">
                            {renderStars(5, star)}
                            <b> / 0 отзыва</b>
                        </div>
                        <div className="priceflowers">
                            <p>Цена: </p> <span>{everyFlowers?.product_price} сом</span>
                        </div>
                        <div className="sostav">
                            <p>Состав: </p>
                            <span>{everyFlowers?.sostav}</span>
                        </div>
                        <div className="actionsBtn">
                            <button onClick={() => setLook(true)}>Купить в 1 клик</button>
                            <button onClick={addCardBasket}>+ Добавить в корзину</button>
                            {look && (
                                <PayOneClick
                                    setLook={setLook}
                                    content={everyFlowers}
                                    look={look}
                                />
                            )}
                        </div>
                    </div>
                </div>

                <h3 className="title">Добавьте к букету</h3>
                <AddToSweets key= {id} cards={listSweets}/>
                <CallMe/>
                {/* <VideoInfo /> */}
            </div>
            <MoreInfo />
        </div>
    );
};

export default DetailedPage;
