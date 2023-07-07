import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Pokecard from './components/Pokecard.jsx';
import RandomCard from './components/RandomCard';
import SearchCard from './components/SearchCard';

function App() {
  const [data, setData] = useState({});
  const [searchData, setSearchData] = useState({});
  const [val, setVal] = useState("");
  const[isSearched,setIsSearched] = useState(false);

  async function createUrl() {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    let id = Math.floor(Math.random() * 150) + 1;
    const finalUrl = url + id;
    console.log(finalUrl);
    fetch(finalUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(Object.keys(data).length);
        setData(data);
      });
  }

  useEffect(() => {
    console.log("useEffect");
    createUrl();
  }, []);

  function handelClick(value) {

    if (value === 1) {
      const url = "https://pokeapi.co/api/v2/pokemon/";
      let id = Math.floor(Math.random() * 150) + 1;
      const finalUrl = url + id;
      console.log(finalUrl);
      fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  }

  function handelSearch(name) {
    setIsSearched(true);
    if (name !== "") {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      console.log(url);
      fetch(url)
        .then((response) => {
          if (response.headers.get('content-type')?.includes('application/json')) {
            return response.json();
          } else {
            return { empty: true };
          }
        })
        .then((data) => {
          console.log(data);
          setVal(name);
          setSearchData(data);
        });
    } else {
      setVal(name);
      setSearchData({ empty: true });
      console.log("hit");
    }
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <RandomCard data={data} handelClick={handelClick} setSearchData={setSearchData} />}/>
        <Route exact path="/searchName" element={<SearchCard searchData={searchData} handelSearch={handelSearch} setVal={setVal} val={val} isSearched={isSearched} />}/>
      </Routes>
    </Router>
  );
}

export default App;

