import React,{useState,useEffect} from 'react';
import Recipe from './recipe';
function RecipeData(){

     const[item,setItem] = useState([]);
    const [query,setQuery] =useState('pizza');
    const [search,setSearch] =useState("");
    useEffect(() =>{RecipeFetch();},[query]);
    
     let getSearch = event =>{
      event.preventDefault();
      setQuery(search);
    }
    let updateSearch = event=>{
      setSearch(event.target.value);
    }
 
  const APP_ID = "3d55586c";
   const APP_KEY = "bfb37645a0bb2fcf23bb0b87f3d892bf";
  const RecipeFetch = async () =>{
  let Data = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  let Response = await Data.json();
  console.log(Response.hits);
  setItem(Response.hits)
  }
   return(
            <div className="container">   
      <form className="form-inline mt-3 justify-content-center" onSubmit={getSearch}>
      <div class="input-group ">
    <input type="text" onChange={updateSearch} class="form-control form-control-sm bg-dark text-warning" placeholder="Search Recipe"/>
    <div class="input-group-append">
      <button type="submit" class="input-group-text bg-success text-white">Search</button>
    </div>
  </div>
    </form>
  <div className="container">
                 {item.map(menu => (
            <Recipe
              key={menu.recipe.label}
              name={menu.recipe.label}
              image={menu.recipe.image}
              instr={menu.recipe.ingredientLines}
              inst={menu.recipe.ingredientLines[0]}
              yeild={menu.recipe.yield}
            
              // dishType={menu.recipe.cuisineType}
              calories={menu.recipe.calories}
            />
          ))}
          </div>
     </div>
        )
    }

export default RecipeData;