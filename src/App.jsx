import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
/*__________*/
import logo from "./images/logo.svg";
import headerIcon from "./images/header-icon.svg";
import headerimg from "./images/header.png";
import s2 from "./images/s2-bg.png";
import s4 from "./images/s4-bg.png";
/*__________*/
import s3img1 from "./images/s3-1.png";
import s3img2 from "./images/s3-2.png";
import s3img3 from "./images/s3-3.png";
import s3img4 from "./images/s3-4.png";
/*__________*/
import s5img from "./images/s5-img.png";
/*__________*/
import s6img1 from "./images/s6img1.png";
import s6img2 from "./images/s6img2.png";
import s6img3 from "./images/s6img3.png";
import s6img4 from "./images/s6img4.png";

function App() {
  return (
    <>
      <Header logo={logo} />
      <Main
        headerIcon={headerIcon}
        headerimg={headerimg}
        s2={s2}
        s3img1={s3img1}
        s3img2={s3img2}
        s3img3={s3img3}
        s3img4={s3img4}
        s4={s4}
        s5img={s5img}
        s6img1={s6img1}
        s6img2={s6img2}
        s6img3={s6img3}
        s6img4={s6img4}
      />
      <Footer logo={logo} />
    </>
  );
}

export default App;
