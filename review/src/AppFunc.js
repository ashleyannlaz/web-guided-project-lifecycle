import React, { useState, useEffect } from "react";

const AppFunc = () => {
  console.log("App");
  const [name, setName] = useState("Warren");

  useEffect(() => {
    console.log("Component has mounted")
  }, []);
  
  useEffect(() => {
    console.log('Component has updated')
  })
  const handleClick = () => {
    // console.log('Change State');
    setName("Allison");
  };
  // console.log('Render DOM');
  return (
    <div>
      <h1>Hello {name}!</h1>
      <h2>Hello</h2>
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;
