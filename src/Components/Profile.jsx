import React from "react";
import Defaultimage from "../assets/Defaultprofile.png";
import { IoIosArrowForward } from "react-icons/io";
import { PiGlobe } from "react-icons/pi";
import { BiLogOut } from "react-icons/bi";
export default function Profile() {
  return (
    <div className="top_right-corner">
    <div className="profile">
      <div className="profile__content">
        <img src={Defaultimage} alt="profile image" />
        <span className="profile__content-name">Olakunle Te..</span>
        <span>
          <IoIosArrowForward />
        </span>
      </div>
      <div className="profile__icons">
        <span>
          <PiGlobe />
        </span>
        <span>
          <BiLogOut />
        </span>
      </div>
    </div>
    </div>

  );
}
