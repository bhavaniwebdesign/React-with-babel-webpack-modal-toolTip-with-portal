import React from "react";
const Button = ({ text = "This sample Button", ...rest }) => {
  return (
    <button type="button" style={{ padding: "10px" }} {...rest}>
      {text}
    </button>
  );
};
export default Button;
