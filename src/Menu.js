//modules
import {Link} from 'react-router-dom';

//styles
import './Menu.css';


function Menu() {
  return (
    <div id="navigation_container">
			
        <a href="index.html" id="logo_container">
            <span>Logo</span>
        </a>
        
        <div id="menu_container">
            <Link to="/">Home</Link>
            <Link to="/about-me">About Me</Link>
            <Link to="/clout-links">Clout Links</Link>
            <a href="https://facebook.com" target="_blank">Facebook</a>
    
        </div>
    
    </div>
  );
}

export default Menu;