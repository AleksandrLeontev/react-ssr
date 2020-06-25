import React from 'react';
import { useSelector } from "react-redux";

const HelloWorld = () => {

  const name = useSelector((state) => state.auth.name)

  console.log(name);

  return (
      <div>
        <h3>
          Hello, {name}!
        </h3>
        <hr />
        <form >
          <label htmlFor="name">
            Say hello to:
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => console.log(e.target.value)}
          />
        </form>
      </div>
  );
}

export default HelloWorld