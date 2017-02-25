import React, { PropTypes } from "react"
import { Link } from 'react-router';
import styles from "./index.css"

const PageError = ({ error, errorText }) => (
  <div className={ styles.container }>
    <div className={ styles.text }>
      <p className={ styles.title }>
        { errorText }
      </p>
      {
        error === 404 &&
        <div className={styles.text}>
          { "Het ziet ernaar uit dat deze pagina niet bestaat. " }
          <br/>
          <Link to="/">Ga terug naar onze home pagina</Link>
          <br />
          { "Aarzel niet om dit aan ons te rapporteren 😁." }
        </div>
      }
    </div>
  </div>
)

PageError.propTypes = {
  error: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Sorry, deze pagina werd niet gevonden",
}

export default PageError
