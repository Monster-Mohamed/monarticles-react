import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppURL from "../api";
import TrendingCard from "../components/UI/Cards/TrendingCard";
import MainContainer from "../components/UI/MainContainer";
import Article from "../interfaces/Article";
import PagesParent from "./Container/PagesParent";
import { AiOutlineReload } from "react-icons/ai";

const Home: React.FC = () => {
  const [allArts, setAllArts] = useState<Article[]>([]);
  const [isReady, setIsReady] = useState(false);

  const getAllArticles = () => {
    setIsReady(false);
    axios
      .get(AppURL.AllArtsURL)
      .then((res) => {
        setAllArts(res.data);
        setIsReady(true);
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    getAllArticles();
  }, []);

  const all =
    isReady && allArts?.length > 0 ? (
      allArts?.map((art) => (
        <Col key={art._id} className="mt-5" lg={4} md={6} xs={12}>
          <TrendingCard title={art.title} summary={art.summary} _id={art._id} />
        </Col>
      ))
    ) : (
      <div className="mt-5">
        <h2 className="mt-5 text-center">
          The trending articles is empty
          <br />
          <br />
          <Link to="/add">Create one?</Link>
        </h2>
      </div>
    );

  const refreshHandler = (eo) => {
    setIsReady(false);
    axios
      .get(AppURL.AllArtsURL)
      .then((res) => {
        setAllArts(res.data);
        setIsReady(true);
      })
      .catch((err) => console.error(err.message));
  };

  return (
    <PagesParent>
      <MainContainer>
        <h1 className="text-center mt-5">Trending Articles</h1>
        <button
          onClick={refreshHandler}
          className="btn btn-success btn-reload mt-5"
        >
          <AiOutlineReload className="fs-3 me-2 reload" />
          Refresh
        </button>
        <Row>{isReady ? all : <h2 className="mt-5">Loading...</h2>}</Row>
      </MainContainer>
    </PagesParent>
  );
};

export default Home;
