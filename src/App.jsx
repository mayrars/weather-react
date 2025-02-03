import { useContext } from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import ThemeContext from "./context/theme.context"
import Weather from "./components/Weather"
import './styles/components/App.scss'
import "bootstrap-icons/font/bootstrap-icons.css"

const App = () => {
  const {dark} = useContext(ThemeContext)
  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header />
      <Main />
      <Weather />  
    </div>
  )
}

export default App