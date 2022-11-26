import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes.Projects}>
      <span id="projects"></span>
      <div className={classes.ProjectsListWrapper}>
        <ul>
          <li>
            What is the outlook for renewable energy in Poland and Romania?
          </li>
          <li>
            What are the risks involved in exporting pharmaceuticals to North
            Africa?
          </li>
          <li>
            Why has a €220m+ deal in the Adriatic region run into trouble?
          </li>
          <li> Who are the decision-makers?</li>
          <li>
            What political trends and stakeholders are shaping the gaming sector
            in Central Europe?
          </li>
          <li>
            What are the political ties and ESG record of a major Austrian
            business?{" "}
          </li>
          <li>
            How does a municipality in the Iberian Peninsula view foreign
            investors?
          </li>
          <li>What is the outlook for EU telecoms policy?</li>
          <li>How do key stakeholders view the competitive landscape?</li>
          <li>What is the reputation of a UK-based investment fund?</li>
          <li>
            Who are key stakeholders to consider in a commercial dispute in the
            Baltics?
          </li>
          <li>
            What is the likely outcome and economic impact of an election in the
            Western Balkans?
          </li>
        </ul>
      </div>
      <div className={classes.ProjectsHeadingWrapper}>
        <h3>Questions we've helped clients answer.</h3>
      </div>
    </div>
  );
};

export default Projects;
