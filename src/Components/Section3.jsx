import S3section from "./S3section";

function Section3(props) {
  return (
    <section className="Section3">
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
            <S3section
              img={props.s3img1}
              text1="Raja Ampat"
              text2="Indonesia"
            />
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <S3section img={props.s3img2} text1="Fanjingshan" text2="China" />
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <S3section img={props.s3img3} text1="Vevey" text2="Switzerland" />
          </div>
          <div className="col-lg-3 col-sm-6 col-12">
            <S3section img={props.s3img4} text1="Skadar" text2="Montenegro" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Section3;
