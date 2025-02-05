import { useState, useContext } from 'react'
import ThemeContext from '../context/theme.context'
import { MEASURAMENT_SYSTEMS } from '../constants'
import '../styles/components/Settings.scss'
import WeatherContext from '../context/weather.context'
const Settings = () => {
  const [openSettings, setOpenSettings] = useState(false)
  const {dark, setDark, saveThemeLocalStorage} = useContext(ThemeContext)

  const {measuramentSystem, setMeasuramentSystem} = useContext(WeatherContext)

  const changeMeasuramentSystem = (system) => {
    setMeasuramentSystem(system)
    setOpenSettings(false)
  }

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
      <div className="settings-btn" onClick={() => setOpenSettings((prevVal) => !prevVal)}>
        <i className={`bi bi-gear${openSettings ? '-fill' : ''}`}></i>
      </div>
      <div className={`settings-menu ${openSettings ? 'open' : ''}`}>
        <div className="measurement-systems">
          <h4>Measurament Systems:</h4>
          <div className="systems">
            {Object.values(MEASURAMENT_SYSTEMS).map((system)=>(
              <div key={system} className={`system ${system===measuramentSystem ? 'active' : ''}`} onClick={()=>changeMeasuramentSystem(system)}>
                {system}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings