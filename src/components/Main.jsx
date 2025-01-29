import '../styles/components/Main.scss'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import { getDailyForecast, getHourlyForecast } from '../api'
const Main = () => {
  return (
    <div>
      <CurrentWeather />
      <Forecast type="hourly" title="HOURLY FORECAST" data={getHourlyForecast()}/>
      <Forecast type="dail" title="21 days forecast" data={getDailyForecast()}/>
    </div>
  )
}

export default Main