import React,{useState} from "react";
import Star from "../images/Star.png";
import Unstar from "../images/Unstar.png"
import "./StarButton.css"

export default function Button() {
    // Declaración de una variable de estado que llamaremos "count"
    const [image, setImage] = useState(false);
    const handleChangeActive = () => {
        setImage((previousStar) => {
          return !previousStar;
        });
      };
  
    return (
      <div>
        
        {image ? (
          <img
            className="active"
            src={Star}
            alt="yellow star"
            onClick={() => handleChangeActive()}
          />
        ) : (
          <img
            className="inactive"
            src={Unstar}
            alt="black and white star"
            onClick={() => handleChangeActive()}
          />
        )}
      </div>
    );
  }