import '../styles/components/Main.scss'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
const Main = () => {
  return (
    <div>
      <CurrentWeather />
      <Forecast type="hourly" title="HOURLY FORECAST"/>
      <Forecast type="dail" title="21 days forecast"/>
    </div>
  )
}

export default Main