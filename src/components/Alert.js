import React from "react";

const Alert = (props) => {
  return (
    <div className="container my-2">
      <div className="alert alert-primary" role="alert">
        {props.message}
      </div>
    </div>
  );
};

export default Alert;
