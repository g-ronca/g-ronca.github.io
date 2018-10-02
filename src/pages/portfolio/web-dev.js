import React from "react";

import "../../assets/css/main.css";

import Navigation from "../../components/Navigation";

const WebDev = () => (
    <div>
        <Navigation/>
        <section id="portfolio-page">
            <div className="row">
                <div className="twelve columns">
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                        Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
                        aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede
                        mollis pretium.
                    </p>
                </div>
            </div>
        </section>
    </div>
);

export default WebDev;
