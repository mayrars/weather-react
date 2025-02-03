import { useContext } from 'react'
import '../styles/components/Main.scss'
import CurrentWeather from './CurrentWeather'
import Forecast from './Forecast'
import { getDailyForecast, getHourlyForecast } from '../api'
import WeatherContext from '../context/weather.context'
import Loader from './Loader'
const Main = () => {
  const {loading} = useContext(WeatherContext)
  return (
    <div className='Main'>
      {loading ? 
        <Loader /> :
        <>
          <CurrentWeather />
          <Forecast type="hourly" title="HOURLY FORECAST" data={getHourlyForecast()}/>
          <Forecast type="dail" title="21 days forecast" data={getDailyForecast()}/>
        </>
      }
    </div>
  )
}

export default Main