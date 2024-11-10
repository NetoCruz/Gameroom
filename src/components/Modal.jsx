
import  "./Modal.css"


import { RiCloseLine } from "react-icons/ri";



export default function Modal({ setIsOpen,image,video,control}){

    

   return(
    <>
   <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          {/* <div className="modalHeader">
            <h5 className="heading">Dialog</h5>
          </div> */}
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          {/* <div className="modalContent">
           
          </div> */}
          
           
              {/* <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                Delete
              </button> */}

           {control === false? 
                  <div className="photo-item">
                <img   src={image} alt="card" /> 
              
                </div>
                :  
                <div className="video" >
                <div className="video-container">
              <video width="400" height="250" controls  >
            <source src={video} type="video/mp4"/>
              </video>
              </div>
                </div>
            }
            {/* <div  className="video">
             <div className="video-container">
            <video width="400" height="250" controls autoPlay={true} >
          <source src={vide} type="video/mp4"/>
            </video>
            </div>
             </div> */}
           
            </div>
          
       
      </div>
    </>


   )


}