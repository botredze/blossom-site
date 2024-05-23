import React from "react";
import './MobileMenuArea.scss'
import {listCategory} from "../../helpers/dataArr";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleMenu} from "../../store/reducers/typesSlice";

const MobileMenuArea = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { toggleActive } = useSelector(state => state.typesSlice);

    const clickCategory = (obj) => {
        dispatch(toggleMenu(false));
        navigate(obj?.link);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <div className='menu-area'>
            <div className='menu-area__inner'>
                <ul className="category">
                    {listCategory.map((categ) => (
                        <li onClick={() => clickCategory(categ)} key={categ?.id}>
                            {categ?.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default MobileMenuArea
