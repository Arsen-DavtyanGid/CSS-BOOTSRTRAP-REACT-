function Section2(props) {
  return (
    <section className="Section2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section2-content-img">
              <img src={props.s2} alt="s2" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section2-flex">
              <div className="section2-content">
                <div className="section2-content-text1">
                  A new way to explore the world
                </div>
                <div className="section2-content-text2">
                  For decades travellers have reached for Lonely Planet books
                  when looking to plan and execute their perfect trip, but now,
                  they can also let Lonely Planet Experiences lead the way
                </div>
                <div className="section2-content-btn">
                  <button className="register">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section2;
