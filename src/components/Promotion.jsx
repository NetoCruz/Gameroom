import React,{useState} from "react";
import './Promotion.css'
import { Link } from "react-router-dom";

export default function Promotion({data}){
    const [filteredList, setFilteredList] = useState(data);

      const myPosts = filteredList.map((item)=>item.promos.map((post)=>{
            return(
         
        <div className="post-promo">
        <div className="promo-title">
        <div className="promo-profile">
        <Link to={`/profile/${item.id}`}>
            <img className="profile-photo" src={`/${item.img}`}/>
            <p>{item.name}</p></Link>
        </div>
        <div className="post-desc">
           <span>-{post.desc}</span> 
        </div>
        </div>
          
           <p>{post.title}</p>
          
        <img className="post-image" src={`/${post.img}`} style={{display: post.img ? '' : 'none' }} /> 
           
            
           
           
           
         
          </div>
        )
      }))
    
    return(
        <>
        <div className="promos">
        {myPosts}
        </div>
        </>
    )
}