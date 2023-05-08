import S6Section from "./S6Section";

function Section6(props) {
  return (
    <section className="Section6">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="section3-text1">Featured destinations</div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-6">
            <div className="section3-right">
              <div className="section3-text2">View all</div>
              <div className="section3-icon">
                <svg
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5.5L1 10"
                    stroke="#FB8F1D"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <S6Section
              img={props.s6img1}
              text1="The many benefits of taking a healing holiday"
              text2="‘Helaing holidays’ are on the rise tohelp maximise your health and happines..."
            />
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <S6Section
              img={props.s6img2}
              text1="The best Kyoto restaurant to try Japanese food"
              text2="From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
              to visit..."
            />
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <S6Section
              img={props.s6img3}
              text1="Skip Chichen Itza and head to this remote Yucatan"
              text2="It’s remote and challenging to get,
              but braving the jungle and exploring
              these ruins without the..."
            />
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <S6Section
              img={props.s6img4}
              text1="Surf’s up at these beginner spots around the world"
              text2="If learning to surf has in on your to-do list for a while, the good news is: it’s never too late..."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section6;
