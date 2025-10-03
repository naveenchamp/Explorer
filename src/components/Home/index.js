// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const containerClass = isDarkTheme
        ? 'home-container dark'
        : 'home-container light'
      const imgSrc = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const headingClass = isDarkTheme
        ? 'home-heading dark-text'
        : 'home-heading light-text'

      return (
        <>
          <Navbar />
          <div className={containerClass}>
            <img src={imgSrc} className="home-img" alt="home" />
            <h1 className={headingClass}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
