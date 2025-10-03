// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const navClass = isDarkTheme ? 'nav-header light' : 'nav-header dark'
      const logoSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeIcon = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const linkClass = isDarkTheme ? 'light' : 'dark'

      return (
        <nav className={navClass}>
          <div className="nav-content">
            <img src={logoSrc} alt="website logo" className="website-logo" />
            <ul className="nav-menu">
              <li>
                <Link to="/" className={`nav-link ${linkClass}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`nav-link ${linkClass}`}>
                  About
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="theme-btn"
              onClick={toggleTheme}
              data-testid="theme"
            >
              <img src={themeIcon} alt="theme toggle" className="theme-icon" />
            </button>
          </div>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
