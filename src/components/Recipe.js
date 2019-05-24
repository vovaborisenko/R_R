import React from 'react';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';
import Summary from './Summary';

const Recipe = ({ name, ingredients, steps }) =>
  <section id={name.toLowerCase().replace(/ /g, '-')}>
    <h1>{name}</h1>
    <Summary ingredients={ingredients} steps={steps} />
    <IngredientsList list={ingredients} />
    <Instructions title="Cooking Instructions"
                  steps={steps} />
  </section>

export default Recipe;