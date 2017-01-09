import React from 'react';
import { Link as RouterLink } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';
import styles from './index.css';

const Button = ({ href, linkText, isScrollLink }) =>
  isScrollLink ?
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      duration={1000}
      className={styles.sectionLink}
    >
        {linkText}
    </ScrollLink> :
    <RouterLink
      className={styles.sectionLink}
      to={href}
    >
      {linkText}
    </RouterLink>


Button.propTypes = {
  href: React.PropTypes.string,
  linkText: React.PropTypes.string,
  isScrollLink: React.PropTypes.bool,
};

export default Button;
