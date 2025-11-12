"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faEnvelope,
  faGraduationCap,
  faFolderOpen,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="https://www.instagram.com/olin_acronym/" className="nav__logo">
          <img
            src="https://i.postimg.cc/gJDGp6fK/Acronym-Mug.png"
            alt="sideLogo"
          />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="/#home" className="nav__link">
                  <FontAwesomeIcon icon={faHouse} />
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/#about" className="nav__link">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/#resume" className="nav__link">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/#work" className="nav__link">
                  <FontAwesomeIcon icon={faFolderOpen} />
                </Link>
              </li>

              <li className="nav__item">
                <Link href="/#contact" className="nav__link">
                  <FontAwesomeIcon icon={faComment} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">24 - 10 - 2025</span>
          <span className="copyright">Julian Shah</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
