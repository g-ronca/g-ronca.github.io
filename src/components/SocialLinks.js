import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGooglePlus,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://www.facebook.com/giusepperonca">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/g_ronca">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://plus.google.com/110533587828415693508">
        <FaGooglePlus />
      </a>
    </li>
    <li>
      <a href="#">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://github.com/Yehonal">
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
