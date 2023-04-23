import React from "react";
import css from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.section__title}>{title}</h2>
    {children}
  </section>
);

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}

export default Section;