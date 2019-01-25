import { useState } from 'react';

export const useRandomColor = (colors, initialColor) => {
  const [color, setColor] = useState(initialColor);

  const changeColor = () => {
    const index = Math.floor(Math.random() * colors.length);
    
    if (color !== colors[index]) {
      setColor(colors[index]);
      return;
    } else {
      changeColor();
    }
  };
  return [color, changeColor];
}
