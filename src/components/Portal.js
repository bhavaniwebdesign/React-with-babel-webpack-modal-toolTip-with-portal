/* @flow */
import * as React from "react";
import * as ReactDOM from "react-dom";

const Portal = React.forwardRef((props, ref) => {
  const { container, children } = props;

  return ReactDOM.createPortal(
    <div ref={ref}>{children}</div>,
    document.getElementById("portal-root") || document.body
  );
});

Portal.displayName = "Portal";

export default Portal;
export { Portal };
