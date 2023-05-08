function S6Section(props) {
  return (
    <section className="S6Section">
      <div className="section6-content">
        <div className="section6-content-img">
          <img src={props.img} alt="img" width="100%"/>
        </div>
        <div className="section6-content-text1">{props.text1}</div>
        <div className="section6-content-text2">{props.text2}</div>
        <div className="section6-content-text3">Read more</div>
      </div>
    </section>
  );
}
export default S6Section;
