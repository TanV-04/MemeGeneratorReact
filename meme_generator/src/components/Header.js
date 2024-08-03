import "../index.css";
import "../App.css";
import meme_header from "../images/meme_header.png";

function Header() {
  return (
    <div>
      <header className="App-header">
        <div className = "header-content">
          <img src={meme_header} alt="meme header" className="header-img" />
          <p className="header-title">Meme Generator</p>
          {/* <p className = "header-subtitle">React Course - Project 3</p> */}
        </div>
      </header>
    </div>
  );
}

export default Header;
