import axios from 'axios';
export async function getWeatherData(endpoint, place_id,measurementSystem) {

    const options = {
    method: 'GET',
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
        place_id,
        language: 'en',
        units: measurementSystem
    },
    headers: {
        'x-rapidapi-key': '5429963261msh2a15d87840d5f5bp1468d2jsn265821d0744d',
        'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}