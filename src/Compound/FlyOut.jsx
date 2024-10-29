/***
 * ## Compound Pattern
 * components that belongs to each other (ecosystem) depandant on each other through
 * the shared state and share logic together.
 * e.g; Select Dropdown etc.
 *  ****/

import React, { createContext, useContext, useState } from "react";

const FlyOutContext = createContext();

export const FlyOut = (props) => {  
  const [open, toggle] = useState(false);

  return (
    <div className="w-1/3 m-4">
      <FlyOutContext.Provider
        value={{
          open,
          toggle,
        }}
      >
        {props.children}
      </FlyOutContext.Provider>
    </div>
  );
};

const Toggle = () => {
  const { open, toggle } = useContext(FlyOutContext);

  return (
    <div
      className="bg-slate-500 text-gray-200 font-bold py-2 px-4"
      onClick={() => toggle(!open)}
    >
      Toggle 🚀
    </div>
  );
};

const List = ({ children }) => {
  const { open } = useContext(FlyOutContext);

  return open && <ul className="list-disc bg-slate-400">{children}</ul>;
};

const Item = ({ children }) => {
  return <li className="text-sm text-gray-100 cursor-pointer hover:bg-slate-500 p-2">{children}</li>;
};

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;
