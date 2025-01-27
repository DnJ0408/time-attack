import { useState } from 'react'
import './App.css'

function App() {
const [country, setCountry] = useState("");
const [gold, setGold] = useState(0);
const [silver, setSilver] = useState(0);
const [bronze, setBronze] = useState(0);
const [countries, setCountries] = useState([]);

  return (
    <form>
    <h1>2024 파리 올림픽</h1>
    </form>
  )
}

export default App