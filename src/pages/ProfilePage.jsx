import React from "react";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user, logout } = useAuth();

  // Alternative name if not provided
  const displayName =
    user?.name || (user?.email ? user.email.split("@")[0] : "User");

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>👤 Your Profile</h1>
        {user ? (
          <>
            <p style={styles.item}>
              <strong>Name:</strong> {displayName}
            </p>
            <p style={styles.item}>
              <strong>Email:</strong> {user.email}
            </p>
            <p style={styles.item}>
              <strong>Member since:</strong> August 2025
            </p>
            <button onClick={logout} style={styles.button}>
              Logout
            </button>
          </>
        ) : (
          <p style={styles.message}>
            Please login to access your profile details.
          </p>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #121826, #2c3e50)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderRadius: "20px",
    padding: "35px 30px",
    width: "100%",
    maxWidth: "500px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(12px)",
    color: "#fff",
  },
  title: {
    marginBottom: "25px",
    fontSize: "28px",
    fontWeight: "700",
    color: "#00ffc8",
  },
  item: {
    fontSize: "18px",
    margin: "12px 0",
    background: "rgba(0, 0, 0, 0.2)",
    padding: "10px",
    borderRadius: "10px",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#00ffc8",
    color: "#000",
    border: "none",
    padding: "12px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  message: {
    fontStyle: "italic",
    color: "#ccc",
  },
};

export default ProfilePage;
