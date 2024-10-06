import React from "react";

function Button({ text, buttonclass, isBeam = false }) {
  return (
    <button className={` btn ${buttonclass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {text}
    </button>
  );
}

export default Button;
