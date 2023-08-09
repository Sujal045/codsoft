import React from "react";
import certificate from "../assets/certificate.pdf";

const Experience = () => {
  return (
    <div id="experience">
      <div>
        <h2>Professional Work</h2>
        <h3>Full-stack Development</h3>
        <section>
          <div>
            <p>Fleeguide Travel Services - Delhi</p>
            <p>April 2023 - June 2023</p>
          </div>
          <p className="des">Description</p>
          <ol>
            <li>Worked with MERN stack.</li>
            <li>
              Developed a comprehensive and fully functional admin page,
              allowing efficient management of user-facing aspects.
            </li>
            <li>Built personalized mail template.</li>
            <li>UI changes in important pages and bug fixes.</li>
          </ol>
        </section>
        <div>
          <a href={certificate} target="blank">
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
