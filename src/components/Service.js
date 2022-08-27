import React from "react";
import PropTypes from "prop-types";

const Service = (props) => {
  return (
    <div className="bg-cyan-700 p-3 rounded-md">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-slate-300 text-xl link-underline w-fit flex items-center gap-2 hover:shadow-md"
      >
        {props.children}
      </a>
    </div>
  );
};

Service.propTypes = {
  link: PropTypes.string,
};

export default Service;
