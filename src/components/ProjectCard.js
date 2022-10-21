import React from "react";
import { Col } from "react-bootstrap";

function ProjectCard({
  title,
  description,
  imgUrl,
  onClick,
  onCaseClick,
  onDemoClick,
}) {
  return (
    <Col size={12} sm={6} md={4} onClick={onClick}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="cardImg" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className={"btns__container"}>
            <button className={"btns__button"} onClick={onCaseClick}>
              <h5>Case</h5>
            </button>
            <button className={"btns__button"} onClick={onDemoClick}>
              <h5>Demo</h5>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;