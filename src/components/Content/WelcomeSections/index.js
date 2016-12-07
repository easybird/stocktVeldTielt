import React from 'react';
import styles from './index.css';

const WelcomeSections = () => (
  <div className={styles.welcomeSections}>
    <section>
      <h2>Exclusief wonen in het groen met de stad aan je voordeur</h2>
      <div className={styles.longCopy}>Text</div>
      <button>Ontdek het aanbod</button>
    </section>
    <section>
      <h2>"Quote van iemand"</h2>
      <div className={styles.longCopy}>Text</div>
      <button>Lees het verhaal</button>
    </section>
    <section>
      <h2>Uniek klooster met 3 renovatie loften, 20 nieuwbouwwoningen en 14 appartementen</h2>
      <div className={styles.longCopy}>Text</div>
      <button>Ontdek het aanbod</button>
    </section>
    <section>
      <h2>Bouw mee aan een warme buurt binnen een mooie stad</h2>
      <div className={styles.longCopy}>Stocktveld is gelegen in het hartje van Tielt, met zijn locatie vlakbij het
        station, met scholen binnen handbereik, is het ideaal gelegen.
      </div>
      <button>Ontdek het aanbod</button>
    </section>
  </div>
);

export default WelcomeSections;
