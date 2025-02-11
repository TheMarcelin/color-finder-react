import Quadrado from "./Quadrado"
import Header from "./Header"
import Examples from "./Examples"
import Input from "./Input"
import { useState } from "react"


function App() {
  const [colorValue, setColorValue] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
      
      <div className="App">
          <Header/>
          <Quadrado 
          colorValue = {colorValue}
          hexValue = {hexValue}
          isDarkText = {isDarkText}
          />
          <Input
            colorValue = {colorValue}
            setColorValue = {setColorValue}
            setHexValue = {setHexValue}
            isDarkText = {isDarkText}
            setIsDarkText = {setIsDarkText}
          />
          <Examples/>
          <footer>Use o botão acima para mudar a cor do texto, caso use uma cor muito escura ou muito clara.</footer>
      </div>
      
  )
}

export default App
