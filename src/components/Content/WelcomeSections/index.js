import React from 'react';
import { Link } from 'react-router';
import styles from './index.css';

const WelcomeSections = () => (
  <div className={styles.welcomeSections}>
    <section>
      <Link to="/">
        <span className={styles.emptySpan}></span>
      </Link>
      <h2>Exclusief wonen in het groen met de stad aan je voordeur</h2>
      <div className={styles.longCopy}>Text</div>
      <Link className={styles.sectionLink} to="/">
        Ontdek het aanbod
      </Link>
    </section>
    <section>
      <Link to="/">
        <span className={styles.emptySpan}></span>
      </Link>
      <div className={styles.columns}>
        <div className={styles.col2md}>
          <img src="/assets/img/banner/test_foto_1.jpg" alt="Whatever picture"></img>
        </div>
        <div className={styles.col2md}>
          <h2>"Quote van iemand"</h2>
          <div className={styles.longCopy}>Text</div>
          <Link className={styles.sectionLink} to="/">
            Lees het verhaal
          </Link>
        </div>
      </div>
    </section>
    <section>
      <Link to="/">
        <span className={styles.emptySpan}></span>
      </Link>
      <div className={styles.columns}>
        <div className={styles.col2md}>
          <h2>Uniek klooster met 3 renovatie loften, 20 nieuwbouwwoningen en 14 appartementen</h2>
          <div className={styles.longCopy}>Text</div>
          <Link className={styles.sectionLink} to="/">
            Ontdek het aanbod
          </Link>
        </div>
        <div className={styles.col2md}>
          <img src="/assets/img/banner/test_foto_1.jpg" alt="Whatever picture"></img>
        </div>
      </div>
    </section>
    <section>
      <Link to="/">
        <span className={styles.emptySpan}></span>
      </Link>
      <div className={styles.columns}>
        <div className={styles.col2md}>
          <img src="/assets/img/banner/test_foto_1.jpg" alt="Whatever picture"></img>
        </div>
        <div className={styles.col2md}>

          <h2>Bouw mee aan een warme buurt binnen een mooie stad</h2>
          <div className={styles.longCopy}>Stocktveld is gelegen in het hartje van Tielt, met zijn locatie vlakbij het
            station, met scholen binnen handbereik, is het ideaal gelegen.
          </div>
          <Link className={styles.sectionLink} to="/">
            Bekijk de locatie
          </Link></div>
      </div>
    </section>
  </div>
);

export default WelcomeSections;
