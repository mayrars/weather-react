export const DEFAULT_PLACE = {
    name:"Mexico City",
    place_id:"mexico-city",
    adm_area1:"Mexico City",
    adm_area2:null,
    country:"Mexico",
    lat:"19.42847N",
    lon:"99.12766W",
    timezone:"America/Mexico_City",
    type:"settlement"
}

export const MEASURAMENT_SYSTEMS = {
    AUTO: 'auto',
    METRIC: 'metric',
    UK: 'uk',
    US: 'us',
    CA: 'ca'
}

export const UNITS = {
    metric: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'm/s',
      visibility: 'km',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    us: {
      temperature: '°F',
      precipitation: 'in/h',
      wind_speed: 'mph',
      visibility: 'mi',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    uk: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'mph',
      visibility: 'mi',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    ca: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'km/h',
      visibility: 'km',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
  };