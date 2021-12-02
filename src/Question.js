import React from "react";
import { useState } from "react";

export default function Question({ title, info }) {
  const [show, setShow] = useState(false);
  return (
    <div className="question">
      <header>
        <h4 className="question-title">{title}</h4>
        <button onClick={() => setShow(!show)} className="btn">
          {show ? "-" : "+"}
        </button>
      </header>
      {show && <p>{info}</p>}
    </div>
  );
}
