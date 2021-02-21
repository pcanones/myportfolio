import './patrickstyles.css';
import backgroundpic from './the-matrix.jpg';
import strawhat from './strawhats.jpg';
import {Link} from 'react-router-dom';

function Landing() {
  return (
    <div id="container">
        <img id="backgroundpic" src={backgroundpic} />
        
        <div id="section">
            <div id="profilepic">	
                <img src={strawhat} />
            </div>
            <div id="about">
                <h2>About Me</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo	consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est 
                    laborum.
                </p>
            </div>
        
        </div>
        
        <div id="social">
            <h2>Clout Links</h2>
            <ul>
                <li><a href="https://www.facebook.com/" target="_blank">Zuckerburg</a></li>
                <li><a href="https://www.youtube.com/" target="_blank">PewdiePie</a></li>
                <li><a href="https://www.google.com/" target="_blank">Alphabet</a></li>
            </ul>
        </div>

        <div>
            <h2>Projects</h2>
            <Link to="/counter">Counter</Link>
        </div>
    </div>
  );
}

export default Landing;
