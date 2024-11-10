import "./User.css";

import Sidebar from "./SideBar";
import Rightbar from "./RightBar";
import UserIcon from '../public/mario.png'
import Cover from './images/user.png'


export default function User() {
  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={Cover}
                alt=""
              />
              <img
                className="profileUserImg"
                src={UserIcon}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
                <Rightbar/>
            </div>
            
          </div>
          {/* <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div> */}
        </div>
        
      </div>
    </>
  );
}