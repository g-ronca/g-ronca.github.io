import React from "react";
import { Link } from 'gatsby';

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="/#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <Link to="/#home">
          Home
        </Link>
      </li>
      <li>
        <Link to="/#about">
          About
        </Link>
      </li>
      <li>
      <Link to="/#resume">
          Resume
        </Link>
      </li>
      <li>
        <Link to="/#portfolio">
          Works
        </Link>
      </li>
      {/*<li>
        <Link to="/#testimonials">
          Testimonials
        </Link>
      </li>
      <li>
        <Link to="/#footer">
          Footer
        </Link>
      </li>*/}
    </ul>
  </nav>
);

export default Navigation;
