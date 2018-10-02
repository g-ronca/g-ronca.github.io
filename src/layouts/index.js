import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { siteMetadata } from "../../gatsby-config";

const HeadHelmet = ({ children }) => (
  <div>
    <Helmet>
      <meta name="author" description={siteMetadata.author} />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href="../assets/favicon.png" type="image/x-icon"/>
    </Helmet>
  </div>
);

export default HeadHelmet;
