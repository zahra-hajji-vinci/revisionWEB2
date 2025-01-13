import React, { useState } from 'react';

interface ClickCounterProps {
  title: string;
  message: string;
}

function ClickCounter({ title, message }: ClickCounterProps) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{title}</h1>
      <div className="card">
        <button onClick={() => setCount((count: number) => count + 1)}>
          count is {count}
        </button>
        {count >= 10 && <p>{message}</p>}
      </div>
    </>
  );
}

export default ClickCounter;