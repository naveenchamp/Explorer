// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const containerClass = isDarkTheme
        ? 'about-container dark'
        : 'about-container light'

      const headingClass = isDarkTheme
        ? 'about-heading dark-text'
        : 'about-heading light-text'

      const imgSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <>
          <Navbar />
          <div className={containerClass}>
            <img src={imgSrc} alt="about" className="about-img" />
            <h1 className={headingClass}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
