import HomePage from "../src/pages/HomePage";
import SEO from "../src/components/seo/SEO";

const home = () => (
  <>
    <SEO
      metaTitle="Toros Advisory | Strategic Insights"
      metaDescription="Toros Advisory helps organisations enter new markets, form partnerships, and
defend deal value."
    />
    <HomePage />
  </>
);

export default home;
