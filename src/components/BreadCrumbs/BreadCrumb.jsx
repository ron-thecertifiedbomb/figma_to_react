import React from "react";
import "./BreadCrumbs.css";

const BreadCrumb = ({ titleone, titletwo }) => {
  return (
    <div className="bread-crumbs-wrapper">
      <h1>
        <span className="span-title">{titleone} </span> / {titletwo}
      </h1>
    </div>
  );
};

export default BreadCrumb;
