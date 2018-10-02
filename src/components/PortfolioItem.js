import React from "react";
import { FaPlus, FaTag } from "react-icons/fa";
import { Link } from "gatsby";

const PortfolioItem = (props) => (
    <div className="columns portfolio-item">
        <div className="item-wrap">
            <Link to={props.link}>
                <img alt="" src={props.image} />
                <div className="overlay">
                    <div className="portfolio-item-meta">
                        <h5>{props.title}</h5>
                        <p>{props.descr}</p>
                    </div>
                </div>
                <div className="link-icon">
                    <FaPlus />
                </div>
            </Link>
        </div>
    </div>
);

export default PortfolioItem;
