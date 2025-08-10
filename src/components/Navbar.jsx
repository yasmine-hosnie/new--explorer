// src/components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { isAuth, user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>📰 News Explorer</h2>

      <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul
        style={{
          ...styles.links,
          ...(menuOpen ? styles.linksMobileOpen : styles.linksMobileClosed),
        }}
      >
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/news/technology">Technology</StyledLink>
        </li>
        <li>
          <StyledLink to="/news/sports">Sports</StyledLink>
        </li>
        <li>
          <StyledLink to="/about">About</StyledLink>
        </li>
        <li>
          <StyledLink to="/profile">Profile</StyledLink>
        </li>
        <li>
          <StyledLink to="/news">Categories</StyledLink>
        </li>

        {isAuth ? (
          <>
            <li style={styles.welcome}>Hi {user?.name}</li>
            <li>
              <button onClick={handleLogout} style={styles.button}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <StyledLink to="/login">Login</StyledLink>
            </li>
            <li>
              <StyledLink to="/register">Register</StyledLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

const StyledLink = ({ to, children }) => (
  <Link
    to={to}
    style={styles.link}
    onMouseEnter={(e) => (e.target.style.color = "#00ffc8")}
    onMouseLeave={(e) => (e.target.style.color = "#e0e0e0")}
  >
    {children}
  </Link>
);

const styles = {
  nav: {
    backgroundColor: "#121826",
    color: "#fff",
    padding: "15px 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
    color: "#00ffc8",
    fontFamily: "'Segoe UI', sans-serif",
  },
  menuIcon: {
    fontSize: "24px",
    color: "#fff",
    cursor: "pointer",
    display: "none",
  },
  links: {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "18px",
    margin: 0,
    padding: 0,
    transition: "all 0.3s ease",
  },
  linksMobileOpen: {
    position: "absolute",
    top: "60px",
    right: "0",
    backgroundColor: "#121826",
    flexDirection: "column",
    padding: "20px",
    width: "200px",
    display: "flex",
    gap: "15px",
  },
  linksMobileClosed: {
    "@media(maxWidth:768px)": {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "#e0e0e0",
    fontWeight: "500",
    fontSize: "15px",
    padding: "6px 10px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  },
  button: {
    backgroundColor: "#ff4b4b",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "14px",
    transition: "background-color 0.3s ease",
  },
  welcome: {
    color: "#00ffcc",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default Navbar;
