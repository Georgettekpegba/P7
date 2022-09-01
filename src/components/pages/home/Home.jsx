import React from "react";
import Profile from "../../profile/Profile";
import "./home.css"

const Home = () => {
  return (
    <>
    <div className="Home">
      <Profile/>
      <div className="toPost">Hightlight</div>
      <div className="RightSide">Conseil de votre coach bien-être</div>
    </div>
    {/* < div className="connection_block">
    <div className="groupomania">GROUPOMANIA</div>
    <p className="connection">connection</p>
    </div> */}
    </>
  );

}

export default Home; 