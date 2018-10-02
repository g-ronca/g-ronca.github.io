import React from "react";
import { FaPlus, FaTag } from "react-icons/fa";

import Coffee from "../assets/images/portfolio/coffee.jpg";
import Console from "../assets/images/portfolio/console.jpg";
import Judah from "../assets/images/portfolio/judah.jpg";
import IntoTheLight from "../assets/images/portfolio/into-the-light.jpg";
import Farmerboy from "../assets/images/portfolio/farmerboy.jpg";
import Girl from "../assets/images/portfolio/girl.jpg";
import Origami from "../assets/images/portfolio/origami.jpg";
import Retrocam from "../assets/images/portfolio/retrocam.jpg";

import PortfolioItem from "./PortfolioItem";

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <PortfolioItem title="Console" descr="Web Development" image={Console} link="portfolio/web-dev"/>
          <PortfolioItem title="Console" descr="Web Development" image={Console} link="portfolio/web-dev"/>
          <PortfolioItem title="Console" descr="Web Development" image={Console} link="portfolio/web-dev"/>
          <PortfolioItem title="Console" descr="Web Development" image={Console} link="portfolio/web-dev"/>
          <PortfolioItem title="Console" descr="Web Development" image={Console} link="portfolio/web-dev"/>
          <PortfolioItem title="Console" descr="Web Development" image={Console} link="portfolio/web-dev"/>
          <PortfolioItem title="Console" descr="Web Development" image={Console} link="portfolio/web-dev"/>
          <PortfolioItem title="Console" descr="Web Development" image={Console} link="portfolio/web-dev"/>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
