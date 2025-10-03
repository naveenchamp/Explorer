// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const containerClass = isDarkTheme
        ? 'notfound-container dark'
        : 'notfound-container light'

      const headingClass = isDarkTheme
        ? 'notfound-heading dark-text'
        : 'notfound-heading light-text'

      const descriptionClass = isDarkTheme
        ? 'notfound-desc dark-text'
        : 'notfound-desc light-text'

      return (
        <>
          <Navbar />
          <div className={containerClass}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notfound-img"
            />
            <h1 className={headingClass}>Lost your way?</h1>
            <p className={descriptionClass}>
              We cannot seem to find the page youre looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
