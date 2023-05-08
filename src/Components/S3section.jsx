function S3section(props) {
  return (
    <div
      className="Section3-content-bg"
      style={{
        backgroundImage: `url(${props.img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "400px",
      }}
    >
      <div className="section3-bottom-content">
        <div className="section3-bottom-content-text1">{props.text1}</div>
        <div className="section3-bottom-content-text2">{props.text2}</div>
      </div>
    </div>
  );
}
export default S3section;
