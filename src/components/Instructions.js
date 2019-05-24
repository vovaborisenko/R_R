import React from 'react';

const Instructions = ({ title, steps }) =>
  <section className="instructions">
    <h3>{title}</h3>
    {steps.map((s, i) =>
      <p key={i}>{s}</p>
    )}
  </section>

export default Instructions;