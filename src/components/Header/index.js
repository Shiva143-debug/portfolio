import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <button type="button" className="b-name">
        S
      </button>
      <p className="name">Shiva shankara prasad</p>
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            projects
          </Link>
        </li>
        <li>
          <Link to="/contactUs" className="nav-link">
            ContactUs
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)
export default Header
