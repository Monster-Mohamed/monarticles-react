import React from "react";
import { Link } from "react-router-dom";
import Article from "../../../../interfaces/Article";
import cl from "./index.module.scss";

const TrendingCard: React.FC<Article> = ({ title, summary, _id }) => {
  return (
    <div className={cl.card}>
      <h1 className="text-center">{title}</h1>
      <p className={cl.summary}>{summary}</p>
      <Link className={cl.link} to={`article/${_id}`}>
        show more
      </Link>
    </div>
  );
};

export default TrendingCard;
