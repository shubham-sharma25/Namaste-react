import {useState} from 'react';
import {Link} from "react-router-dom";
import {LOGO_URL} from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [loginBtn, setLoginBtn] = useState('Login');
    const setLogin = () => {
        setLoginBtn(loginBtn === 'Login' ? 'Logout' : 'Login');
    }
    const onlineStatus = useOnlineStatus();
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
                    <li>
                        Online Status: {onlineStatus? '✅' : '❌'}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
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