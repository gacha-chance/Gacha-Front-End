import React from "react";
import { Link } from "react-router-dom";
import "./css/bootstrap.min.css";
import "./css/index.css";
const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-md fixed-top">
        <Link
          to="/Gacha-Front-End/src/components/HTML/index.html"
          class="logo-name navbar-brand nav-link"
        >
          GACHA CHANCE <i class="fas fa-calculator" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarNav" class="collapse navbar-collapse text-center">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="./" class="nav-link">
                Get Started
              </Link>
            </li>
            <li class="nav-item">
              <Link href="#about-main" class="nav-link">
                About Gacha
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/Gacha-Front-End/src/components/HTML/team.html"
                class="nav-link"
              >
                Meet the Team
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
