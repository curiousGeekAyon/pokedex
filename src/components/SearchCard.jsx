import React,{useState}from "react";
import Pokecard from "./Pokecard";

function SearchCard({ searchData, handelSearch ,setVal,val,isSearched}) {
  
  function click() {
    let name=document.getElementById("countryInp").value;
    handelSearch(name);
  }
  console.log(searchData);
  console.log(val);
  return (
      <>
        <div className="search-wrapper">
          <input
            type="text"
            id="countryInp"
            placeholder="Enter a pokemon name here..."
          />
          <button id="search-btn" onClick={click}>
            Search
          </button>
        </div>
       
        <div className="container">
      {(val === "" && Object.keys(searchData).length === 1)? (
        <div className="noData">Please type a name</div>
      ) : Object.keys(searchData).length > 1 ? (
        <Pokecard data={searchData}/>
      ) : ( isSearched===true?<div className="noData">No data available... Please recheck and enter the name</div>:null)}
    </div></>
  );
}

export default SearchCard;

