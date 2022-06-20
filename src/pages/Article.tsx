import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppURL from "../api";
import MainContainer from "../components/UI/MainContainer";
import Article from "../interfaces/Article";
import PagesParent from "./Container/PagesParent";
import { BsFillTrashFill } from "react-icons/bs";

const ArticlePage: React.FC = () => {
  const { _id } = useParams();
  const [theArticle, setTheArticle] = useState<Article>();
  const [isReady, setIsReady] = useState(false);
  const [isDeleteComplete, setIsDeleteComplete] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    axios
      .get(`${AppURL.ArticleURL}/${_id}`)
      .then((res) => {
        setTheArticle(res.data);
        setIsReady(true);
      })
      .catch((err) => {
        nav("/");
      });
  }, [_id, nav]);

  const deleteHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete this article?")) {
      setIsDeleteComplete(false);
      axios
        .delete(`${AppURL.ArticleURL}/${_id}`)
        .then((res) => {
          setIsDeleteComplete(true);
          alert(res.data.message);
          nav("/");
        })
        .catch((err) => {
          nav("/");
        });
    }
  };

  return (
    <PagesParent>
      <MainContainer>
        {isReady ? (
          <React.Fragment>
            <h1 className="mt-5">{theArticle.title}</h1>
            <p className="mt-5 fs-3">{theArticle.body}</p>
            <button
              onClick={deleteHandler}
              className="mt-5 btn btn-danger text-light"
            >
              {isDeleteComplete ? (
                <>
                  <BsFillTrashFill className="fs-4 me-2" />
                  Delete this article
                </>
              ) : (
                "Loading..."
              )}
            </button>
          </React.Fragment>
        ) : (
          <h1>Loading...</h1>
        )}
      </MainContainer>
    </PagesParent>
  );
};

export default ArticlePage;
