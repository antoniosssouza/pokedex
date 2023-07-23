import './styles.scss';
import { FiMenu, FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className='header'>
        <FiMenu size={40} className="header__leftSection" alt="menu" />
        <img className="header__middleSection" src="logo.svg" alt="Pokemón logo" />
        <form className="header__rightSection">
            <input type="search" />
        </form>
    </div>
  )
}

export default Header