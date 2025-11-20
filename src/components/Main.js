import React from 'react';

const Main = () => {
  const handleClick = () => {
    alert("Welcome to My React Website!");
  }

  return (
    <main style={{padding: '20px', textAlign: 'center'}}>
      <h2>Hello React!</h2>
      <p>This is a simple React website.</p>
      <button onClick={handleClick}>Click Me</button>
    </main>
  );
}

export default Main;
