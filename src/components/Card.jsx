import React from "react";
import { Spinner } from "react-bootstrap";

const Card = (props) => {
  return (
    <>
      {props.data ? (
        props.data.map((items, index) => {
          return (
            <div className="col-md-4 col-10 mx-auto" key={index}>
              <div className="card">
                <img
                  src={items.blogImg}
                  className="card-img-top"
                  alt="blog"
                  fluid
                />
                <div className="card-body">
                  <h5 className="card-title">{items.title}</h5>
                  <p className="card-text">{items.description}</p>
                  <a
                    href="https://www.youtube.com/c/ThapaTechnical"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Read Full Post
                  </a>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Spinner className="loading" animation="grow" variant="danger" />
      )}
    </>
  );
};

export default Card;
