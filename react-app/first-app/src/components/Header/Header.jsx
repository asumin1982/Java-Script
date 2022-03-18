import h from "./Header.module.css";
import defaultStyle from '../../DefaultStyle/DefaultStyle.module.css'

// Создаем компоненту Header
const Header = () =>{
    return (
        <header className={`${defaultStyle.defaultStyle} ${h.header}`}>
            Header
        </header>
    );
};
//
export default Header;