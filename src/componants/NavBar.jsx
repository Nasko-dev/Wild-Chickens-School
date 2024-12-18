import Logo from "../images/logo.svg";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav>
        <p className="Logo">
          <img src={Logo} alt="Logo" />
        </p>
        <div className="Title">
          <h2>Wild Chickens School</h2>
        </div>
      </nav>
      <div className="line"></div>
    </>
  );
}

export default NavBar;
