import React from "react";
import { useEffect } from "react";
import Pokecard from "./Pokecard";
function RandomCard({data,handelClick,setSearchData}){
    console.log(data);
    return (
  <Pokecard data={data} handelClick={handelClick} setSearchData={setSearchData} />
    )
}
export default RandomCard;
