import react from "react";
import "../styles.css";

export default function Header(params) {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="moviedux"></img>
      <h2 className="app-subtitle">
        It's time for popcorn! Find your next movie here.
      </h2>
    </div>
  );
}
