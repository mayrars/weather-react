const WeatherIcon = ({iconNumber, summary}) => {
  return (
    <img src={`${import.meta.env.VITE_PUBLIC_URL}/dist/set02/big/${iconNumber}.png`} alt={summary} draggable={false}/>
  )
}

export default WeatherIcon