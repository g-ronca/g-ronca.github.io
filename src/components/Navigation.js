import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="/#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <Link smooth to="/#home">
          Home
        </Link>
      </li>
      <li>
        <Link smooth to="/#about">
          About
        </Link>
      </li>
      <li>
        <a className="smoothscroll" href="/#resume">
          Resume
        </a>
      </li>
      <li>
        <a className="smoothscroll" href="/#portfolio">
          Works
        </a>
      </li>
      {/*<li>
        <a className="smoothscroll" href="/#testimonials">
          Testimonials
        </a>
      </li>*/}
      <li>
        <a className="smoothscroll" href="/#footer">
          Footer
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
