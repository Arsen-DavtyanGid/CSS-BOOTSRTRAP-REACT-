import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

function Main(props) {
  return (
    <main>
      <Section1 headerIcon={props.headerIcon} headerimg={props.headerimg} />
      <Section2 s2={props.s2} />
      <Section3
        s3img1={props.s3img1}
        s3img2={props.s3img2}
        s3img3={props.s3img3}
        s3img4={props.s3img4}
      />
      <Section4 s4={props.s4} />
      <Section5 s5img={props.s5img} />
      <Section6
        s6img1={props.s6img1}
        s6img2={props.s6img2}
        s6img3={props.s6img3}
        s6img4={props.s6img4}
      />
    </main>
  );
}
export default Main;
