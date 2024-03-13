import { useState } from "react";
import { Link } from "react-router-dom";

import { ideas, routLink } from "./constant";

function App() {
  return (
    <div className="pt-8 pb-8 border-indigo-300 border-r-4">
      <ul className=" flex flex-row p-4  px-8 border-solid border-2 border-green-300">
        {ideas?.map((idea, i) => (
          <Link to={`/${routLink[i]}`} key={routLink[i]}>
            <li key={i} className=" p-2 text-blue-400 mr-3 ">
              {idea.toUpperCase()}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default App;
