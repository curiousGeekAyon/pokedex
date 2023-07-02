import './App.css';
import Card from './components/Card.jsx'
function App() {
  const url=`https://pokeapi.co/api/v2/pokemon/charizard`;
  // const[cardData,setcardData]=useState({});
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.sprites['other']['official-artwork'].front_default);
  });
  return (
  <>
    < Card data={data}/>
  </>
  );
}

export default App;
