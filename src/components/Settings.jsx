import { useContext } from 'react'
import '../styles/components/Settings.scss'
import ThemeContext from '../context/theme-context'
const Settings = () => {
  const {dark, setDark, saveThemeLocalStorage} = useContext(ThemeContext)

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark)
    saveThemeLocalStorage(!dark)
  }
  return (
    <div className="Settings">
      <div className="theme-toggler">
        <div className="theme-buttons" onClick={toggleTheme}>
          <div className={`light-theme-btn ${dark ? '' : 'active'}`}>
            <i className="bi bi-sun"></i>
          </div>
          <div className={`dark-theme-btn ${dark ? 'active' : ''}`}>
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </div>
      <div className="settings-btn">
        <i className="bi bi-gear-fill"></i>
      </div>
    </div>
  )
}

export default Settings