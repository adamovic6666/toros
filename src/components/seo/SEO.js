import { NextSeo } from "next-seo";
import Head from "next/head";
const SEO = ({ metaTitle, metaDescription }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta
          name="keywords"
          content="Due diligence Balkans, Due diligence North Africa"
        />
      </Head>
      <NextSeo
        title={metaTitle}
        description={metaDescription}
        canonical="https://toros.vercel.app/"
        openGraph={{
          url: "https://toros.vercel.app/",
          title: "Toros Advisory | Strategic Insights",
          description:
            "Toros Advisory helps organisations enter new markets, form partnerships, and defend deal value.",
          images: [
            {
              url: "https://toros.vercel.app/toros-share.png",
              width: 800,
              height: 600,
              alt: "og-image",
              type: "image/png",
            },
            {
              url: "https://toros.vercel.app/toros-share.png",
              width: 900,
              height: 800,
              alt: "og-image-2",
              type: "image/png",
            },
          ],
          site_name: "https://toros.vercel.app",
        }}
      />
    </>
  );
};

export default SEO;
