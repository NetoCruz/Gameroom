
import React, {useState, useEffect} from "react";
import "./Gallery.css"
import Data from "../Data"
import Card from "./Card"
import StarButton from "./StarButton"
import { Link } from "react-router-dom";

export default function Gallery(){

    const [filteredList, setFilteredList] = useState(Data);
  
  const [selectedAge, setSelectedAge] = useState("");

  const [selectedGirl, setSelectedGirl] = useState("");

  const [inputText, setInputText] = useState("")
  let inputHandler = (e) => {
    
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  
  const filterByType = (filteredData) => {
    
    if (!selectedGirl) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(
        (car) => car.hot == parseInt(selectedGirl)
      );
      return filteredCars;
    };
  

  const filterByAge = (filteredData) => {
    
    if (!selectedAge) {
      return filteredData;
    }

    const filteredCars = filteredData.filter(
        (car) => car.age <= parseInt(selectedAge)
      );
      return filteredCars;
    };
 
    const handleBrandChange = (event) => {
        setSelectedAge(event.target.value);
      };

      const handleTypeGirl = (event) => {
        setSelectedGirl(event.target.value);
      };
    
      useEffect(() => {
        var filteredData = filterByAge(Data);
        
      
       
        setFilteredList(filteredData);
      }, [selectedAge]);

      useEffect(() => {
        
        var filteredDataType = filterByType(Data);
      
       
        setFilteredList(filteredDataType);
      }, [selectedGirl]);


     



      const filteredData = filteredList.filter((el) => {
        //if no input the return the original
        if (inputText === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().includes(inputText)
        }
    })


    const cards = filteredData.map(item =>{
        return(
          
        <div>
            <div className="card--like">
            <StarButton/>
            </div>
            <Link to={`/profile/${item.id}`} className="card">
            <Card
            img={item.img}
            name={item.name}
            age={item.age}
            status={item.status}
            location={item.location}
            type={item.hot}
            />
           </Link>
            
          </div>
        )
       })

      
    return(
        <div>
        <h1>Jugadores</h1>
       

         <div className="search">
            <input type="search"
                  placeholder='Buscar contacto por nombre'  
                  onChange={inputHandler} 
            >
            </input>
          </div>
        <div className="selector">
            <button
        value=""
        onClick={event => {
          handleBrandChange(event);
          handleTypeGirl(event);
        }}
        >Todas</button>

       <button
        value="30"
        onClick={handleBrandChange}
        >+30</button>

       <button
        value="50"
        onClick={handleBrandChange}
        >+40</button>

        <button
        value="1"
        onClick={handleTypeGirl}
        >Amigos</button>

        <button
        value="2"
        onClick={handleTypeGirl}
        >Jugadores</button>
        </div>
      
       


        <section className="container">
          
              {cards}  
           
           
        </section>
        
        </div>
    )
}