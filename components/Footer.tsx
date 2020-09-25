import React, { ReactChild, ReactComponentElement, useState } from "react";

import { IconContext } from "react-icons";
import { MdHome, MdSubscriptions, MdVideoLibrary } from "react-icons/md";
import { FaFire } from "react-icons/fa";

import { AppView } from "./App";

import "../styles/Footer.scss";

type FooterProps = { currentView: string; changeView: any };
type NavItemsProps = {
  currView: string;
  icon: ReactChild;
  text: string;
};

const Footer = ({ currentView, changeView }: FooterProps) => {
  function renderNavItem({ currView, icon, text }: NavItemsProps) {
    const isActive = (currView: string) => currentView === currView && "#fff";
    return (
      <li
        style={{ color: `${isActive(currView)}` }}
        onClick={() => changeView(currView)}
      >
        <IconContext.Provider
          value={{
            size: "1.5rem",
            color: `${isActive(currView)}`,
          }}
        >
          {icon}
          {text}
        </IconContext.Provider>
      </li>
    );
  }

  return (
    <ul className="footer">
      {renderNavItem({
        currView: AppView.HOME,
        icon: <MdHome />,
        text: "Home",
      })}
      {renderNavItem({
        currView: AppView.TRENDING,
        icon: <FaFire />,
        text: "Trending",
      })}
      {renderNavItem({
        currView: AppView.SUBSCRIPTIONS,
        icon: <MdSubscriptions />,
        text: "Subscriptions",
      })}
      {renderNavItem({
        currView: AppView.LIBRARY,
        icon: <MdVideoLibrary />,
        text: "Library",
      })}
    </ul>
  );
};

export default Footer;

// 800,
// 1313, sidenav collapse
