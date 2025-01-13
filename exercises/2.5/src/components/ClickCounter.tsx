import React, { useState } from 'react';

function ClickCounter() {
    const [count, setCount] = useState(0);
  
    return (
      <>
        <div className="card">
          <button onClick={() => setCount((count: number) => count + 1)}>
            count is {count}
          </button>
        </div>
      </>
    );
}

export default ClickCounter;
  