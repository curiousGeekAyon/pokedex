import React from "react";
import "../App.css";
import { NavLink ,useNavigate} from "react-router-dom";
function Pokecard(props) {
  const { data, handelClick,setSearchData} = props;
  const navigate=useNavigate();
  console.log(data);

  function clicking() {
    handelClick(1);
  }
function navigatePages()
   {
      if(handelClick)
        {
          setSearchData({});
          navigate('/searchName');
        }
      else {
           navigate('/');
      }
   }

  const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

  return (
    <>
      {Object.keys(data).length > 1 ? (
        < div className="container">
          <div id="card" style={{ background: `radial-gradient(circle at 50% 0%, ${typeColor[data?.types[0]?.type?.name]} 36%, #ffffff 36%)` }}>
            <p className="hp">
              <span>HP</span>
              {data.stats[0].base_stat}
            </p>
            <img src={data.sprites.other.dream_world.front_default} alt="Pokemon" />
            <h2 className="poke-name">{data.name[0].toUpperCase() + data.name.slice(1)}</h2>
            <div className="types">
              {data.types.length > 0 &&
                data.types.map((type, index) => {
                  return <span key={index} style={{ background: `${typeColor[type.type.name]}` }}>{type.type.name}</span>;
                })}
            </div>

            <div className="stats">
              <div>
                <h3>{data.stats[1].base_stat}</h3>
                <p>Attack</p>
              </div>
              <div>
                <h3>{data.stats[2].base_stat}</h3>
                <p>Defense</p>
              </div>
              <div>
                <h3>{data.stats[5].base_stat}</h3>
                <p>Speed</p>
              </div>
            </div>
          </div>
          {handelClick?<button id="btn" onClick={clicking}>Generate</button>:<></>}
          <div
  className="color-change-btn"
  id="btn"
  onClick={navigatePages}>
  {handelClick ? "Search by name" : "Generate Random Card"}
</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Pokecard;

