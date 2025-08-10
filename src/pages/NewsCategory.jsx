// src/pages/NewsCategory.jsx
import React from "react";
import { Link } from "react-router-dom";

const NewsCategory = () => {
  const categories = [
    { name: "general", label: "General" },
    { name: "technology", label: "Technology" },
    { name: "sports", label: "Sports" },
    { name: "entertainment", label: "Entertainment" },
    { name: "science", label: "Science" },
    { name: "health", label: "Health" },
    { name: "business", label: "Business" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📰 Explore News Categories</h1>
      <div style={styles.grid}>
        {categories.map((cat) => (
          <Link key={cat.name} to={`/news/${cat.name}`} style={styles.card}>
            <div style={styles.imageWrapper}>
              <img
                src={`/categories/${cat.name}.jpg`}
                alt={cat.label}
                style={styles.image}
                onError={(e) =>
                  (e.currentTarget.src = "/categories/placeholder.jpg")
                }
              />
            </div>
            <div style={styles.textWrapper}>
              <h2 style={styles.text}>{cat.label}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    minHeight: "100vh",
    textAlign: "center",
  },
  title: {
    color: "#00ffc8",
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "0 20px",
  },
  card: {
    background: "rgba(255,255,255,0.05)", // Transparent dark style
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    textDecoration: "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  imageWrapper: {
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  textWrapper: {
    padding: "0.8rem",
  },
  text: {
    color: "#fff",
    fontSize: "1rem", // smaller font size
    fontWeight: "600",
    textTransform: "capitalize",
  },
};

// Hover effects
const cardHover = `
  a:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }
  a:hover img {
    transform: scale(1.05);
  }
`;

// Inject hover styles into the document
const styleSheet = document.createElement("style");
styleSheet.innerText = cardHover;
document.head.appendChild(styleSheet);

export default NewsCategory;
