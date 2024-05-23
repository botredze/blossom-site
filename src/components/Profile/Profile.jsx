import './Profile.scss'
import {NavLink} from "react-router-dom";

const Profile = () => {
    const handleLogout = () => {
        console.log('Logout')
    }

    return (
        <div className='profile'>
            <div className='container'>
                <div className='profile__inner'>
                    <p>Профиль</p>

                    <p className='user_name'>Баатыр Алиев</p>
                    <p className='phone_number'> +996504310622</p>

                    <p className='address'>г.Бишкек ул.Токтоналиева 12 </p>

                    <a href='https://api.whatsapp.com/send?phone=996553931631' className='support' >Служба поддержки </a>

                    <button className='logout' onClick={handleLogout}>Выйти</button>
                </div>
            </div>
        </div>
    )
}

export default Profile
