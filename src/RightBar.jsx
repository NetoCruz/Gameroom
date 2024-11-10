import "./Rightbar.css";
import Data from "./Data"

export default function Rightbar({ profile }) {
  
  const cards = Data.map(item =>{
    if(item.friend===true){
    return(
      <div className="rightbarFollowing">
            <img
              src={item.img}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{item.name}</span>
          </div>  
    )}
  
  })

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
                {cards}
        </div>
      </>
    );
  };
  
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
       <ProfileRightbar /> 
      </div>
    </div>
  );
}