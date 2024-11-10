import Data from "../Data";
import { useParams } from "react-router-dom";
import "./Videogallery.css"
import Modal from "./Modal";
import { useState } from "react";

export default function Videogallery(){
    const [isOpen, setIsOpen] = useState(false);
    const [isModal, setModal]= useState('')
    

    const {id} = useParams()

     const videos=
   Data
   .filter(list => list.id === parseInt(id))
   .map((list) => (
         list.videos.map((item)=>{

         return(

            <button className="videobutton" onClick={() => {
                // setId(item.id); 
                setIsOpen(true);
                
                 setModal(`/${item.video}`)
                
                // console.log(picModal)
              }} > 
         
          <div className="video" >
            <div className="video-container">
           <video width="400" height="250" controls  >
         <source src={`/${item.video}`} type="video/mp4"/>
           </video>
           </div>
            </div>

          </button>  

           

            )
   })

   ))

   return(
    <section>
        {videos}  {isOpen && <Modal setIsOpen={setIsOpen} video={isModal} control={true}/>}
    </section>
   )

}