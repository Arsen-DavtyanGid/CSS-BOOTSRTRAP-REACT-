function Navbar(props) {
  function hiddenManu() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.add("add");
  }
  function hidden() {
    let el = document.querySelector(".manu-bar-mobile");
    el.classList.remove("add");
  }
  return (
    <nav>
      <div className="manu-bar-mobile">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Destinations</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Partner</a>
          </li>
          <li>
            <button className="login">Login</button>
          </li>
          <li>
            <button className="register">Register</button>
          </li>
          <div className="manu-bar-x">
            <a href="#" onClick={hidden}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="30"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#fb8f1d"
                  d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"
                />
              </svg>
            </a>
          </div>
        </ul>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-6 col-6">
            <div className="nav-logo">
              <a href="/">
                <img src={props.logo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-6 col-6">
            <div className="nav-right-part">
              <div className="nav-links">
                <a href="/">Home</a>
                <a href="/">Destinations</a>
                <a href="/">About</a>
                <a href="/">Partner</a>
              </div>
              <div className="nav-buttons">
                <button className="login">Login</button>
                <button className="register">Register</button>
              </div>
              <div className="manu-bar">
                <a href="#" onClick={hiddenManu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="24"
                    viewBox="0 0 28 24"
                  >
                    <path
                      fill="#fb8f1d"
                      d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
