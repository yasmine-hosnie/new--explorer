import React from "react";

const HomePage = () => {
  const categories = [
    { label: "Technology", path: "/news/technology" },
    { label: "Sports", path: "/news/sports" },
    { label: "About", path: "/about" },
    { label: "Profile", path: "/profile" },
    { label: "Categories", path: "/news" },
  ];

  const handleExplore = () => {
    window.location.href = "/news"; // ينقل لصفحة الكاتيجوريز
  };

  return (
    <div style={styles.container}>
      <div style={styles.card} className="fade-in">
        <h1 style={styles.title}>🏡 Welcome to News Explorer</h1>
        <p style={styles.subtitle}>
          Your one-stop hub for the latest news by category.
        </p>
        <p style={styles.instructions}>
          Select a category from the navigation bar or explore below.
        </p>

        <img
          src="/wallpaper.jpg"
          alt="News"
          style={styles.image}
          className="fade-in"
        />

        <button
          style={styles.ctaButton}
          className="hover-scale"
          onClick={handleExplore}
        >
          🚀 Explore News
        </button>

        <div style={styles.categories}>
          {categories.map((cat, index) => (
            <a
              key={index}
              href={cat.path}
              style={styles.categoryCard}
              className="hover-scale"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      <style>
        {`
          .fade-in {
            animation: fadeIn 1s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hover-scale {
            transition: transform 0.3s ease;
          }
          .hover-scale:hover {
            transform: scale(1.05);
          }
        `}
      </style>
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
  card: {
    maxWidth: "750px",
    width: "100%",
    backgroundColor: "#35404E",
    borderRadius: "20px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  },
  title: {
    fontSize: "32px",
    marginBottom: "12px",
    color: "#FFF",
    fontWeight: "700",
  },
  subtitle: {
    fontSize: "18px",
    marginBottom: "8px",
    color: "#FFF",
  },
  instructions: {
    fontSize: "14px",
    marginBottom: "20px",
    color: "#FFF",
    fontStyle: "italic",
  },
  image: {
    maxWidth: "100%",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.12)",
    marginBottom: "20px",
  },
  ctaButton: {
    backgroundColor: "#00ffc8",
    color: "#121826",
    border: "none",
    padding: "12px 25px",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  categories: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
  },
  categoryCard: {
    backgroundColor: "#121826",
    color: "#fff",
    borderRadius: "12px",
    padding: "15px 20px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "120px",
  },
};

export default HomePage;
