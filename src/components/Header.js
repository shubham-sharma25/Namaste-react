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
        <div className="flex justify-between shadow-lg bg-pink-50">
            <div className="logo-container">
                <img
                    className="w-24 h-24 rounded-full m-2"
                    src={LOGO_URL}
                />
            </div>
            <div className="flex items-center justify-between">
                <ul className="flex p-4 m-4">
                    <li className="p-2 m-2 font-bold">
                        Online Status: {onlineStatus? '✅' : '❌'}
                    </li>
                    <li className="p-2 m-2 font-bold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-2 m-2 font-bold">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="p-2 m-2 font-bold">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="p-2 m-2 font-bold">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="p-2 m-2 font-bold">Cart</li>
                    <li className="p-2 m-2 font-bold">
                        <button className="p-2 border border-black rounded-lg cursor-pointer" onClick={setLogin}>{loginBtn}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header