import React, { Children } from "react";
import PropTypes from "prop-types";

const Service = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className=" text-slate-300 underline underline-offset-4 text-xl duration-300 transition ease-in-out hover:no-underline"
    >
      {props.children}
    </a>
  );
};

Service.propTypes = {
  link: PropTypes.string,
};

export default Service;
