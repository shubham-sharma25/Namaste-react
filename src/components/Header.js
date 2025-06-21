import {useState} from 'react';
import {LOGO_URL} from '../utils/constants';
const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login');
    const setLogin = () => {
        setLoginBtn(loginBtn === 'Login' ? 'Logout' : 'Login');
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>
                        <button className="login" onClick={setLogin}>{loginBtn}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header