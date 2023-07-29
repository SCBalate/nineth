import React from "react";
import { useNavigate } from 'react-router-dom';
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import MenuIcon from "@mui/icons-material/Menu";
import { PlaylistAdd, WatchLater } from "@mui/icons-material";




function Sidenav() {

 


  const navigate = useNavigate();

  const handleWatchLater = () => {
    navigate('/watch later'); 
  };

  const handleHomeClick = () => {
    navigate('/');
  }

  const handleExplore =()=>{
    navigate('/explore');
  }

  const handlePlayList =()=>{
    navigate('/create play list');
  }

  return (
    <div className="sidenav">
      {/* <img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      /> */}

      <div className="sidenav__buttons">
        <button className="sidenav__button" onClick={handleHomeClick}>
          <HomeIcon />
          <span>Home</span>
        </button>
      
        <button className="sidenav__button" onClick={handleExplore}>
          <ExploreIcon />
          <span>Explore</span>
        </button>

   
        <button className="sidenav__button" onClick={handlePlayList}>
        <PlaylistAdd/>
          <span>Playlist</span>
        </button>

        <button className="sidenav__button" onClick={handleWatchLater}>
        <WatchLater/>
          <span>Watch Later</span>
        </button>
  
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;
