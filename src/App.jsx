import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from "./json/quotes.json"  
import color from "./utils/color"


function App() {

  //Esta funcion calcula un indice random
 const getIndexRandom = arr => Math.floor(Math.random() * arr.length)

 //Aqui se extrae el elemento segun el indice random
 const firstQuote = quotes[getIndexRandom(quotes)]
 const firstColor = color[getIndexRandom(color)] 

 const [randomQuote, setRandomQuote] = useState(firstQuote)
 const [randomColor, setRandomColor] = useState(firstColor)

 const backgroundObject = {
  backgroundColor: randomColor
 }

 //Esta funcion calcula tanto un color quote como un color random
 const getRandomAll = () => {
  setRandomQuote(quotes[getIndexRandom(quotes)])
  setRandomColor(color[getIndexRandom(color)]) 
 }
  return (
    <div  style={backgroundObject} className="App">
      <QuoteBox 
      randomQuote={randomQuote} 
      randomColor={randomColor}
      getRandomAll={ getRandomAll}
      />
       
    </div>
  )
}

export default App
