function Section4(props) {
  return (
    <section className="Section4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section2-flex">
              <div className="section2-content">
                <div className="section2-content-text1">
                  Guides by Thousand Sunny
                </div>
                <div className="section2-content-text2">
                  Packed with tips and advice from our on-the-ground experts,
                  our city guides app (iOS and Android) is the ultimate resource
                  before and during a trip.
                </div>
                <div className="section2-content-btn">
                  <button className="register">Download</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section4-img">
              <img src={props.s4} alt="s4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section4;
