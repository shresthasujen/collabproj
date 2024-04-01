import React, { useEffect } from "react";
import styles from "./evolve.css"; // Use the ?inline query

const Evoloving = () => {
  // Empty dependency array ensures this effect runs once after the initial render

  return (
    <>
      <h1>Our Process</h1>
      <div className={styles["process-wrapper"]}>
        <div id="progress-bar-container">
          <ul>
            <li className={`step step01 active ${styles["step-inner"]}`}>
              HOME WORK
            </li>
            <li className={`step step02 ${styles["step-inner"]}`}>
              RESPONSIVE PART
            </li>
            <li className={`step step03 ${styles["step-inner"]}`}>
              Creative CREATIONS
            </li>
            <li className={`step step04 ${styles["step-inner"]}`}>
              TESTIMONIALS PART
            </li>
            <li className={`step step05 ${styles["step-inner"]}`}>
              OUR LOCATIONS
            </li>
          </ul>

          <div id="line">
            <div id="line-progress"></div>
          </div>
        </div>

        <div id="progress-content-section">
          <div className={`section-content ${styles.discovery} active`}>
            <h2>HOME SECTION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis. Proin
              nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
              in dapibus lorem. Suspendisse vitae velit ac ante consequat
              placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
              consequat eu. Praesent pulvinar tincidunt leo et condimentum.
              Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
              odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div className={`section-content ${styles.strategy}`}>
            <h2>GALLERY SECTION</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis. Proin
              nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
              in dapibus lorem. Suspendisse vitae velit ac ante consequat
              placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
              consequat eu. Praesent pulvinar tincidunt leo et condimentum.
              Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
              odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div className={`section-content ${styles.creative}`}>
            <h2>Creative CREATIONS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis. Proin
              nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
              in dapibus lorem. Suspendisse vitae velit ac ante consequat
              placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
              consequat eu. Praesent pulvinar tincidunt leo et condimentum.
              Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
              odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div className={`section-content ${styles.production}`}>
            <h2>TESTIMONIALS NOW</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis. Proin
              nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
              in dapibus lorem. Suspendisse vitae velit ac ante consequat
              placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
              consequat eu. Praesent pulvinar tincidunt leo et condimentum.
              Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
              odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>

          <div className={`section-content ${styles.analysis}`}>
            <h2>OUR LOCATIONS</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              neque justo, consequat non fermentum ac, tempor eu turpis. Proin
              nulla eros, placerat non ipsum ut, dapibus ullamcorper ex. Nulla
              in dapibus lorem. Suspendisse vitae velit ac ante consequat
              placerat ut sed eros. Nullam porttitor mattis mi, id fringilla ex
              consequat eu. Praesent pulvinar tincidunt leo et condimentum.
              Maecenas volutpat turpis at felis egestas malesuada. Phasellus sem
              odio, venenatis at ex a, lacinia suscipit orci.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Evoloving;
