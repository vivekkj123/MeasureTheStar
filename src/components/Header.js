import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1 className="header__text">Measure the ⭐'s</h1>
      <a href="https://github.com/vivekkj123/MeasureTheStar">
        <input
          type="image"
          alt=""
          className='gh__logo'
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        /></a>
    </div>
  );
}

export default Header;
