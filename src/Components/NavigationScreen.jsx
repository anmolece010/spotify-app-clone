import React from "react";
import "./NavigationScreen.css";
import AddIcon from "@mui/icons-material/Add";

function NavigationScreen() {
  return (
    <div className="NavigationScreen">
      <div className="Navigation__spotify">
        <span className="spotify__icon">
          <img alt="spotify_icon" />
        </span>
        <h2>Spotify</h2>
      </div>

      <div className="NavigationScreen__menu">
        <div className="home__content">
          <span className="home__menu">
            <img alt="home_icon" />
          </span>
          <h3>Home</h3>
        </div>
        <div className="search__content">
          <span className="search__menu">
            <img alt="search_icon" />
          </span>
          <h3>Search</h3>
        </div>
        <div className="library__content">
          <span className="library__menu">
            <img alt="library_icon" />
          </span>
          <h3>Your Library</h3>
        </div>

        <div className="Playlist__content">
          <span className="Playlist__menu">
            <button className="CreatePlaylist__button">
              <AddIcon />
            </button>
          </span>
          <h3>Create Playlist</h3>
        </div>
        <div className="Liked__content">
          <span className="Liked__menu">
            <img alt="Liked_icon" />
          </span>
          <h3>Liked Songs</h3>
        </div>
      </div>
    </div>
  );
}

export default NavigationScreen;
