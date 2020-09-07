import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.Change} type="text" value={props.input} />
      <button onClick={props.addIt}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
