import '../styles/components/CurrentWeather.scss'
import { getCurrentWeather } from '../api';
import WeatherIcon from './WeatherIcon';
const CurrentWeather = () => {
  const data = getCurrentWeather();
  const {
    cloud_cover, feels_like, humidity, icon_num, precipitation, summary, temperature, uv_index, visibility, wind
  }= data
  console.log(data);
  const otherInfoWidgets = [
    {
      id:0,
      icon: 'droplet',
      name: 'Precipitation',
      value: Math.round(precipitation.total),
      unit: "in/h"
    },
    {
      id:1,
      icon: 'wind',
      name: 'Wind',
      value: Math.round(wind.speed),
      unit: "mph"
    },
    {
      id:2,
      icon: 'moisture',
      name: 'Humidity',
      value: Math.round(humidity),
      unit: "%"
    },
    {
      id:3,
      icon:'sunglasses',
      name: 'UV Index',
      value: Math.round(uv_index),
      unit: ''
    },
    {
      id:4,
      icon: 'cloud-fill',
      name: 'Cloud Cover',
      value: Math.round(cloud_cover),
      unit: "%"
    },
    {
      id:5,
      icon: 'eye',
      name: 'Visibility',
      value: Math.round(visibility),
      unit: "mi"
    }
  ]
  return (
    <div className='CurrentWeather'>
      <div className='temperature'>
        <div className="weather-icon">
          <WeatherIcon iconNumber={icon_num} alt={summary}/>
        </div>
        <div className='value'>
          <div className="real">{temperature} °C</div>
          <div className="feels_like">feels like {feels_like} °C</div>
        </div>
        <div className="summary">{summary}</div>
      </div>
      <div className='other-infos'>
        {
          otherInfoWidgets.map((widget) =>{
            return <div className='widget' key={widget.id}>
              <div className="widget-container">
                <div className="info">
                  <div className="icon">
                    <i className={`bi bi-${widget.icon}`}></i>
                  </div>
                  <div className="value">{widget.value} {widget.unit}</div>
                </div>
                <div className="name">{widget.name}</div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default CurrentWeather