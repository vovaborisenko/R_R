import React from 'react';
import Color from './Color';

const ColorList = ({ color=[], onRemove=f=>f, onRate=f=>f }) =>
  <div className="color-list">
    {(color.length === 0) ?
      <p>No Colors Listed. (Add a Color)</p> :
      ColorList.map(color =>
        <Color key={color.id} 
               {...color}
               onRate={(rating) => onRate(color.id, rating)}
               onRemove={() => onRemove(color.id)} />
      )
    }
  </div>

export default ColorList;