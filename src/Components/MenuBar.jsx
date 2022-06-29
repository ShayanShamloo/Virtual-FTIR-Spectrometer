import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import {ReactComponent as RLLogo} from '../RastonLab-Logo-Full-Rainbow-Draft.svg';

export default function MenuBar() {

    // https://blog.logrocket.com/creating-multilevel-dropdown-menu-react/

    return (
        <div className="nav-area">
            <RLLogo className='logo' width={'58'} viewBox='-10 -158 100 400'/>
            <p className='logo'>The Raston Lab: FTIR</p>
            <nav>
                <ul className="menus">
                    {menuItems.map((menu, index) => {
                        return (
                            <MenuItems items={menu} key={index} />
                        );
                    })}
                </ul>
            </nav>
        </div>
    );

}