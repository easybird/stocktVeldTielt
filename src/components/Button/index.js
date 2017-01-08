import React from "react";
import { Link } from 'react-router';
import styles from './index.css';

const Button = ({href, linkText}) => (
  <Link
    className={styles.sectionLink}
    to={href}
  >
    {linkText}
  </Link>
);

Button.propTypes = {
  href: React.PropTypes.string,
  linkText: React.PropTypes.string
};

export default Button;
