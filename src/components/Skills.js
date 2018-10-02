import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand skillbar-anim" style={{ width: "80%" }} />
            <em>Javascript (ReactJS, AngularJS, NodeJS ...)</em>
          </li>
          <li>
            <span className="bar-expand skillbar-anim" style={{ width: "75%" }} />
            <em>PHP & FRIENDS (Wordpress, Symfony ...)</em>
          </li>
          <li>
            <span className="bar-expand skillbar-anim" style={{ width: "74%" }} />
            <em>GIT & BASH</em>
          </li>
          <li>
            <span className="bar-expand skillbar-anim" style={{ width: "71%" }} />
            <em>CSS & Bootstrap</em>
          </li>
          <li>
            <span className="bar-expand skillbar-anim" style={{ width: "70%" }} />
            <em>JAVA</em>
          </li>
          <li>
            <span className="bar-expand skillbar-anim" style={{ width: "65%" }} />
            <em>C++</em>
          </li>
          <li>
            <span className="bar-expand skillbar-anim" style={{ width: "40%" }} />
            <em>Illustrator & photoshop</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
