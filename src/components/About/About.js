import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="a-container" id="a-container">
      <h1 className="a-container-heading">About Me</h1>
      <div class="about-container">
        <div class="timeline">
          <ul>
            <li>
              <div class="timeline-content">
                <h3 class="date">2010</h3>
                <h1>HighSchool</h1>
                <p>Passed HighSchool Examination </p>
                <p>CGPA 6.8</p>
                <p>Saraswati Vidhya Mandir</p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">2012</h3>
                <h1>Intermediate</h1>
                <p>Passed 12th Standard Examination</p>
                <p>Percentage 64%</p>
                <p>Dayanand Inter College</p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">2016</h3>
                <h1>B.Tech Civil Engineering</h1>
                <p>Completed Civil Engineering</p>
                <p>Percentage 64%</p>
                <p>PSIT College of Engineering</p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">2018</h3>
                <h1>Site Engineer</h1>
                <p>Satarted my First Job as a Site Engineer</p>
                <p>Handled Complete from excavation to constructions of road</p>
                <p>MKG Constructions Pvt Limited</p>
              </div>
            </li>
            <li>
              <div class="timeline-content">
                <h3 class="date">2020</h3>
                <h1>M.Tech Geoinformatics</h1>

                <p>Complete M.Tech</p>
                <p>CGPA 6.8</p>
                <p>
                  Indian Institute of Engineering Science and Technology,Shibpur
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
