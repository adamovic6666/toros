import classes from "./Services.module.css";

const Services = () => {
  return (
    <div className={classes.ServicesWrapper}>
      <span id="services"></span>
      <div className={classes.ServicesImg}></div>
      <div className={classes.Services}>
        <h2>Services</h2>
        <div className={classes.Grid}>
          <div>
            <h4>Market entry and political risk</h4>
            <p>
              Toros has helped companies understand new markets around the world
              through qualitative research based on conversations with
              decision-makers and sector experts. Recently we have provided
              reports on pharmaceuticals in a major North African market, EU R&D
              policy, the regional politics of a Gulf jurisdiction, and how a
              municipal government in Iberia views foreign investors. We’ve also
              advised UHNWIs on the media landscape around decentralised
              finance, and shaped strategy on establishing a new news service
              covering the industry.
            </p>
          </div>
          <div>
            <h4>Stakeholder mapping</h4>
            <p>
              Gaining an understanding of the main stakeholders in a market or
              sector is crucial for businesses, NGOs, and government
              institutions. Recent work has included reports on major
              stakeholders in EU telecoms, politics and public affairs in the
              Baltics, and gaming in Central Europe.
            </p>
          </div>
          <div>
            <h4>Due diligence</h4>
            <p>
              Human intelligence-focused due diligence is at the heart of our
              business. We have recently provided reports on subjects including
              the background of a Ukrainian business figure, the track record of
              a UK-based renewables business, and the ESG performance and
              political ties of a major Austrian company.
            </p>
          </div>
          <div>
            <h4>Dispute support</h4>
            <p>
              Sometimes organisations ﬁnd themselves in difficulties with local
              partners or governments. Toros Advisory can help. We have
              supported clients in bankruptcy cases in regions including the
              Baltics and the Balkans, and provided insights on a €220m+ deal in
              the Adriatic region that ran into political and legal challenges.
            </p>
          </div>
          <div>
            <h4>Communications strategy</h4>
            <p>
              With our background in journalism, Toros Advisory also helps
              selected clients with strategic communications, content strategy,
              and editing. We have worked with businesses including law firms,
              major investment funds, white-label publishing outlets, and top PR
              companies. Recent work has included op-ed writing, editing, and
              communications strategy for the launch of a major investment fund,
              and regular advertorial and thought eadership pieces to be placed
              in publications including the Financial Times, Independent, and
              Newsweek.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
