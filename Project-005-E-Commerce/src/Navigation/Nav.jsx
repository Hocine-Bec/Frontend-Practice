import './Nav.css';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ value, handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          onChange={handleInputChange}
          value={value} 
          placeholder='Search For Your Favorite Shoes'
          className='seach-input'
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className='nav-icons' />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className='nav-icons' />
        </a>
        <a href="#">
          <AiOutlineUserAdd className='nav-icons' />
        </a>
      </div>
    </nav>
  )
}

export default Nav;