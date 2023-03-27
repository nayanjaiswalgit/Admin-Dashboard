import React, { useContext, createContext, useState, Children } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  UserProfile: false,
  notification: false,
};
export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (colour) => {
    setCurrentColor(colour);
    localStorage.setItem("colorMode", colour);
    setThemeSettings(false);
  };

  const handleClick = (clicked) => {

    setIsClicked({ ...initialState, [clicked]: !isClicked[clicked] });
  
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        handleClick,
        setIsClicked,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        setColor,
        setMode,
        setThemeSettings,
        themeSettings,

      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
