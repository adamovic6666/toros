import classes from "./WhoWeAre.module.css";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className={classes.WhoWeAre}>
      <span id="who-we-are"></span>
      <div>
        <h2>Who we are</h2>
        <div className={classes.ContentWrapper}>
          <div className={classes.CardWrapper}>
            <div className={classes.ImageWrapper}>
              <Image
                layout="fill"
                alt="card-image"
                src="/assets/card-image-1.png"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
            <div>
              <h4>
                Andrew <br /> MacDowall
              </h4>
              <span>Founding Director</span>
              <div>
                <a
                  href="https://www.linkedin.com/in/andrew-macdowall-4456ab19/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    height={40}
                    width={40}
                    alt="card-image"
                    src="/assets/linkedIn.png"
                  />
                </a>

                <a href="mailto:arm@torosadvisory.com">
                  <Image
                    height={40}
                    width={40}
                    alt="card-image"
                    src="/assets/email.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={classes.TextWrapper}>
            <p>
              Andrew MacDowall is the founding director of Toros Advisory. For
              more than fifteen years, Andrew has provided insights, analysis,
              and intelligence on global markets in Europe, Africa, and Asia. He
              has worked on more than 100 advisory projects across the world.
            </p>
            <p>
              With a background in financial journalism, he has written
              extensively for publications including the Financial Times, the
              Guardian, and Politico Europe. Covering Central Europe and the
              Balkans for many years, he has interviewed many of the
              region&apos;s leading political and business figures, and reported
              on attempted coups, mass protests, economic crises, and the
              aftermath of war. He also has extensive experience writing
              economic and political analysis of markets in the MENA region and
              South East Asia.
            </p>

            <p>
              He has an MA in social and political sciences from the University
              of Cambridge and a postgraduate diploma in newspaper journalism
              from City University, London.
            </p>
          </div>
        </div>
        <div className={classes.ContentWrapper}>
          <div className={classes.CardWrapper}>
            <div className={classes.ImageWrapper}>
              <Image
                layout="fill"
                alt="card-image"
                src="/assets/card-image-2.png"
                objectFit="cover"
              />
            </div>

            <div>
              <h4>
                Souhir
                <br /> Mzali
              </h4>
              <span>Senior Associate</span>
              <div>
                <a
                  href="https://www.linkedin.com/in/souhir-mzali-3bb16462/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    height={40}
                    width={40}
                    alt="card-image"
                    src="/assets/linkedIn.png"
                  />
                </a>
                <a href="mailto:sm@torosadvisory.com">
                  <Image
                    height={40}
                    width={40}
                    alt="card-image"
                    src="/assets/email.png"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={classes.TextWrapper}>
            <p>
              Souhir Mzali is an experienced independent consultant and
              researcher focusing on Africa. Until December 2020, Souhir was
              regional editor at an emerging markets-focused publishing and
              consultancy company, overseeing research in some of Africa&apos;s
              largest markets. Having held a range of roles, including Africa
              analyst, she has a deep understanding of economies including
              Morocco, Egypt, and Kenya, and a web of contacts across the
              continent. She has worked on topics from macro-economics to
              agriculture and fintech, interviewing some of Africa&apos;s most
              prominent government and business leaders, and building
              relationships for both editorial and commercial work.
            </p>
            <p>
              Her recent work has included detailed analysis of the Covid-19
              pandemic&apos;s impact on private equity and venture capital in
              Africa, and a study of opportunities in African agriculture,
              including agritech as well as a report on sustainable
              industrialisation across the region. Souhir has also worked for a
              leading Africa-focused business information service.
            </p>
            <p>
              A British and Tunisian dual citizen, Souhir speaks fluent English,
              French, and Arabic. Souhir is a graduate of the Université
              Sorbonne-Paris and in 2019 completed an MBA Essentials certificate
              at the London School of Economics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
