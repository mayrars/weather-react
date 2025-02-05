import { useState, createContext, useEffect } from 'react';
import { DEFAULT_PLACE, MEASURAMENT_SYSTEMS, UNITS } from '../constants';
import { getWeatherData } from '../api';

const WeatherContext = createContext();

function WeatherProvider({children}) {
    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading, setLoading] = useState(true);
    const [currentWeather, setCurrentWeather] =useState({})
    const [hourlyForecast, sethHourlyForecast] =useState([])
    const [dailyForecast, setDailyForecast] =useState([])
    const [measuramentSystem, setMeasuramentSystem] = useState(MEASURAMENT_SYSTEMS.AUTO)

    const [units, setUnits] = useState({})

    useEffect(() =>{
        async function _getWeatherData() {
            setLoading(true);
            const cw = await getWeatherData(
                'current',
                place.place_id,
                measuramentSystem
            );
            console.log(cw);
            setCurrentWeather(cw.current);
            setUnits(UNITS[cw.units]);
            const hf = await getWeatherData(
                'hourly',
                place.place_id,
                measuramentSystem
            );
            sethHourlyForecast(hf.hourly.data);
            const df = await getWeatherData(
                'daily',
                place.place_id,
                measuramentSystem
            );
            setDailyForecast(df.daily.data);
            setLoading(false);
        }
        _getWeatherData()
    },[place, measuramentSystem])
    return (
        <WeatherContext.Provider 
            value={{
                place, 
                loading, 
                currentWeather, 
                hourlyForecast, 
                dailyForecast, 
                measuramentSystem, 
                setMeasuramentSystem,
                units,    
            }}>
            {children}
        </WeatherContext.Provider>
    );
}


export {WeatherProvider};
export default WeatherContext;
