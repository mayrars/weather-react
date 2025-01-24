import Header from "./components/Header"
import Main from "./components/Main"
import Weather from "./components/Weather"

const App = () => {
  const dark = false
  return (
    <div className={`App-${dark ? 'dark' : 'light'}`}>
      <Header />
      <Main />
      <Weather />  
    </div>
  )
}

export default App