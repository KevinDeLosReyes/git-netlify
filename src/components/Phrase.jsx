
const Phrase = ({phrasesRandom}) => {

    console.log(phrasesRandom)
  return (
        <p className="app_phrase"> {phrasesRandom.phrase}</p>
  )
}

export default Phrase