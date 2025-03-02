import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="event-form1">
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="event-form2">
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
    </div>
  );
}


// export function FormBtn(props) {
//   return (
//     <button onClick={console.log("its working")} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
//       {props.children}
//     </button>
//   );
// }
