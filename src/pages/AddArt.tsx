import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import MainContainer from "../components/UI/MainContainer";
import PagesParent from "./Container/PagesParent";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import AppURL from "../api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddArt: React.FC = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [body, setBody] = useState("");
  const nav = useNavigate();

  const titleHandler = (eo) => {
    setTitle(eo.target.value);
  };

  const summaryHandler = (eo) => {
    setSummary(eo.target.value);
  };

  const bodyHandler = (eo) => {
    setBody(eo.target.value);
  };

  const submitHandler = (eo) => {
    // to prevent the default
    eo.preventDefault();

    // handling the form data by this class
    const formData = {
      title,
      summary,
      body,
    };

    if (title.trim() !== "" && summary.trim() !== "" && body.trim() !== "") {
      axios
        .post(AppURL.AddArtURL, formData)
        .then((res) => {
          alert(res.data.message);
          setTitle("");
          setSummary("");
          setBody("");
          nav("/");
        })
        .catch((error) => console.log(error));
    } else {
      alert("Please enter the all data");
    }
  };

  return (
    <PagesParent>
      <MainContainer className="mt-5">
        <h1 className="mt-5 text-center">Create new article</h1>
        <Form onSubmit={submitHandler}>
          <FloatingLabel
            controlId="artTitle"
            label="Article title"
            className="mb-5 mt-5"
          >
            <Form.Control
              onChange={titleHandler}
              value={title}
              placeholder="The article title"
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="artSummary"
            label="Article summary"
            className="mb-5"
          >
            <Form.Control
              onChange={summaryHandler}
              value={summary}
              placeholder="The article summary"
            />
          </FloatingLabel>

          <FloatingLabel controlId="artBody" label="Article body">
            <Form.Control
              as="textarea"
              onChange={bodyHandler}
              value={body}
              placeholder="Enter the article body"
              style={{ height: "100px" }}
            />
          </FloatingLabel>

          <Button variant="primary" type="submit" className="mt-5">
            Submit
          </Button>
        </Form>
      </MainContainer>
    </PagesParent>
  );
};

export default AddArt;
