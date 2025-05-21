import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import generalstyles from "../Style.module.css";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const savedUsername = localStorage.getItem("username");
    if (token && savedUsername) {
      setIsLoggedIn(true);
      setUsername(savedUsername);
    }
  }, []);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      navigate(`/profile/${username}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <header className={styles.header}>
      <div className={generalstyles.dflexBetween}>
        <NavLink to="/">
          <h1>Fight Club</h1>
        </NavLink>

        <nav>
          <ul className={styles.navigation}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                Contact us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/battle"
                className={({ isActive }) =>
                  isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                }
              >
                Battle
              </NavLink>
            </li>
          </ul>
        </nav>

        <button onClick={handleAuthClick} className={styles.btnStyle}>
          {isLoggedIn ? "Profile" : "Log in"}
        </button>
      </div>
    </header>
  );
}
