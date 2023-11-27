
import { useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import bgArr from './utils/bgArr.json'
import getRandomFromArr from './services/getRandomFromArr'
import Phrase from './components/Phrase'
import ButtonPhrase from './components/ButtonPhrase'


function App() {
  
  const quote = getRandomFromArr(phrases)
  const [phrasesRandom, setPhraseRandom] = useState( quote )
  
const [bgApp, setbgApp] = useState(getRandomFromArr(bgArr))
const objStyle = {
  backgroundImage: `url("../fondo${bgApp}.jpg")`
}
  return (

      <div style={objStyle} className='app'>
        <h1 className='app__title'>Galleta de la Fortuna</h1>
        <article className='app__card'>
        <Phrase
        phrasesRandom ={phrasesRandom}
        />
        <ButtonPhrase
        setPhraseRandom = {setPhraseRandom}
        setbgApp={setbgApp}/>
        </article>
    </div>
  )
}

export default App
