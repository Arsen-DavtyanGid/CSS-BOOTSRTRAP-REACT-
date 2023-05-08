function Section1(props) {
  return (
    <section className="Section1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section1-content">
              <div className="section1-content-text1">Explore and Travel</div>
              <div className="section1-content-text2">Holiday finder</div>
              <div className="section1-content-icon">
                <img src={props.headerIcon} alt="icon" />
              </div>
              <div className="section1-content-forms">
                <select name="location">
                  <option value="Location">Location</option>
                  <option value="Lorem">Lorem</option>
                  <option value="Lorem">Lorem</option>
                  <option value="Lorem">Lorem</option>
                </select>
                <select name="Activity">
                  <option value="Activity">Activity</option>
                  <option value="Lorem">Lorem</option>
                  <option value="Lorem">Lorem</option>
                  <option value="Lorem">Lorem</option>
                </select>
                <select name="Grade">
                  <option value="Grade">Grade</option>
                  <option value="Lorem">Lorem</option>
                  <option value="Lorem">Lorem</option>
                  <option value="Lorem">Lorem</option>
                </select>
                <select name="Date">
                  <option value="Date">Date</option>
                  <option value="Lorem">Lorem</option>
                  <option value="Lorem">Lorem</option>
                  <option value="Lorem">Lorem</option>
                </select>
              </div>
              <div className="section1-content-btn">
                <button>Explore</button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="section1-content-img">
              <img src={props.headerimg} alt="foto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section1;
