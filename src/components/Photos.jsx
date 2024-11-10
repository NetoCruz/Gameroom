import React, { createRef } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from "./Modal";
import Videogallery from "./Videogallery";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Photos.css"
import { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





   export default function Photos({data}){
    const [isOpen, setIsOpen] = useState(false);
    const picModal= [];
    const [isModal, setModal]= useState('')
    // const [isVideo, setVideo]= useState('')
    const {id} = useParams()


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   const foto= 
   data
   .filter(list => list.id === parseInt(id)  )
   .map((list) => (
         list.photos.map((item)=>(
           <div className="photo-grid-item">
              <button onClick={() => {
            // setId(item.id); 
            setIsOpen(true);
             picModal.push(`/${item.src}`)
             setModal(`/${item.src}`)
            
            console.log(picModal)
          }} > 
          {/* onClick={() => setIsOpen(true)} */} 
      <LazyLoadImage className="img-gallery"   src={`/${item.src}`} alt="card" effect='blur' /> 
      
      </button>  
      
            
            </div>
            ))
           
   ))

  //  const videos= 
  //  data
  //  .filter(list => list.id === parseInt(id))
  //  .map((list) => (
  //        list.videos.map((item)=>{
  //         let divref= createRef(null)
  //         const openModal=()=>{
  //          divref.current.classList.remove('video')
  //          divref.current.classList.add('modal')
  //          setModal(true)
  //         }
  //         const closeModal=()=>{
  //           divref.current.classList.add('video')
  //          divref.current.classList.remove('modal')
  //          setModal(false)
            
  //         }
  //        return(
           
  //          <div ref={divref} className="video" onClick={()=>openModal()}>
  //           { modal && <button   className="btn-close"  onClick={()=>closeModal()}>X</button>}
  //           <div className="video-container">
  //          <video width="400" height="250" controls autoPlay={modal} >
  //        <source src={`/${item}`} type="video/mp4"/>
  //          </video>
  //          </div>
  //           </div>
         
  //           )
  //  })
           
  //  ))


  



    return(
      <>
     <section className="photo-grid-container">
     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Galleria Pública" {...a11yProps(0)} />
    <Tab label="Galleria Privada" {...a11yProps(1)} />
  </Tabs>
</Box>
<CustomTabPanel value={value} index={0} className="Tabpanel">
  {foto} {isOpen && <Modal setIsOpen={setIsOpen} image={isModal} control={false}/>} 
 
</CustomTabPanel>
<CustomTabPanel value={value} index={1}>
  Item Two
  <Videogallery/>
</CustomTabPanel>
        
        
     
     </section>
     
        {/* {videos}  */}
     
     </>
    )
 }