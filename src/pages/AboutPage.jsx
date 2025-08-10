import React from "react";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>About NewsPulse</h1>
        <p style={styles.paragraph}>
          NewsPulse is a simple news app built with React.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            🔐 Authentication with protected routes
          </li>
          <li style={styles.listItem}>📡 News fetched from an external API</li>
          <li style={styles.listItem}>🧠 Global state managed with Context</li>
          <li style={styles.listItem}>
            ✅ Form validation using React Hook Form + Yup
          </li>
        </ul>
        <p style={styles.paragraph}>
          Developed as a final project for the Summer Web Development Training
          2025.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #121826, #2c3e50)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  box: {
    maxWidth: "650px",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: "20px",
    padding: "35px 30px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(12px)",
    color: "#fff",
  },
  title: {
    fontSize: "30px",
    marginBottom: "20px",
    fontWeight: "700",
    color: "#00ffc8",
    letterSpacing: "1.2px",
  },
  paragraph: {
    fontSize: "17px",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
    marginBottom: "25px",
  },
  listItem: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    marginBottom: "12px",
    padding: "12px 15px",
    borderRadius: "10px",
    fontSize: "16px",
    boxShadow: "inset 0 0 5px rgba(0, 255, 200, 0.4)",
    textAlign: "left",
  },
};

export default About;
