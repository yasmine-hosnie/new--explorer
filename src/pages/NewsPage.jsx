// src/pages/NewsPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/NewsPage.css";

const NewsPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=d225bb3d3a574d4298ee286016870cf7`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) return <p className="loading">Loading news...</p>;

  return (
    <div className="news-container">
      <h1 className="news-title">Category: {category}</h1>
      <div className="news-grid">
        {articles.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img src={article.urlToImage} alt="news" className="news-image" />
            )}
            <h2 className="news-headline">{article.title}</h2>
            <p className="news-description">
              {article.description?.slice(0, 100)}...
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="read-more"
            >
              Read more →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
