import React from "react";
import "./Profile.css";
import work from "../images/work.svg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";


import { useParams } from "react-router-dom";

export default function Profile({data}){
    const {id} = useParams()
    return(
         <div>
            
            <div >
          {
            data
              .filter(list => list.id === parseInt(id)  )
              .map((list) => (
                <div  key={ list.id }>
                <div className="profile--contact">
                   
                    <img className="profile--photo" src={`/${list.img}`} alt="photoprofile"/> 
                    <div className="profile--data">
                      <h2> {list.name}</h2>
                      <p>{list.ocupation}</p>
                        <div className="work--icon"> 
                            <img src={work} alt="workicon" height={"30px"}/> 
                        <p>{list.work}</p>
                        </div>
                       
                       <button>Contact</button>
                    </div>
                    <div className="profile--price">
                        <span>${list.price}/hora</span>
                    </div>
                    <div className="profile--social">
                        <p>Disponibilidad:</p>
                        <p>{list.age}</p>
                        <p>{list.location}</p>
                    </div>
                </div>
                {/* <div className="profile--likes">
                {list.likes.map((item)=>(
                    <p className="likes--text">{item}</p>
                   ))}
                </div> */}

                <section class="detail">
                      <div> 
                      <div class="fotografia">
                      <Link to={`/photos/${list.id}`} className="card">
                      <p>fotos</p>
                      </Link>
                      <div class="galleria">
                      {
                    list.photos
                    .slice(0,4)
                    .map((item)=>(
                     
                        <img src={`/${item.src}`} alt="photogallery"/>
                        
                      
                      
                    ))
                  }
                      </div>
                        </div>
                        <div class="interes">
                        <p>intereses</p>
                        <div class="lista">
                        {list.likes.map((item)=>(
                        <p className="likes--text">{item}</p>
                      ))}
                        </div>
                            
                            </div>
                        </div>
                        <div class="about">
                            <p>Acerca de mi</p>
                            <div className="text">{list.description}</div>
                        </div>
                        <div class="prices">
                          <p>Tarifas</p> 
                          {
                        list.services.map((item)=>(
                         item.presencial.map((price)=>(
                          <div className="service--list">{price}</div>
                         ))
                        
                        ))
                      } 
                        </div>
                      </section>
                    


                {/* <Tabs className="Tabs ">
                <TabList>
                <Tab>Servicios</Tab>
                <Tab>Galleria </Tab>
                <Tab>Descripción</Tab>
              </TabList>
              <TabPanel>
              <div className="profile--services">
                   <p>Servicios</p>
                   <div className="profile--descriptions">
                    <div className="profile--description">
                      Online
                     <div>
                      {
                        list.services.map((item)=>(
                          <div>{item.online.message.map((msg)=>(
                            <div className="service--list">{msg}</div>
                          ))} </div>
                          
                         
                        
                        ))
                      }
                     </div>
                    </div>
                    <div className="profile--description">
                      Presencial
                      {
                        list.services.map((item)=>(
                         item.presencial.map((price)=>(
                          <div className="service--list">{price}</div>
                         ))
                        
                        ))
                      } 
                      </div>
                   </div>
                    </div> 
              </TabPanel>
              <TabPanel>
              <div className="gallery">
                  {
                    list.photos.map((item)=>(
                      <img src={`/${item}`} alt="photogallery"/>
                    ))
                  }

                </div>
              </TabPanel>
              <TabPanel>
              <div className="profile--description">
                    <p>Descripción</p>
                    
                    <div className="text">{list.description}</div>
                    
                    </div> 
              </TabPanel>

                </Tabs> */}
                
                {/* <div className="profile--descriptions">
                   <div className="profile--services">
                   <p>Servicios</p>
                    </div> 
                   <div className="profile--description">
                    <p>Descripción</p>
                    
                    <div className="text">{list.description}</div>
                    
                    </div> 
                   <div className="profile--related">
                   <p>Perfiles Relacionados</p>
              
                    </div>  
                </div>

                <div className="gallery">
                  {
                    list.photos.map((item)=>(
                      <img src={`/${item}`} alt="photogallery"/>
                    ))
                  }

                </div> */}
                
                  
                </div>
              ))}
        </div>

           
         </div>
    )
}