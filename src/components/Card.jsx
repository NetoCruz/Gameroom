import React from "react";
import "./Card.css"
// import Star from "./StarButton";




export default function Card(props){
    const girlstyle1={
        backgroundColor:'white',
        
    }

    const girlstyle2={
        backgroundColor:'pink',
        
    }

    const isValid =true
    
   return(
    <section className="card--main" style={props.type === "1"  ? girlstyle1 : girlstyle2} >
        
       
        <div className="card--like">
         {/* <Star/>    */}
        </div>
         
        <img className="card--image" src={props.img} alt="card" />
        
        <div className="card--text">
            <div className="card--star">
            <span>{props.name}</span>
            <span>{props.age}</span>
            
            </div>
            <div className="card--p">
            <span>{props.status}</span>
            <span>{props.location}</span>
            </div>
            <div className="card--button">
            <button>1200 bkcoins</button>
            </div>
        </div>
    
    </section>
   )
}