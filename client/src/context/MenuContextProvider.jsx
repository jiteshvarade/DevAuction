import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext(null);

export const useMenuContext = () => {
  const something = useContext(MenuContext);
  return something;
};

export const MenuProvider = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ showMenu, setShowMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};
