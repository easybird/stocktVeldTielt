import React from 'react';
import { Link as RouterLink } from 'react-router';
import { Link as ScrollLink } from 'react-scroll';
import styles from './index.css';

const Button = ({ href, linkText, isScrollLink, style, type }) => {
  let className = '';
  switch (type) {
    case Button.TYPE.FULL:
      className+=`${styles.btn} ${styles.btnFull}`;
      break;
    case Button.TYPE.GHOST:
      className+=`${styles.btn} ${styles.btnGhost}`;
      break;
    case Button.TYPE.SECTION:
    default:
      className+=styles.sectionLink;
      break;
  }

  return isScrollLink ?
    <ScrollLink
      to={href}
      spy={true}
      smooth={true}
      duration={1000}
      className={className}
    >
      {linkText}
    </ScrollLink> :
    <RouterLink
      style={style}
      className={className}
      to={href}
    >
      {linkText}
    </RouterLink>
};

Button.propTypes = {
  href: React.PropTypes.string,
  linkText: React.PropTypes.string,
  isScrollLink: React.PropTypes.bool,
  style: React.PropTypes.object,
  type: React.PropTypes.string
};

Button.TYPE = {
  FULL: "full",
  GHOST: "ghost",
  SECTION: "section"
};

export default Button;
