import classes from "./Projects.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  return (
    <div className={classes.Projects}>
      <span id="projects"></span>
      <div className={classes.ProjectsListWrapper}>
        <div className={classes.Slider}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            keyboard={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Keyboard, Pagination, Navigation]}
            style={{
              "--swiper-navigation-size": "16px",
            }}
          >
            <SwiperSlide>
              <ul>
                <li>
                  What is the outlook for renewable energy in Poland and
                  Romania?
                </li>
                <li>
                  What are the risks involved in exporting pharmaceuticals to
                  North Africa?
                </li>
                <li>
                  Why has a €220m+ deal in the Adriatic region run into trouble?
                  Who are the decision-makers?
                </li>

                <li>
                  What political trends and stakeholders are shaping the gaming
                  sector in Central Europe?
                </li>
                <li>
                  What are the political ties and ESG record of a major Austrian
                  business?
                </li>
              </ul>
            </SwiperSlide>
            <SwiperSlide>
              <ul>
                <li>
                  How does a municipality in the Iberian Peninsula view foreign
                  investors?
                </li>
                <li>
                  What is the outlook for EU telecoms policy? How do key
                  stakeholders view the competitive landscape?
                </li>

                <li>What is the reputation of a UK-based investment fund?</li>
                <li>
                  Who are key stakeholders to consider in a commercial dispute
                  in the Baltics?
                </li>
                <li>
                  What is the likely outcome and economic impact of an election
                  in the Western Balkans?
                </li>
              </ul>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={classes.MobileList}>
          <ul>
            <li>
              What is the outlook for renewable energy in Poland and Romania?
            </li>
            <li>
              What are the risks involved in exporting pharmaceuticals to North
              Africa?
            </li>
            <li>
              Why has a €220m+ deal in the Adriatic region run into trouble? Who
              are the decision-makers?
            </li>

            <li>
              What political trends and stakeholders are shaping the gaming
              sector in Central Europe?
            </li>
            <li>
              What are the political ties and ESG record of a major Austrian
              business?
            </li>
            <li>
              How does a municipality in the Iberian Peninsula view foreign
              investors?
            </li>
            <li>
              What is the outlook for EU telecoms policy? How do key
              stakeholders view the competitive landscape?
            </li>

            <li>What is the reputation of a UK-based investment fund?</li>
            <li>
              Who are key stakeholders to consider in a commercial dispute in
              the Baltics?
            </li>
            <li>
              What is the likely outcome and economic impact of an election in
              the Western Balkans?
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.ProjectsHeadingWrapper}>
        <h3>Questions we&apos;ve helped clients answer.</h3>
      </div>
    </div>
  );
};

export default Projects;
