import { useState } from 'react';
import './ColorBox.css';

const ColorBox = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const handleClick = () => {
        setCurrentColorIndex((currentColorIndex + 1) % colors.length);
    };

    const currentColor = colors[currentColorIndex];
    const nextColor = colors[(currentColorIndex + 1) % colors.length];

    return (
        <div className="color-box" style={{ backgroundColor: currentColor }}>
            <button onClick={handleClick}>{nextColor}</button>
            <p>{currentColor}</p>
        </div>
    );
};

export default ColorBox;