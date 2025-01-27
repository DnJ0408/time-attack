import { useState } from 'react'
import './App.css'

function App() {
const [country, setCountry] = useState("");
const [gold, setGold] = useState(0);
const [silver, setSilver] = useState(0);
const [bronze, setBronze] = useState(0);
const [countries, setCountries] = useState([]);

const countryHandler = (e) => {  setCountry(e.target.value); }
const goldChangeHandler = (e) => { setGold(e.target.value); }
const silverChangeHandler = (e) => { setSilver(e.target.value); }
const bronzeChangeHandler = (e) => { setBronze(e.target.value); }

const addCountryHandler = (e) => {
  e.preventDefault();

  const newCountry = {
    id: crypto.randomUUID(),
    countryName: country,
    goldCount: gold,
    silverCount: silver,
    bronzeCount: bronze,
  };
  
  const goldCount = [...countries, newCountry]
  .sort((a, b) => b - a);

  setCountries(goldCount);
  console.log(goldCount);
}

const deleteHandler = (id) => {
  const deletedCountry = countries.filter(function (country) {
    return id !== country.id;
  });
  setCountries(deletedCountry);
}
  return (
    <>
      <form>
        <h1>2024 파리 올림픽</h1>
        <label>
          국가명
          <input type="text" value={country} onChange={countryHandler} />
        </label>

        <label>
          금메달
          <input type="number" value={gold} onChange={goldChangeHandler} />
        </label>

        <label>
          은메달
          <input type="number" value={silver} onChange={silverChangeHandler} />
        </label>

        <label>
          동메달
          <input type="number" value={bronze} onChange={bronzeChangeHandler} />
        </label>

        <button onClick={addCountryHandler}>Enter</button>
        <button>Update</button>
      
      </form>

      <ul>
        {countries.map((country) => {
          return (
            <li key={country.id}>
            <p>{country.countryName}</p>
            <p>{country.goldCount}</p>
            <p>{country.silverCount}</p>
            <p>{country.bronzeCount}</p>
            <button onClick={() => {deleteHandler}}>
              삭제
            </button>
          </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;